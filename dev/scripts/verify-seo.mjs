/* =====================================================================
 * SEO verification — ตรวจผลลัพธ์ build (dist/) หลังติดตั้ง SEO
 * ใช้: node scripts/verify-seo.mjs   (จากโฟลเดอร์ dev/ หลัง npm run build)
 * ตรวจ: title / meta description / canonical / OG / Twitter / robots meta /
 *       JSON-LD (parse ได้จริง) / robots.txt / sitemap.xml ใน dist/
 * ===================================================================== */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const html = readFileSync(dist + 'index.html', 'utf8');

let pass = 0;
let fail = 0;
const check = (ok, label) => {
  console.log(`${ok ? '✓' : '✗'} ${label}`);
  if (ok) pass += 1;
  else fail += 1;
};

/* --- Head tags --- */
check(
  html.includes('<title>Nirin Packaging | โรงงานผลิตบรรจุภัณฑ์เครื่องสำอางและแพ็กเกจจิ้ง</title>'),
  'title'
);
check(/<meta\s+name="description"\s+content="[^"]+"/.test(html), 'meta description');
check(
  /<link\s+rel="canonical"\s+href="https:\/\/www\.nirinpackaging\.com\/"/.test(html),
  'canonical https://www.nirinpackaging.com/'
);
check(html.includes('property="og:title"'), 'og:title');
check(html.includes('property="og:description"'), 'og:description');
check(html.includes('property="og:url"'), 'og:url');
check(html.includes('property="og:image"'), 'og:image');
check(html.includes('property="og:site_name"'), 'og:site_name');
check(html.includes('property="og:locale" content="th_TH"'), 'og:locale th_TH');
check(
  html.includes('name="twitter:card" content="summary_large_image"'),
  'twitter:card summary_large_image'
);
check(html.includes('name="twitter:image"'), 'twitter:image');
check(html.includes('name="robots" content="index, follow"'), 'robots meta index, follow');
check(html.includes('<html lang="th">'), 'html lang="th"');

/* --- JSON-LD --- */
const jsonLdBlocks = [
  ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
];
check(jsonLdBlocks.length === 1, `JSON-LD block count = ${jsonLdBlocks.length} (expect 1)`);
if (jsonLdBlocks.length === 1) {
  try {
    const data = JSON.parse(jsonLdBlocks[0][1]);
    const nodes = data['@graph'] || [];
    const types = nodes.map((node) => node['@type']);
    check(types.includes('Organization'), 'JSON-LD Organization');
    check(types.includes('WebSite'), 'JSON-LD WebSite');
    const org = nodes.find((node) => node['@type'] === 'Organization');
    check(Array.isArray(org?.sameAs) && org.sameAs.length > 0, 'Organization sameAs (social links)');
    check(
      !JSON.stringify(data).match(/"price"|"aggregateRating"|"reviewCount"/),
      'JSON-LD has no invented price/rating fields'
    );
  } catch (error) {
    check(false, `JSON-LD parses as valid JSON (${error.message})`);
  }
}

/* --- robots.txt --- */
check(existsSync(dist + 'robots.txt'), 'dist/robots.txt exists');
if (existsSync(dist + 'robots.txt')) {
  const robots = readFileSync(dist + 'robots.txt', 'utf8');
  check(robots.includes('User-agent: *'), 'robots.txt User-agent: *');
  check(robots.includes('Allow: /'), 'robots.txt Allow: /');
  check(
    robots.includes('Sitemap: https://www.nirinpackaging.com/sitemap.xml'),
    'robots.txt Sitemap directive'
  );
}

/* --- sitemap.xml --- */
check(existsSync(dist + 'sitemap.xml'), 'dist/sitemap.xml exists');
if (existsSync(dist + 'sitemap.xml')) {
  const sitemap = readFileSync(dist + 'sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const expected = [
    'https://www.nirinpackaging.com/',
    'https://www.nirinpackaging.com/about-us',
    'https://www.nirinpackaging.com/product-catalog',
    'https://www.nirinpackaging.com/oem-process',
    'https://www.nirinpackaging.com/contact-us',
  ];
  check(urls.length === expected.length, `sitemap URL count = ${urls.length} (expect ${expected.length})`);
  expected.forEach((url) => check(urls.includes(url), `sitemap: ${url}`));
  check(!sitemap.includes('#/'), 'sitemap.xml has no hash URLs (#/...)');
}

console.log(`\nResult: ${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
