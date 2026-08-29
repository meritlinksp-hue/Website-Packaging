/* =====================================================================
 * หน้า About Us — แสดงภาพ Design Reference ทั้ง 3 ภาพที่แนบมา
 * ลำดับการแสดงผลจากบนลงล่าง: ABOUT US → VISION/MISSION → WHO WE ARE
 * (ไฟล์ about-reference-2.png แสดงก่อน ตามด้วย -1 และ -3 ตามลำดับ)
 * แต่ละภาพกว้างเต็มพื้นที่เว็บไซต์ และคงอัตราส่วนเดิม (1980×1200)
 * ไฟล์ภาพต้นฉบับ: dev/public/images/about/about-reference-{1,2,3}.png
 * ===================================================================== */

const REFERENCES = [
  {
    src: '/images/about/about-reference-2.png',
    alt: 'ภาพที่ 1 — About Us: เราคือพาร์ทเนอร์ที่เติบโตไปกับแบรนด์ของคุณ และพันธกิจของเรา',
  },
  {
    src: '/images/about/about-reference-1.png',
    alt: 'ภาพที่ 2 — วิสัยทัศน์ (VISION) พันธกิจ (MISSION) และค่านิยมองค์กร (CORE VALUES) ของ Nirin Packaging',
  },
  {
    src: '/images/about/about-reference-3.png',
    alt: 'ภาพที่ 3 — Who We Are: NIRIN PACKAGING — Packaging That Builds Stronger Brands',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {REFERENCES.map((image) => (
        <img
          key={image.src}
          className="about-reference"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}