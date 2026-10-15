import { useEffect, useState } from 'react';
import { applyPageSeo } from './services/seo';
import Header from './components/Header';
import ShowcaseSection from './components/ShowcaseSection';
import AboutPage from './components/AboutPage';
import OemProcessPage from './components/OemProcessPage';
import ContactPage from './components/ContactPage';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import MobileSocialDock from './components/MobileSocialDock';
import './index.css';

const ABOUT_HASH = '#/about-us';
const CATALOG_BASE = '#/product-catalog';
const OEM_HASH = '#/oem-process';
const CONTACT_HASH = '#/contact-us';

const resolvePage = (hash) => {
  if (hash === ABOUT_HASH) return 'about';
  if (hash === OEM_HASH) return 'oem';
  if (hash === CONTACT_HASH) return 'contact';
  if (hash.startsWith(CATALOG_BASE)) return 'catalog';
  return 'home';
};

const catalogAnchorFromHash = (hash) => {
  if (!hash.startsWith(`${CATALOG_BASE}/`)) return null;
  return hash.slice(CATALOG_BASE.length + 1) || null;
};

/* =====================================================================
 * Clean URLs (SEO) — เสริมจาก hash routing เดิม ไม่แทนที่
 * - ลิงก์/bookmark เดิมทุกแบบ (#/about-us, #/product-catalog/boxes ฯลฯ)
 *   ยังทำงานได้ครบ 100% ผ่าน resolvePage ด้านบน
 * - sitemap.xml / canonical ใช้ clean URL เช่น /product-catalog
 *   → เปิดตรง ๆ ได้ด้วย rewrite ใน netlify.toml (serve index.html ไม่ redirect)
 * ===================================================================== */
const CATALOG_PATH = '/product-catalog';
const PAGE_PATHS = {
  '/about-us': 'about',
  '/oem-process': 'oem',
  '/contact-us': 'contact',
};

const normalizePathname = (pathname) => {
  // ตัด trailing slash ให้เป็นรูปแบบเดียว: /about-us/ → /about-us (คง '/' ไว้)
  const stripped = pathname.replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
};

const resolveFromPathname = (pathname) => {
  const path = normalizePathname(pathname);
  if (PAGE_PATHS[path]) return { page: PAGE_PATHS[path], anchor: null };
  if (path === CATALOG_PATH) return { page: 'catalog', anchor: null };
  if (path.startsWith(`${CATALOG_PATH}/`)) {
    const anchor = path.slice(CATALOG_PATH.length + 1).replace(/\/+$/, '');
    return { page: 'catalog', anchor: anchor || null };
  }
  return null;
};

/* resolve ทั้ง clean URL (pathname) และ hash route เดิม ในที่เดียว */
const resolveLocation = (location) => {
  const fromPath = resolveFromPathname(location.pathname);
  if (fromPath) return fromPath;
  const anchor = catalogAnchorFromHash(location.hash);
  return { page: resolvePage(location.hash), anchor };
};

/* =====================================================================
 * Per-page SEO — title / description / canonical ไม่ซ้ำกันทุกหน้า
 * (อัปเดตแท็กที่กำหนดไว้ใน dev/index.html ผ่าน services/seo.js
 *  ค่าต้องตรงกับแท็กค่าเริ่มต้นของหน้าแรกใน index.html พอดี)
 * ===================================================================== */
const PAGE_SEO = {
  home: {
    title: 'Nirin Packaging | โรงงานผลิตบรรจุภัณฑ์เครื่องสำอางและแพ็กเกจจิ้ง',
    description:
      'Nirin Packaging ผู้เชี่ยวชาญด้านบรรจุภัณฑ์เครื่องสำอางและแพ็กเกจจิ้ง รับผลิตและจัดหาบรรจุภัณฑ์คุณภาพสำหรับแบรนด์ พร้อมบริการให้คำปรึกษาและพัฒนาบรรจุภัณฑ์',
    path: '/',
  },
  about: {
    title: 'เกี่ยวกับเรา | Nirin Packaging',
    description:
      'ทำความรู้จัก Nirin Packaging พาร์ทเนอร์ที่เติบโตไปกับแบรนด์ของคุณ พร้อมวิสัยทัศน์ พันธกิจ และค่านิยมองค์กรด้านการผลิตบรรจุภัณฑ์เครื่องสำอางครบวงจร',
    path: '/about-us',
  },
  catalog: {
    title: 'รวมบรรจุภัณฑ์เครื่องสำอาง | Nirin Packaging',
    description:
      'รวมบรรจุภัณฑ์เครื่องสำอางหลากหลายรูปแบบ กล่อง ซอง เซรั่ม กระปุกครีม และขวดปั๊ม พร้อมบริการออกแบบและผลิตแบบ OEM / ODM ครบวงจร โดยทีมงาน Nirin Packaging',
    path: '/product-catalog',
  },
  oem: {
    title: 'ขั้นตอนการรับผลิต OEM / ODM | Nirin Packaging',
    description:
      'ขั้นตอนการสั่งผลิต OEM / ODM กับ Nirin Packaging ตั้งแต่รับบรีฟ คัดสินค้าและสูตร ออกแบบและเสนอราคา ตัวอย่างและอนุมัติแบบ ผลิตพร้อมตรวจคุณภาพ จนถึงบรรจุและจัดส่ง',
    path: '/oem-process',
  },
  contact: {
    title: 'ติดต่อเรา | Nirin Packaging',
    description:
      'ติดต่อทีมงาน Nirin Packaging พร้อมให้คำปรึกษาและดูแลทุกขั้นตอน ตอบกลับเร็วภายใน 24 ชั่วโมง หรือปรึกษาผ่าน LINE Facebook และ TikTok ได้ทันที',
    path: '/contact-us',
  },
};

/* ตั้ง URL ให้ตรงกับหน้าโดยไม่รีโหลด (pushState — clean URL)
 * URL เดิมแบบ hash ยัง resolve ได้ครบผ่าน resolveLocation ด้านบน */
const setPageUrl = (url) => {
  if (window.location.pathname + window.location.hash !== url) {
    window.history.pushState(null, '', url);
  }
};

function App() {
  // Resolve จาก clean URL (pathname) ก่อน แล้ว fallback เป็น hash route เดิม
  const [page, setPage] = useState(() => resolveLocation(window.location).page);
  const [pendingAnchor, setPendingAnchor] = useState(() =>
    resolveLocation(window.location).anchor
  );

  useEffect(() => {
    const syncFromLocation = () => {
      const { page: nextPage, anchor } = resolveLocation(window.location);
      setPage(nextPage);
      if (anchor) {
        setPendingAnchor(anchor);
      }
    };
    // popstate: ปุ่ม back/forward ของ clean URLs (pushState)
    // hashchange: route เดิมแบบ hash (bookmark/ลิงก์เก่า) — ยังทำงานเหมือนเดิม
    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  useEffect(() => {
    if ((page === 'home' || page === 'catalog') && pendingAnchor) {
      const target = document.getElementById(pendingAnchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setPendingAnchor(null);
    }
  }, [page, pendingAnchor]);

  // Per-page SEO — title / meta description / canonical / OG / Twitter Card
  // อัปเดตในตำแหน่งเดิมของแท็กใน index.html (ไม่สร้างแท็กซ้ำ)
  useEffect(() => {
    const seo = PAGE_SEO[page];
    if (seo) {
      applyPageSeo(seo);
    }
  }, [page]);

  const navigate = (nextPage, anchor = null) => {
    if (nextPage === 'about') {
      setPageUrl('/about-us');
      setPage('about');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (nextPage === 'oem') {
      setPageUrl('/oem-process');
      setPage('oem');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (nextPage === 'contact') {
      setPageUrl('/contact-us');
      setPage('contact');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (nextPage === 'catalog') {
      setPageUrl(anchor ? `${CATALOG_PATH}/${anchor}` : CATALOG_PATH);
      setPage('catalog');
      if (anchor) {
        setPendingAnchor(anchor);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    // หน้าแรก — คืน URL เป็น '/' (หรือ '/#anchor' สำหรับ section ของหน้าแรก)
    setPageUrl(anchor ? `/#${anchor}` : '/');
    if (anchor) {
      setPendingAnchor(anchor);
    }
    setPage('home');
    if (!anchor) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <>
      <a className="skip-link" href="#about-us">
        ข้ามไปยังเนื้อหา
      </a>
      {/* TEMPORARY MOBILE FLOATING SOCIAL DOCK (localhost only) — ROLLBACK: ลบบรรทัดนี้ */}
      <MobileSocialDock />
      <h1 className="visually-hidden">Nirin Packaging</h1>

      <main className="showcase-page" id="home">
        <Header activePage={page} onNavigate={navigate} />
        {page === 'about' ? (
          <AboutPage />
        ) : page === 'catalog' ? (
          <ProductCatalog />
        ) : page === 'oem' ? (
          <OemProcessPage />
        ) : page === 'contact' ? (
          <ContactPage />
        ) : (
        <ShowcaseSection onNavigate={navigate} />
        )}
        <Footer activePage={page} />
      </main>
    </>
  );
}

export default App;
