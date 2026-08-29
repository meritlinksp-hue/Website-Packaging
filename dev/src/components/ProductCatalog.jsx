/* =====================================================================
 * หน้า Product Catalog
 * - Hero: ภาพ "หมวดหมู่สินค้า" ที่แนบมาใน Task (asset จริง)
 * - Category Navigation: แถบ chip แบบ sticky เลื่อนตาม + scroll-spy
 * - Product Grid: การ์ดสินค้าเรียงตามหมวด หมวดไหนไม่มีสินค้าแสดง empty state
 * - ทุกหมวดมี id สำหรับ smooth scroll จาก dropdown ใน Header
 * ===================================================================== */

import { useEffect, useRef, useState } from 'react';
import { catalogHero, catalogCategories } from '../data/products';

/* =====================================================================
 * ลำดับหมวดหมู่ที่ใช้แสดงผลในหน้า Product Catalog
 * - จัดลำดับตอน render เท่านั้น (ไม่แก้ข้อมูลต้นฉบับใน products.js)
 * - cream-balm-tubes (หลอดครีม / Balm) → แสดงเป็นหมวดแรกสุดเสมอ
 * - หมวดอื่น ๆ → คงลำดับเดิมตาม catalogCategories ต่อจากหมวดแรก
 * หมายเหตุ: เป็นการจัดเรียง reference ของ object เดิม (ไม่ clone ข้อมูล)
 *   จึงไม่กระทบการค้นหาหมวดด้วย identity ของ product ใน lightbox
 * ===================================================================== */
const orderedCatalogCategories = [
  ...catalogCategories.filter((category) => category.id === 'cream-balm-tubes'),
  ...catalogCategories.filter((category) => category.id !== 'cream-balm-tubes'),
];

/* =====================================================================
 * การจัดเรียงสินค้าใน Product Catalog
 * - กลุ่ม A (มีภาพจริง): สินค้าที่มี path เป็นไฟล์ภาพจริง (jpg/png/webp/avif)
 *   → แสดงก่อนทั้งหมด
 * - กลุ่ม B (ไม่มีภาพจริง): ไม่มี path / path เป็น .svg (vector/line art ที่ระบบ
 *   สร้างแทน) หรือ placeholder → รวมไว้ในส่วนด้านล่างสุด
 * หมายเหตุ: ตรวจสอบข้อมูลจริง (products.js + ไฟล์ภาพใน /images/products/)
 *   แล้ว สินค้าทั้ง 13 รายการมีภาพจริงทั้งหมด → จึงเป็นกลุ่ม A ทั้งหมด
 * ===================================================================== */
const hasRealImage = (product) => {
  if (!product?.image) return false; // ไม่มี path → ไม่มีภาพจริง
  const src = product.image.toLowerCase();
  if (src.endsWith('.svg')) return false; // vector/line art ที่สร้างแทนภาพ → ไม่ใช่ภาพจริง
  return true; // ไฟล์ภาพ raster จริง
};

const realImageCategories = orderedCatalogCategories.map((category) => ({
  ...category,
  products: category.products.filter(hasRealImage),
}));

const noImageCategories = orderedCatalogCategories
  .map((category) => ({
    ...category,
    products: category.products.filter((product) => !hasRealImage(product)),
  }))
  .filter((category) => category.products.length > 0);

function ProductCard({ product, onPreview }) {
  return (
    <figure className="catalog-card">
      <div className="catalog-card-frame">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
        />
        <button
          type="button"
          className="catalog-card-zoom"
          aria-label={`ขยายภาพ ${product.name}`}
          onClick={() => onPreview(product)}
        >
          <span className="catalog-zoom-hint" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
              <line x1="11" y1="8" x2="11" y2="14" />
            </svg>
            <span>View</span>
          </span>
        </button>
      </div>
      <figcaption className="catalog-card-label">
        <span className="catalog-card-th">{product.nameTh}</span>
        <span className="catalog-card-en">{product.name}</span>
      </figcaption>
    </figure>
  );
}

function ProductLightbox({ preview, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const closeButtonRef = useRef(null);

  // รีเซ็ตสถานะ animation ทุกครั้งที่เปิดภาพใหม่
  useEffect(() => {
    if (preview) setIsClosing(false);
  }, [preview]);

  // ล็อกการเลื่อนพื้นหลัง + ปิดด้วยปุ่ม ESC
  useEffect(() => {
    if (!preview) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [preview]);

  // โฟกัสปุ่มปิดเพื่อให้คีย์บอร์ดใช้งานได้ทันที
  useEffect(() => {
    if (preview && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [preview]);

  if (!preview) return null;

  const { product, category } = preview;

  function handleClose() {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  }

  return (
    <div
      className={isClosing ? 'catalog-lightbox is-closing' : 'catalog-lightbox'}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} — ภาพขยายสินค้า`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="catalog-lightbox-backdrop" aria-hidden="true" />
      <figure className="catalog-lightbox-dialog">
        <div className="catalog-lightbox-media">
          <button
            ref={closeButtonRef}
            type="button"
            className="catalog-lightbox-close"
            aria-label="ปิดหน้าต่างแสดงภาพ"
            onClick={handleClose}
          >
            <span className="catalog-lightbox-close-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </span>
          </button>
          <img src={product.image} alt={product.alt} />
        </div>
        <figcaption className="catalog-lightbox-caption">
          <span className="catalog-lightbox-name">{product.name}</span>
          <span className="catalog-lightbox-category">{category.en}</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function ProductCatalog() {
  const [activeId, setActiveId] = useState(orderedCatalogCategories[0]?.id ?? null);
  const [preview, setPreview] = useState(null);

  // Scroll-spy: ไฮไลต์ chip ของหมวดที่กำลังอยู่ใน viewport
  useEffect(() => {
    const sections = orderedCatalogCategories
      .map((category) => document.getElementById(category.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleChipClick = (event, categoryId) => {
    event.preventDefault();
    const target = document.getElementById(categoryId);
    if (target) {
      // scroll-margin-top ของ section จะเว้นระยะให้ Header + chip bar ไม่บังหัวข้อ
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(categoryId);
    }
  };

  const handlePreview = (product) => {
    const category = orderedCatalogCategories.find((item) =>
      item.products.includes(product)
    );
    setPreview({ product, category });
  };

  const closePreview = () => setPreview(null);

  return (
    <div className="catalog-page">
      {/* Hero — ภาพหมวดหมู่สินค้าที่แนบมาสำหรับด้านบนสุดของหน้า */}
      <section className="catalog-hero" aria-label="หมวดหมู่สินค้า">
        <figure className="catalog-hero-frame">
          <img
            src={catalogHero.image}
            alt={catalogHero.alt}
            width={catalogHero.width}
            height={catalogHero.height}
            fetchpriority="high"
            decoding="async"
          />
        </figure>
      </section>

      <div className="catalog">
        <section className="catalog-head">
          <p className="catalog-kicker">Product Catalog</p>
          <h2 className="catalog-title">รวมบรรจุภัณฑ์ครบทุกประเภท</h2>
          <p className="catalog-sub">
            คัดสรรบรรจุภัณฑ์เครื่องสำอางแบบ OEM หลากหลายรูปแบบ เรียงตามหมวดหมู่สินค้า{' '}
            ตอบโจทย์ทุกการใช้งาน
          </p>
        </section>

        {/* Category Navigation — sticky ใต้ header เลื่อนไปแต่ละหมวดได้ */}
        <nav className="catalog-chips" aria-label="ไปยังหมวดหมู่สินค้า">
          {orderedCatalogCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={
                activeId === category.id ? 'catalog-chip active' : 'catalog-chip'
              }
              aria-current={activeId === category.id ? 'true' : undefined}
              onClick={(event) => handleChipClick(event, category.id)}
            >
              {category.th}
            </a>
          ))}
        </nav>

        <div className="catalog-groups">
          {/* กลุ่ม A — สินค้าที่มีภาพจริง (แสดงก่อนทั้งหมด ตามลำดับหมวดที่กำหนด: cream-balm-tubes แรกสุด) */}
          {realImageCategories.map((category) => (
            <section
              key={category.id}
              className="catalog-group"
              id={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              <h2
                className="catalog-group-title"
                id={`${category.id}-title`}
              >
                <span className="en">{category.en}</span>
                <span className="th">{category.th}</span>
              </h2>
              <p className="catalog-group-desc">{category.description}</p>

              {category.products.length > 0 ? (
                <div className="catalog-grid">
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.image}
                      product={product}
                      onPreview={handlePreview}
                    />
                  ))}
                </div>
              ) : (
                <div className="catalog-empty">
                  <span className="catalog-empty-badge">Coming Soon</span>
                  <p className="catalog-empty-title">
                    หมวดหมู่นี้กำลังจะมาเร็ว ๆ นี้
                  </p>
                  <p className="catalog-empty-text">
                    สนใจบรรจุภัณฑ์รูปแบบนี้? ติดต่อทีมงาน Nirin Packaging
                    เพื่อสอบถามรายละเอียดและรับคำแนะนำได้เลย
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* กลุ่ม B — สินค้าที่ไม่มีภาพจริง (รวมไว้ด้านล่างสุดของหน้า) */}
          {noImageCategories.length > 0 ? (
            <section
              className="catalog-group catalog-group--more"
              id="more-packaging"
              aria-labelledby="more-packaging-title"
            >
              <h2
                className="catalog-group-title"
                id="more-packaging-title"
              >
                <span className="en">More Packaging Solutions</span>
                <span className="th">แพ็กเกจจิ้งรูปแบบอื่นที่กำลังเตรียมให้บริการ</span>
              </h2>
              <p className="catalog-group-desc">
                สินค้าในหมวดนี้นี้กำลังอยู่ในระหว่างการเก็บข้อมูลและจัดทำตัวอย่างสินค้า
                สนใจบรรจุภัณฑ์รูปแบบนี้? ติดต่อทีมงาน Nirin Packaging เพื่อสอบถามได้เลย
              </p>
              <div className="catalog-more-blocks">
                {noImageCategories.map((category) => (
                  <div key={category.id} className="catalog-more-block">
                    <div className="catalog-more-meta">
                      <span className="catalog-card-en">{category.en}</span>
                      <span className="catalog-more-th">{category.th}</span>
                    </div>
                    <div className="catalog-grid">
                      {category.products.map((product) => (
                        <ProductCard
                          key={product.image || product.name}
                          product={product}
                          onPreview={handlePreview}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>

      <ProductLightbox preview={preview} onClose={closePreview} />
    </div>
  );
}
