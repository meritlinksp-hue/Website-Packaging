/* =====================================================================
 * หน้า OEM Process — หน้าแยกสำหรับภาพขั้นตอนการสั่งพลิต OEM / ODM
 * แสดงเฉพาะภาพจาก dev/public/images/oem/ (1 ภาพ) — ไม่ใช้ภาพจากหน้า Home
 * ไฟล์ภาพต้นฉบับ: dev/public/images/oem/86b1cf77-d5fe-47fe-b2ff-c3b8082bca84.png
 * ===================================================================== */

const OEM_IMAGE = {
  src: '/images/oem/86b1cf77-d5fe-47fe-b2ff-c3b8082bca84.png',
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
        <img
          src={OEM_IMAGE.src}
          alt={OEM_IMAGE.alt}
          width={OEM_IMAGE.width}
          height={OEM_IMAGE.height}
          loading="eager"
          decoding="async"
        />
      </figure>
    </div>
  );
}