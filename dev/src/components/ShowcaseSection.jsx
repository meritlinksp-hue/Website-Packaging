import { showcaseItems } from '../data/products';
// TEMPORARY PREMIUM MOBILE HERO CTA — "Explore our packaging" (localhost test)
// Rollback: ลบบรรทัด import นี้ + <MobileHeroCta /> ด้านล่าง
// แล้วลบไฟล์ dev/src/preview/MobileHeroCta.jsx + mobile-hero-cta.css
import MobileHeroCta from '../preview/MobileHeroCta';

export default function ShowcaseSection() {
  return (
    <div className="showcase-stack">
      {/* TEMPORARY: Mobile (≤760px) แสดงเฉพาะ Hero #1 — Hero #2/#3 ถูกซ่อนด้วย CSS
          (.showcase-section--desktop-only ใน index.css @media max-width 760px)
          Desktop (≥761px) แสดงครบทั้ง 3 hero เหมือนเดิมทุกอย่าง
          ข้อมูลใน showcaseItems (products.js) และไฟล์รูปยังอยู่ครบ ไม่ได้ลบ
          ROLLBACK: คืน className เป็น "showcase-section" + ลบบล็อก
          "TEMPORARY MOBILE-ONLY HERO STACK" ใน index.css */}
      {showcaseItems.map((item, index) => (
        <section
          key={item.id}
          className={`showcase-section${index > 0 ? ' showcase-section--desktop-only' : ''}`}
          id={item.id}
          aria-label={item.alt}
        >
          <figure
            className={
              item.mobileImage
                ? 'poster-frame poster-frame--mobile-hero'
                : 'poster-frame'
            }
          >
            {/* Desktop: ใช้ item.image ตามเดิม — Mobile (≤760px): สลับเป็น item.mobileImage
                ผ่าน <picture><source media> เบราว์เซอร์โหลดเฉพาะไฟล์ที่ตรงเงื่อนไข media query */}
            <picture>
              {item.mobileImage && (
                <source
                  media="(max-width: 760px)"
                  srcSet={item.mobileImage}
                />
              )}
              <img
                src={item.image}
                alt={item.alt}
                width="1980"
                height="1200"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>
            {/* TEMPORARY PREMIUM MOBILE HERO CTA — MOBILE ONLY (≤760px).
                Hotspot ลิงก์โปร่งใสทับปุ่ม "EXPLORE OUR PACKAGING" ในภาพ
                → นำทาง #/product-catalog (route เดิม) · Desktop: render null
                Rollback: ลบ block นี้ + import ด้านบน */}
            {index === 0 && <MobileHeroCta />}
          </figure>
        </section>
      ))}
    </div>
  );
}