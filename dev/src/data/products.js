export const showcaseItems = [
  {
    id: 'about-us',
    image: '/images/we-are-nirin.png',
    // Mobile-only hero variant (แสดงเฉพาะจอ ≤760px ผ่าน <picture><source>)
    mobileImage: '/images/we-are-nirin-mobile.png',
    alt: 'We are Nirin Packaging ผู้ผลิตบรรจุภัณฑ์เครื่องสำอางแบบ OEM ครบวงจร',
  },
  {
    id: 'oem-process',
    image: '/images/why-choose-nirin.png',
    alt: 'เหตุผลที่ควรเลือก Nirin Packaging พร้อมบริการออกแบบ คัดสรรคุณภาพ และดูแลทุกขั้นตอน',
  },
  {
    id: 'product-catalog',
        image: '/images/packaging-solutions.png',
    alt: 'Packaging Solutions รวมบรรจุภัณฑ์และบริการออกแบบแพ็กเกจแบบครบวงจร',
  },
];

export const navItems = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'About Us', href: '#/about-us', page: 'about' },
  {
    label: 'Product Catalog',
    href: '#/product-catalog',
    page: 'catalog',
    children: [
      { id: 'pump-bottles', th: 'ขวดปั๊ม', en: 'Pump Bottles' },
      { id: 'serum-bottles', th: 'ขวดเซรั่ม', en: 'Serum Bottles' },
      { id: 'cream-jars', th: 'กระปุกครีม', en: 'Cream Jars' },
      { id: 'cream-balm-tubes', th: 'หลอดครีม / Balm', en: 'Cream & Balm Tubes' },
      { id: 'boxes', th: 'กล่อง', en: 'Boxes' },
      { id: 'pouches', th: 'ซอง', en: 'Pouches' },
    ],
  },
  { label: 'OEM Process', href: '#/oem-process', page: 'oem' },
  { label: 'Contact Us', href: '#/contact-us', page: 'contact' },
];

/* =====================================================================
 * หน้า Product Catalog
 * ภาพ Hero ด้านบนสุด และภาพสินค้าทุกภาพเป็น Asset จริงที่แนบมาจาก Task
 * (dev/public/images/products/*)
 * ===================================================================== */

export const catalogHero = {
  image: '/images/products/catalog-hero-categories.png',
  alt: 'หมวดหมู่สินค้า Nirin Packaging — บรรจุภัณฑ์ครบวงจรหลากหลายรูปแบบ รองรับทุกไอเดียของแบรนด์คุณ',
  width: 1920,
  height: 1167,
};

export const catalogCategories = [
  {
    id: 'pump-bottles',
    en: 'Pump Bottles',
    th: 'ขวดปั๊ม',
    description:
      'ขวดปั๊มสำหรับโลชั่นและผลิตภัณฑ์ดูแลผิวกาย ให้การใช้งานสะดวก ถูกสุขลักษณะ และดูสมาร์ททุกการใช้งาน',
    products: [
      {
        name: 'Sunscreen Pump Bottle',
        nameTh: 'ขวดปั๊มซันสกรีน',
        image: '/images/products/bottle-sunscreen-pump.png',
        alt: 'ขวดปั๊มซันสกรีน NIRIN 50+ ทรงหัวกลมแบน สีเขียว ชมพู และฟ้าพาสเทล วางบนแท่นโทนเบจ',
      },
    ],
  },
  {
    id: 'serum-bottles',
    en: 'Serum Bottles',
    th: 'ขวดเซรั่ม',
    description:
      'ขวดเซรั่มสำหรับผลิตภัณฑ์บำรุงผิวหน้า ช่วยให้การปิด-เปิดใช้งานง่าย ควบคุมปริมาณได้อย่างแม่นยำ',
    products: [
      {
        name: 'Serum Applicator Bottle',
        nameTh: 'ขวดเซรั่มแอปพลิเคเตอร์',
        image: '/images/products/serum-applicator-bottle.jpg',
        alt: 'ขวดเซรั่มแอปพลิเคเตอร์รูปทรงแท่ง เลือกหัวใช้งานได้หลากหลาย เช่น หัวม้วน หัวแปรง และหัวหยด',
      },
    ],
  },
  {
    id: 'cream-jars',
    en: 'Cream Jars',
    th: 'กระปุกครีม',
    description:
      'กระปุกครีมสำหรับครีมบำรุงผิวหน้าและผิวกาย เพิ่มมิติความพรีเมียมให้แบรนด์ของคุณตั้งแต่แรกเห็น',
    products: [
      {
        name: 'Airless Pump Jar',
        nameTh: 'กระปุกแอร์เลสพร้อมปั๊ม',
        image: '/images/products/กระปุก 1.png',
        alt: 'กระปุกแอร์เลสสีขาวพร้อมหัวปั๊มและฝาพลาสติกใส BSA 50 และ BSA 30 วางบนฉากโทนพาสเทลเขียวมินต์',
      },
    ],
  },
  {
    id: 'cream-balm-tubes',
    en: 'Cream & Balm Tubes',
    th: 'หลอดครีม / Balm',
    description:
      'หลอดบีบและหลอดแอร์เลสสำหรับครีม บาล์ม และผลิตภัณฑ์ดูแลผิว รองรับการใช้งานได้หลากหลายประเภท',
    products: [
      {
        name: 'Dual Chamber Tube',
        nameTh: 'หลอดสองช่อง',
        image: '/images/products/tube-dual-chamber.png',
        alt: 'หลอดสองช่อง Dual Chamber Tube สีพาสเทล พร้อมหัวปิดแบบหมุน',
      },
      {
        name: 'Skincare Soft Tube',
        nameTh: 'หลอดสกินแคร์',
        image: '/images/products/tube-skincare.png',
        alt: 'หลอดสกินแคร์ผิวสัมผัสด้าน โทนชมพู ม่วง และฟ้า พร้อมฝาทรงกลม',
      },
      {
        name: 'Body Scrub Tube',
        nameTh: 'หลอดบอดี้สครับ',
        image: '/images/products/tube-body-scrub.jpg',
        alt: 'หลอดบอดี้สครับแบบบีบทั้งสองด้าน โทนเหลือง ชมพู และเขียวพาสเทล',
      },
      {
        name: 'Lip Balm Tube',
        nameTh: 'หลอดลิปบาล์ม',
        image: '/images/products/tube-lip-balm.jpg',
        alt: 'หลอดลิปบาล์มขนาดเล็ก พร้อมหัวปิดเกลียวและหัวช่วยเกลี่ยบนบาล์ม',
      },
      {
        name: 'Soft Touch Tube',
        nameTh: 'หลอดซอฟต์ทัช',
        image: '/images/products/tube-soft-touch.jpg',
        alt: 'หลอดครีมซอฟต์ทัชโทนส้ม เขียว และครีม พร้อมฝาทรงพื้นเรียบ',
      },
      {
        name: 'Face Cream Tube',
        nameTh: 'หลอดครีมบำรุงผิว',
        image: '/images/products/tube-face-cream.jpg',
        alt: 'หลอดครีมบำรุงผิวสีครีม พร้อมลูกบิดทรงกลมสีน้ำตาลทั้งสองด้าน',
      },
      {
        name: 'Sunscreen Squeeze Tube',
        nameTh: 'หลอดซันสกรีนแบบบีบ',
        image: '/images/products/tube-sunscreen.jpg',
        alt: 'หลอดซันสกรีนแบบบีบ โทนพาสเทล พร้อมห่วงแขวนและฝาแบบหมุน',
      },
      {
        name: 'Airless Pump Tube',
        nameTh: 'หลอดแอร์เลส',
        image: '/images/products/tube-airless-pump.jpg',
        alt: 'หลอดแอร์เลสพร้อมหัวปั๊มโปร่งแสง โทนชมพู ม่วง และเขียวพาสเทล',
      },
      {
        name: 'Cleansing Tube',
        nameTh: 'หลอดคลีนซิ่ง',
        image: '/images/products/tube-cleansing.jpg',
        alt: 'หลอดคลีนซิ่งแบบคว่ำฝา โทนชมพู ฟ้า และเหลืองพาสเทล',
      },
      {
        name: 'Hand Cream Tube',
        nameTh: 'หลอดครีมทามือ',
        image: '/images/products/tube-hand-cream.jpg',
        alt: 'หลอดครีมทามือสีเขียวพาสเทล พร้อมฝาทรงกลมโค้งมน',
      },
      {
        name: 'Toothpaste Tube',
        nameTh: 'หลอดยาสีฟัน',
        image: '/images/products/tube-toothpaste.jpg',
        alt: 'หลอดยาสีฟันลายการ์ตูนน่ารัก โทนเหลืองครีม พร้อมฝาสีฟ้า',
      },
      {
        name: 'Facial Cleanser Tube',
        nameTh: 'หลอดล้างหน้า',
        image: '/images/products/tube-facial-cleanser.jpg',
        alt: 'หลอดล้างหน้าไล่สีชมพูอมส้ม วางบ้างานนำเสนอโทนชมพู',
      },
      {
        name: 'Hand Cream Tube Collection',
        nameTh: 'ชุดหลอดครีมทามือ',
        image: '/images/products/tube-hand-cream-set.png',
        alt: 'ชุดหลอดครีมทามือ NIRIN 4 สี เทา ม่วง ฟ้า และชมพู ตั้งเรียงบนแท่นทรงกระบอกสีขาว',
      },
      {
        name: 'Heart-Shaped Airless Tube',
        nameTh: 'หลอดแอร์เลสรูปหัวใจ',
        image: '/images/products/tube-heart-airless.png',
        alt: 'หลอดแอร์เลสรูปหัวใจพร้อมหัวปั๊ม สีเขียว ชมพู ฟ้า และม่วง บนพื้นหลังโทนพาสเทล',
      },
      {
        name: 'Sunscreen Tube Gift Set',
        nameTh: 'ชุดหลอดซันสกรีนพร้อมกล่อง',
        image: '/images/products/Hd59b55b325444e6d91abba477e01d54ee.png',
        alt: 'ชุดหลอดซันสกรีน plastic fun SPF50+ PA+++ 4 สีพาสเทล ฟ้า ชมพู ม่วง และส้ม พร้อมฝาดำ บรรจุในกล่องชมพูบนถาดวงกลมสีแดง',
      },
    ],
  },
  {
    id: 'boxes',
    en: 'Boxes',
    th: 'กล่อง',
    description:
      'กล่องบรรจุภัณฑ์สำหรับแพ็กเกจจิ้งสินค้า เสริมภาพลักษณ์แบรนด์ให้ดูสมบูรณ์และพรีเมียม',
    products: [
      {
        name: 'Coffee Box Bag',
        nameTh: 'กล่องถุงกาแฟพร้อมหูหิ้ว',
        image: '/images/products/box-coffee-bag.png',
        alt: 'กล่องถุงกาแฟสีน้ำเงินพร้อมหูหิ้ว ดีไซน์ Everyday Coffee บนฉากหลังโทนส้ม พร้อมแก้วกาแฟและชิ้นเค้ก',
      },
      {
        name: 'NIRIN Dessert Mailer Box',
        nameTh: 'กล่องดีเซิร์ต NIRIN',
        image: '/images/products/6565.png',
        alt: 'กล่องดีเซิร์ต NIRIN สีฟ้าหม่นแบบเปิดพับพร้อมสลักครีบ ด้านในลายหินอ่อนชมพู-ฟ้า พิมพ์ข้อความ Dessert Box',
      },
      {
        name: 'Bakery Gable Box',
        nameTh: 'กล่องเบเกอรี่พร้อมหูหิ้ว',
        image: '/images/products/H01db45e565694cff9b2854a4c21516f1B.png',
        alt: 'กล่องเบเกอรี่สีชมพูทรงหูหิ้ว พิมพ์โลโก้ Nice Bakery และลายครัวซองต์ วางเรียงบนชั้นขนมอบในร้าน',
      },
      {
        name: 'HuaMei Gift Box Set',
        nameTh: 'เซ็ตกล่องของขวัญพร้อมถุงกระดาษ',
        image: '/images/products/H35f7025bc40d4ca3978733adfd827751W.jpg',
        alt: 'เซ็ตกล่องของขวัญ HuaMei โทนเขียวเสลด์และครีม พร้อมถุงกระดาษริบบินดำ ซองจดหมาย และการ์ดแนะนำแบรนด์',
      },
      {
        name: 'AURELIS Apparel Gift Box',
        nameTh: 'กล่องของขวัญเสื้อผ้าแม่เหล็ก',
        image: '/images/products/Hd0aec33c69b746a780f0da10d5a6363bW.jpg',
        alt: 'กล่องของขวัญแม่เหล็กสีขาวครีมโลโก้ทอง AURELIS บรรจุเบลเซอร์สีกรมท่า พร้อมอินโฟกราฟิก Certified Quality ตรามาตรฐาน FSC ISO 9001 BSCI และ SGS',
      },
      {
        name: 'Longfeng E-Commerce Mailer Box',
        nameTh: 'กล่องไปรษณีย์อีคอมเมิร์ซ',
        image: '/images/products/Hda8799ae75224b7bab1ed86fb26bf9131.png',
        alt: 'กล่องไปรษณีย์ Longfeng สีม่วงและเขียว วางร่วมกับโน้ตขอบคุณ เทปคราฟท์ และกระดาษห่อของขวัญ สำหรับ e-commerce และ subscription box',
      },
      {
        name: 'Botanical Skincare Gift Box',
        nameTh: 'กล่องเซ็ตสกินแคร์ลายพฤกษศาสตร์',
        image: '/images/products/Hf8a3415eb71c4f5d8568b8423cd4445dn.jpg',
        alt: 'กล่องเซ็ตสกินแคร์โทนเบจลายพฤกษศาสตร์ ฝาในพิมพ์ลายใบไม้และดอกไม้ พร้อมโฟมวางขวดเซรั่มสีเขียวฝาทอง บนมอสสีเขียว',
      },
      {
        name: 'HOPE-STAR Gift Box',
        nameTh: 'กล่องของขวัญ HOPE-STAR',
        image: '/images/products/Hfae09b3eb29a4b39b879eafb5adf7031J.png',
        alt: 'กล่องของขวัญ HOPE-STAR โลโก้สีทอง สีเขียวพร้อมริบบินหูหิ้ว และสีส้มแบบแผงเปิดหน้า บนเคาน์เตอร์หินอ่อน',
      },
      {
        name: 'Thank You Apparel Mailer Box',
        nameTh: 'กล่องไปรษณีย์ Thank You สีชมพู',
        image: '/images/products/S80cd03ebf357466b853449a677af063eR.png',
        alt: 'กล่องไปรษณีย์สีชมพูพิมพ์ข้อความ Thank You for Your Purchase ใบเปิดบรรจุเสื้อยืดขาว พร้อมริบบินพาสเทล',
      },
      {
        name: "Ashley's Tent Gift Box",
        nameTh: 'กล่องของขวัญทรงสามเหลี่ยม Ashley',
        image: '/images/products/Ua27e9eebf628471e8b0a58901c4afbc95.jpg',
        alt: "กล่องของขวัญทรงปริซึมสามเหลี่ยมสีเขียวเมจิกต้า พิมพ์ลายเซ็น Ashley's สีขาวพร้อมโมโนแกรม ผูกริบบินเขียวเข้มเป็นโบว์",
      },
    ],
  },
  {
    id: 'pouches',
    en: 'Pouches',
    th: 'ซอง',
    description:
      'ซองบรรจุภัณฑ์สำหรับสินค้าขนาดเล็กและแซมเปิล สะดวก น้ำหนักเบา เหมาะกับทุกการใช้งาน',
    products: [
      {
        name: 'Serum Sachet',
        nameTh: 'ซองเซรั่ม',
        image: '/images/products/pouch-serum-sachet.png',
        alt: 'ซองเซรั่ม Glow Beauty 3 สี ชมพู ม่วง และขาว แบบซองแบนพร้อมภาพหลอดหยดเซรั่ม',
      },
      {
        name: 'Cream Spout Pouch',
        nameTh: 'ซองครีมหัวปิดเกลียว',
        image: '/images/products/ครีมซอง 1.png',
        alt: 'ซองครีมหัวปิดเกลียวสีชมพูสองใบ พิมพ์ลาย SPOUT POUCH พร้อมโลโก้ NIRIN วางบนฐานวงกลมโทนชมพู',
      },
      {
        name: 'NIRIN Paper Carry Bag',
        nameTh: 'ถุงกระดาษหูหิ้ว NIRIN',
        image: '/images/products/ถุง 1.png',
        alt: 'ถุงกระดาษหูหิ้วสีชมพูพร้อมโลโก้ NIRIN ริบบินหูหิ้วพิมพ์ลาย TASTY วางบนโต๊ะอาหารเช้าพร้อมเบเกอรี่',
      },
    ],
  },
];
