/* =====================================================================
 * หน้า Contact Us — หน้าแยกสำหรับข้อมูลการติดต่อ Nirin Packaging
 * แสดงเฉพาะภาพจาก dev/public/images/contact/ (1 ภาพ) — ไม่ใช้ภาพจากหน้า
 * Home / OEM Process / Product Catalog / About
 * ไฟล์ภาพต้นฉบับ: dev/public/images/contact/Nirin Packaging 999.png
 * ===================================================================== */

const CONTACT_IMAGE = {
  src: '/images/contact/Nirin%20Packaging%20999.png',
  alt: 'แบนเนอร์ติดต่อเรา (Contact Us) Nirin Packaging — พร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอน ให้คำปรึกษาฟรีโดยผู้เชี่ยวชาญ ตอบกลับเร็วภายใน 24 ชั่วโมง เมื่อซื้อได้บริการจริงใจ และดูแลครบตั้งแต่ต้นจนจบ พร้อมภาพบรรจุภัณฑ์ NIRIN Packaging หลากหลายรุ่น',
  width: '1980',
  height: '1293',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact">
        <header className="contact-head">
          <p className="contact-kicker">Contact</p>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-sub">
            พร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอน — ทีมงาน Nirin
            Packaging ยินดีให้คำแนะนำเกี่ยวกับบรรจุภัณฑ์และตอบทุกคำถาม
          </p>
        </header>
      </div>

      <figure className="contact-figure">
        <img
          src={CONTACT_IMAGE.src}
          alt={CONTACT_IMAGE.alt}
          width={CONTACT_IMAGE.width}
          height={CONTACT_IMAGE.height}
          loading="eager"
          decoding="async"
        />
      </figure>
    </div>
  );
}