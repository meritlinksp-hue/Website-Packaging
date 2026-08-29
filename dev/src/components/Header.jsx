import { useState } from 'react';
import { navItems } from '../data/products';

function ChevronIcon() {
  return (
    <svg
      className="nav-chevron"
      width="11"
      height="11"
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({ activePage = 'home', onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, item) => {
    closeMenu();

    if (item.page === 'about') {
      event.preventDefault();
      onNavigate('about');
      return;
    }

    if (item.page === 'catalog') {
      event.preventDefault();
      onNavigate('catalog', null);
      return;
    }

    if (item.page === 'oem') {
      event.preventDefault();
      onNavigate('oem');
      return;
    }

    if (item.page === 'contact') {
      event.preventDefault();
      onNavigate('contact');
      return;
    }

    // อยู่หน้า About / Catalog → กลับหน้าแรกก่อนแล้วเลื่อนไป section ที่เลือก
    if (activePage !== 'home') {
      event.preventDefault();
      const anchor = item.href.replace('#', '');
      onNavigate('home', anchor === 'home' ? null : anchor);
      return;
    }

    // อยู่หน้าแรกแล้ว — ให้เบราว์เซอร์เลื่อนไป anchor เอง ยกเว้น Home ให้เลื่อนขึ้นบนสุด
    if (item.href === '#home') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // คลิกหมวดสินค้าใน dropdown → เปิดหน้า Product Catalog แล้วเลื่อนไปหมวดนั้น
  const handleCategoryClick = (event, categoryId) => {
    event.preventDefault();
    closeMenu();
    onNavigate('catalog', categoryId);
  };

  return (
    <>
      {menuOpen ? (
        <div className="nav-overlay" aria-hidden="true" onClick={closeMenu} />
      ) : null}
      <header className="floating-header" aria-label="เมนูหลัก">
        <a
          className="brand"
          href="#home"
          aria-label="Nirin Packaging หน้าแรก"
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
            onNavigate('home');
          }}
        >
          <img
            src="/images/nirin-logo.avif"
            alt="Nirin Packaging"
            width="465"
            height="384"
          />
        </a>
        <nav
          id="site-nav"
          className={menuOpen ? 'section-nav open' : 'section-nav'}
          aria-label="เมนูเว็บไซต์"
        >
          {navItems.map((item) =>
            item.children ? (
              <div className="nav-item-catalog" key={item.label}>
                <a
                  href={item.href}
                  aria-current={
                    activePage === 'catalog' ? 'page' : undefined
                  }
                  aria-haspopup="true"
                  onClick={(event) => handleNavClick(event, item)}
                >
                  {item.label}
                  <ChevronIcon />
                </a>
                <div className="nav-dropdown" aria-label="หมวดหมู่สินค้า">
                  {item.children.map((category) => (
                    <a
                      key={category.id}
                      href={`#/product-catalog/${category.id}`}
                      onClick={(event) =>
                        handleCategoryClick(event, category.id)
                      }
                    >
                      <span className="nav-dropdown-th">{category.th}</span>
                      <span className="nav-dropdown-en">{category.en}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                aria-current={
                  activePage === item.page &&
                  (item.page === 'about' || item.page === 'contact')
                    ? 'page'
                    : undefined
                }
                onClick={(event) => handleNavClick(event, item)}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
        <button
          type="button"
          className={menuOpen ? 'nav-toggle open' : 'nav-toggle'}
          aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </header>
    </>
  );
}
