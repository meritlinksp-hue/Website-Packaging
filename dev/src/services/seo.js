/* =====================================================================
 * SEO service — จัดการ title / meta description / canonical /
 * Open Graph / Twitter Card และ JSON-LD แบบ dynamic
 *
 * หลักการทำงาน:
 * - ค่าเริ่มต้นทั้งหมดถูกกำหนดไว้ใน dev/index.html แล้ว (หน้าแรก)
 *   ฟังก์ชันนี้จะ "อัปเดตแท็กเดิมในตำแหน่งเดิม" เท่านั้น → ไม่มีแท็กซ้ำ
 * - ใช้ URL โปรดักชันเป็นฐานเสมอ (canonical / og:url / og:image)
 *   แม้รันบน localhost เพราะ SEO มีผลเฉพาะโดเมนจริง
 * ===================================================================== */

export const SITE_URL = 'https://www.nirinpackaging.com';
export const SITE_NAME = 'Nirin Packaging';

const setMetaTag = (attr, key, content) => {
  if (content == null) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setLinkTag = (rel, href) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

/* ค่าเริ่มต้น og:image = ภาพ hero หลักของเว็บไซต์ที่มีอยู่แล้ว (ไม่สร้างภาพใหม่) */
const DEFAULT_OG_IMAGE = {
  path: '/images/we-are-nirin.png',
  width: 1980,
  height: 1200,
  alt: 'We are Nirin Packaging ผู้ผลิตบรรจุภัณฑ์เครื่องสำอางแบบ OEM ครบวงจร',
};

/**
 * อัปเดต SEO metadata ของหน้าปัจจุบัน
 * @param {object} options
 * @param {string} options.title       - <title> ของหน้า
 * @param {string} options.description - meta description ของหน้า
 * @param {string} options.path        - clean path เช่น '/', '/product-catalog'
 * @param {object} [options.image]     - og:image ทางเลือก { path, width, height, alt }
 */
export function applyPageSeo({ title, description, path, image }) {
  const ogImage = image || DEFAULT_OG_IMAGE;
  const canonicalUrl = `${SITE_URL}${path}`;
  const absoluteImageUrl = `${SITE_URL}${ogImage.path}`;

  document.title = title;

  setMetaTag('name', 'description', description);
  setMetaTag('name', 'robots', 'index, follow');
  setLinkTag('canonical', canonicalUrl);

  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:site_name', SITE_NAME);
  setMetaTag('property', 'og:locale', 'th_TH');
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:image', absoluteImageUrl);
  setMetaTag('property', 'og:image:width', String(ogImage.width));
  setMetaTag('property', 'og:image:height', String(ogImage.height));
  setMetaTag('property', 'og:image:alt', ogImage.alt);

  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', absoluteImageUrl);
}

/**
 * สร้าง/อัปเดต <script type="application/ld+json"> แบบมี id กำกับ
 * (เช่น Product ItemList ของหน้า Product Catalog) — 1 id = 1 แท็กเสมอ
 */
export function setJsonLd(id, data) {
  let script = document.head.querySelector(
    `script[type="application/ld+json"][data-seo-id="${id}"]`
  );
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-id', id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/** ลบ JSON-LD ที่สร้างโดย setJsonLd (เมื่อออกจากหน้า) */
export function removeJsonLd(id) {
  const script = document.head.querySelector(
    `script[type="application/ld+json"][data-seo-id="${id}"]`
  );
  if (script) script.remove();
}
