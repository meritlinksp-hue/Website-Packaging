/* =====================================================================
 * หน้า OEM Process — หน้าแยกสำหรับภาพขั้นตอนการสั่งพลิต OEM / ODM
 * แสดงเฉพาะภาพจาก dev/public/images/oem/ (1 ภาพ) — ไม่ใช้ภาพจากหน้า Home
 * ไฟล์ภาพต้นฉบับ: dev/public/images/oem/86b1cf77-d5fe-47fe-b2ff-c3b8082bca84.png
 * ===================================================================== */

const OEM_IMAGE = {
  src: '/images/oem/86b1cf77-d5fe-47fe-b2ff-c3b8082bca84.png',
  // MOBILE-ONLY (≤760px): ใช้ภาพใหม่ /images/oem-mobile/ขั้นตอน.png ผ่าน <picture><source media>
  // Desktop (≥761px): ยังใช้ภาพเดิมด้านบนตามเดิม · ภาพเดิมถูกเก็บไว้ครบเพื่อ rollback
  mobileImage: '/images/oem-mobile/ขั้นตอน.png',
  alt: 'ขั้นตอนการสั่งพลิต OEM / ODM กับ Nirin Packaging ตั้งแต่รับบรีฟ คัดสินค้าและสูตร ออกแบบและเสนอราคา ตัวอย่างและอนุมัติแบบ ผลิตพร้อมตรวจคุณภาพ จนถึงบรรจุและจัดส่ง',
  width: '1536',
  height: '1024',
};

export default function OemProcessPage() {
  return (
    <div className="oem-page">
      <div className="oem">
        <header className="oem-head">
          <p className="oem-kicker">OEM / ODM</p>
          <h2 className="oem-title">OEM Process</h2>
          <p className="oem-sub">
            ขั้นตอนการสั่งพลิต OEM / ODM กับ Nirin Packaging ตั้งแต่รับบรีฟ
            คัดสินค้าและสูตร ออกแบบและเสนอราคา ตัวอย่างและอนุมัติแบบ
            ผลิตพร้อมตรวจคุณภาพ จนถึงบรรจุและจัดส่ง
          </p>
        </header>
      </div>

      <figure className="oem-figure">
        {/* Desktop: ใช้ภาพเดิมตามเดิม · Mobile (≤760px): สลับเป็นภาพใหม่
            (รูปแบบเดียวกับ ShowcaseSection hero — เบราว์เซอร์โหลดเฉพาะไฟล์ที่ตรงเงื่อนไข) */}
        <picture>
          {OEM_IMAGE.mobileImage && (
            <source media="(max-width: 760px)" srcSet={OEM_IMAGE.mobileImage} />
          )}
          <img
            src={OEM_IMAGE.src}
            alt={OEM_IMAGE.alt}
            width={OEM_IMAGE.width}
            height={OEM_IMAGE.height}
            loading="eager"
            decoding="async"
          />
        </picture>
      </figure>
    </div>
  );
}