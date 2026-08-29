import { useEffect, useState } from 'react';
import Header from './components/Header';
import ShowcaseSection from './components/ShowcaseSection';
import AboutPage from './components/AboutPage';
import OemProcessPage from './components/OemProcessPage';
import ContactPage from './components/ContactPage';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
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

function App() {
  const [page, setPage] = useState(() => resolvePage(window.location.hash));
  const [pendingAnchor, setPendingAnchor] = useState(() =>
    catalogAnchorFromHash(window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      setPage(resolvePage(hash));
      const anchor = catalogAnchorFromHash(hash);
      if (anchor) {
        setPendingAnchor(anchor);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
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

  useEffect(() => {
    document.title =
      page === 'about'
        ? 'About Us — Nirin Packaging'
        : page === 'catalog'
          ? 'Product Catalog — Nirin Packaging'
          : page === 'oem'
            ? 'OEM Process — Nirin Packaging'
            : page === 'contact'
              ? 'Contact Us — Nirin Packaging'
              : 'Nirin Packaging';
  }, [page]);

  const navigate = (nextPage, anchor = null) => {
    if (nextPage === 'about') {
      if (window.location.hash !== ABOUT_HASH) {
        window.location.hash = ABOUT_HASH;
      }
      setPage('about');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (nextPage === 'oem') {
      if (window.location.hash !== OEM_HASH) {
        window.location.hash = OEM_HASH;
      }
      setPage('oem');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (nextPage === 'contact') {
      if (window.location.hash !== CONTACT_HASH) {
        window.location.hash = CONTACT_HASH;
      }
      setPage('contact');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (nextPage === 'catalog') {
      const targetHash = anchor ? `${CATALOG_BASE}/${anchor}` : CATALOG_BASE;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
      setPage('catalog');
      if (anchor) {
        setPendingAnchor(anchor);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    if (
      window.location.hash === ABOUT_HASH ||
      window.location.hash === CONTACT_HASH ||
      window.location.hash === OEM_HASH ||
      window.location.hash.startsWith(CATALOG_BASE)
    ) {
      window.location.hash = anchor ? `#${anchor}` : '#home';
    }
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
          <ShowcaseSection />
        )}
        <Footer activePage={page} />
      </main>
    </>
  );
}

export default App;
