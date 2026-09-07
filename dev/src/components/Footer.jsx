import { useEffect, useState } from 'react';

/* =============================================================
 * TEMPORARY MOBILE-ONLY IMAGE FOOTER (localhost test)
 * =============================================================
 * ≤760px  → แทน footer เดิมด้วยภาพ 2 แถบ (top → bottom) เต็มความกว้าง:
 *           /images/footer-mobile/1.png (1079×278) → /images/footer-mobile/2.jpg (1078×281)
 * ≥761px  → footer เดสก์ท็อปเดิมทุกอย่าง (isMobile = false ตั้งแต่ render แรก
 *           → ไม่มี DOM ภาพ / ไม่โหลดรูปบนเดสก์ท็อป — pattern เดียวกับ MobileHeroCta.jsx)
 *
 * ROLLBACK: คืน Footer.jsx เดิม + ลบบล็อก "TEMPORARY MOBILE-ONLY IMAGE FOOTER"
 * ใน dev/src/index.css (2 จุด: @media ≤760px และ @media ≥761px)
 * ============================================================ */

export default function Footer({ activePage = 'home' }) {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 760px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const handleBackToTop = (event) => {
    // อยู่หน้า About → แค่เลื่อนขึ้นบน ไม่ต้องเปลี่ยนหน้า
    if (activePage !== 'home') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" id="contact">
      {isMobile ? (
        <div className="footer-mobile-images">
          <img
            src="/images/footer-mobile/1.png"
            alt="Low MOQ for every brand, OEM/Custom your own design, premium quality details matter, one-stop service from idea to shelf"
            width="1079"
            height="278"
            loading="lazy"
            decoding="async"
          />
          <div className="footer-mobile-bottom">
            <img
              src="/images/footer-mobile/2.jpg"
              alt="Let's create your packaging with Nirin Packaging — ขอใบเสนอราคา หรือปรึกษาผ่าน LINE"
              width="1078"
              height="281"
              loading="lazy"
              decoding="async"
            />
            {/* TEMPORARY MOBILE FOOTER LINE CTA HOTSPOT (localhost test)
                ปุ่ม "ปรึกษาผ่าน LINE" ฝังอยู่ในภาพ (2.jpg: ปุ่ม x[734-1037] y[158-222]
                จาก 1078×281) — hotspot ลิงก์โปร่งใสทับเฉพาะปุ่ม (ขยาย touch target
                ≥44px จากพื้นที่ว่างรอบปุ่ม ไม่ทับปุ่มชมพู/ข้อความอื่น)
                ROLLBACK: ลบ block นี้ + บล็อก "TEMPORARY MOBILE FOOTER LINE CTA
                HOTSPOT" ใน index.css (2 จุด: @media ≤760px และ @media ≥761px) */}
            <a
              className="fmcta"
              href="https://lin.ee/TiPFhI6"
              aria-label="ปรึกษาผ่านไลน์"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true" className="fmcta-glow" />
              <span aria-hidden="true" className="fmcta-shimmer" />
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="footer-inner">
            <div className="footer-brand">
              <img
                src="/images/nirin-logo.avif"
                alt="Nirin Packaging"
                width="465"
                height="384"
                loading="lazy"
              />
              <div>
                <p className="footer-kicker">Packaging made with care</p>
                <h2>Nirin Packaging</h2>
                <p className="footer-thanks">ขอบคุณที่ไว้วางใจใช้บริการกับเรา</p>
              </div>
            </div>

            <address className="footer-contact">
              <span>ติดต่อเรา</span>
              <p>88/281 โครงการสำเพ็ง 2 แขวงบางแค เขตบางแค กรุงเทพมหานคร 10160</p>
              <a href="tel:0805655335">โทร. 080-565-5335</a>
            </address>
          </div>

          <a
            className="back-to-top"
            href="#home"
            aria-label="กลับขึ้นด้านบน"
            onClick={handleBackToTop}
          >
            <span aria-hidden="true" className="top-arrow">↑</span>
            <span>Back to top</span>
          </a>
        </>
      )}
    </footer>
  );
}