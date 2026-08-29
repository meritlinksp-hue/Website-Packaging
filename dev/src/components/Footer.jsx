export default function Footer({ activePage = 'home' }) {
  const handleBackToTop = (event) => {
    // อยู่หน้า About → แค่เลื่อนขึ้นบน ไม่ต้องเปลี่ยนหน้า
    if (activePage !== 'home') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" id="contact">
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
    </footer>
  );
}