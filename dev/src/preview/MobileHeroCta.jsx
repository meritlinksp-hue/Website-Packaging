import { useEffect, useState } from 'react';
import './mobile-hero-cta.css';

/* =============================================================
 * TEMPORARY PREMIUM MOBILE HERO CTA — "Explore our packaging"
 * =============================================================
 * ปุ่ม CTA ถูกฝังอยู่ในรูป hero (we-are-nirin-mobile.png) — คอมโพเนนต์นี้
 * วางลิงก์ hotspot โปร่งใสทับบริเวณปุ่ม (ไม่แก้รูป) แล้วนำทางไป
 * Product Catalog เดิม (#/product-catalog) ผ่าน hash router ของแอป
 *
 * • Mobile only (≤760px): desktop render null → ไม่มี DOM/ไม่โหลดอะไร
 * • One-shot interaction: กด → บีบตัว + ไฮไลต์ + shimmer 1 ครั้ง → สปริงกลับ
 *   ไม่มี loop / ไม่มี rAF / ไม่มี setInterval (CSS transitions เท่านั้น)
 * • เคารพ prefers-reduced-motion
 *
 * ROLLBACK: ลบไฟล์นี้ + mobile-hero-cta.css + บล็อกที่คอมเมนต์
 * "TEMPORARY PREMIUM MOBILE HERO CTA" ใน ShowcaseSection.jsx
 * ============================================================ */

const CATALOG_ROUTE = '#/product-catalog'; // route เดิมของเว็บ (navItems/App.jsx)

export default function MobileHeroCta() {
  // Desktop (≥761px) → null ตั้งแต่ render แรก: hero เดสก์ท็อปเหมือนเดิม 100%
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 760px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  if (!isMobile) return null;

  return (
    <a
      className="mhcta"
      href={CATALOG_ROUTE}
      aria-label="Explore our packaging"
    >
      <span className="mhcta-glow" aria-hidden="true" />
      <span className="mhcta-shimmer" aria-hidden="true" />
    </a>
  );
}