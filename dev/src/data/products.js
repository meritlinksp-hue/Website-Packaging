export const showcaseItems = [
  {
    id: 'about-us',
    image: '/images/we-are-nirin.png',
    mobileImage: '/images/hero-mobile/New%20Hero.png',
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
      { id: 'boxes', th: 'กล่อง', en: 'Boxes' },
      { id: 'pouches', th: 'ซอง', en: 'Pouches' },
      { id: 'serum', th: 'เซรั่ม', en: 'Serum' },
      { id: 'cream-jar', th: 'กระปุกครีม', en: 'Cream Jar' },
      { id: 'pump-bottle', th: 'ขวดปั๊ม', en: 'Pump Bottle' },
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
    id: 'boxes',
    en: 'Boxes',
    th: 'กล่อง',
    description:
      'กล่องบรรจุภัณฑ์สำหรับเครื่องสำอางและตัวอย่างสินค้า มอบความปลอดภัยและความสวยงามให้แบรนด์ของคุณ',
    products: [
      {
        name: 'Dessert Box',
        nameTh: 'กล่องดีเซิร์ต',
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
        alt: "กล่องของขวัญทรงมีปริซึมสามเหลี่ยมสีเขียวเมจิกต้า พิมพ์ลายเซ็น Ashley's สีขาวพร้อมโมโนแกรม ผูกริบบินเขียวเข้มเป็นโบว์",
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
  {
    id: 'serum',
    en: 'Serum',
    th: 'เซรั่ม',
    description:
      'เซรั่มและบรรจุภัณฑ์สำหรับผลิตภัณฑ์บำรุงผิวหน้าระดับพรีเมียม ช่วยเพิ่มความน่าทึ่งให้กับแบรนด์ของคุณ',
    products: [
      {
        name: 'Serum Bottle Collection',
        nameTh: 'ขวดเซรั่มชุดแต่งหน้า',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_1.jpg',
        alt: 'ชุดขวดเซรั่มโทนพาสเทลหลากหลายสี วางเรียงบนฉากโทนขาวอมครีม',
      },
      {
        name: 'Serum Dropper Bottle',
        nameTh: 'ขวดเซรั่มหัวหยด',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_2.jpg',
        alt: 'ขวดเซรั่มรูปทรงเรียวพร้อมหัวหยดแก้ว วางบนฉากโทนเบจอ่อน',
      },
      {
        name: 'Serum Capsule',
        nameTh: 'แคปซูลเซรั่ม',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_3.jpg',
        alt: 'แคปซูลเซรั่มทรงกลมโปร่งแสง ผลิตจากวัสดุอ่อนนุ่ม ให้ความรู้สึกหรูหรา',
      },
      {
        name: 'Serum Ampoule Bottle',
        nameTh: 'ขวดแอมโพลเซรั่ม',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_4.jpg',
        alt: 'ขวดแอมโพลเซรั่มทรงกระบอกเล็ก สีโทนใส่วาว วางเรียงบนแท่นวงกลม',
      },
      {
        name: 'Serum Spray Bottle',
        nameTh: 'ขวดเซรั่มพ่นละออง',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_5.jpg',
        alt: 'ขวดเซรั่มพ่นละอองทรงเรียว เท้าห้อยสวยงาม บรรจุบนแท่นโทนพาสเทล',
      },
      {
        name: 'Serum Essence Bottle',
        nameTh: 'ขวดเซรั่มเอนไซม์',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_6.jpg',
        alt: 'ขวดเซรั่มเอนไซม์ทรงกระบอกสูง โปร่งแสงบางส่วน บรรจุบนฉากโทนขาว',
      },
    ],
  },
  {
    id: 'cream-jar',
    en: 'Cream Jar',
    th: 'กระปุกครีม',
    description:
      'กระปุกครีมสำหรับครีมบำรุงผิวหน้าและผิวกาย เพิ่มมิติความพรีเมียมให้แบรนด์ของคุณตั้งแต่แรกเห็น',
    products: [
      {
        name: 'Airless Cream Jar',
        nameTh: 'กระปุกครีมแอร์เลส',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_1.jpg',
        alt: 'กระปุกครีมแอร์เลสสีขาวพร้อมหัวปั๊ม บรรจุบนฉากโทนพาสเทล',
      },
      {
        name: 'Cream Jar with Spoon',
        nameTh: 'กระปุกครีมพร้อมช้อน',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_2.jpg',
        alt: 'กระปุกครีมทรงกระบอกพร้อมช้อนพลาสติกโทนเขียวอ่อน',
      },
      {
        name: 'Premium Cream Jar',
        nameTh: 'กระปุกครีมพรีเมียม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_3.jpg',
        alt: 'กระปุกครีมหรูหราผิวสัมผัสเมทัล รัดกุมด้วยสายรัดกระดาษ',
      },
      {
        name: 'Glass Cream Jar',
        nameTh: 'กระปุกครีมแก้ว',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_4.jpg',
        alt: 'กระปุกครีมแก้วใสทรงกระบอกมีสีต่าง ๆ วางเรียงบนชั้น',
      },
      {
        name: 'Ceramic Cream Jar',
        nameTh: 'กระปุกครีมเซรามิก',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_5.jpg',
        alt: 'กระปุกครีมเซรามิกเผา EOF ทำมือ โทนน้ำตาลธรรมชาติ',
      },
      {
        name: 'Cream Jar Duo Set',
        nameTh: 'เซ็ตกระปุกครีม 2 ชิ้น',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_6.jpg',
        alt: 'เซ็ตกระปุกครีมคู่สีโทนพาสเทล พร้อมฝาปิดแม่เหล็ก',
      },
    ],
  },
  {
    id: 'pump-bottle',
    en: 'Pump Bottle',
    th: 'ขวดปั๊ม',
    description:
      'ขวดปั๊มสำหรับโลชั่นและผลิตภัณฑ์ดูแลผิวกาย ให้การใช้งานสะดวก ถูกสุขลักษณะ และดูสมาร์ททุกการใช้งาน',
    products: [
      {
        name: 'Sunscreen Pump Bottle',
        nameTh: 'ขวดปั๊มซันสกรีน',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_1.jpg',
        alt: 'ขวดปั๊มซันสกรีน NIRIN 50+ ทรงหัวกลมแบน สีเขียว ชมพู และฟ้าพาสเทล วางบนแท่นโทนเบจ',
      },
      {
        name: 'Pump Bottle Set',
        nameTh: 'ชุดขวดปั๊มหลายขนาด',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_2.jpg',
        alt: 'ชุดขวดปั๊ม 3 ขนาด โทนขาวครีมพร้อมฉลากแผ่นโปร่งแสง',
      },
      {
        name: 'Body Lotion Pump',
        nameTh: 'ขวดปั๊มโลชั่นบอดี้',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_3.jpg',
        alt: 'ขวดปั๊มโลชั่นบอดี้ทรงกระบอกสูง โทนพาสเทลพร้อมฉลากข้อความ body lotion',
      },
      {
        name: 'Pump Dispenser',
        nameTh: 'ที่ฉีดพ่นปั๊ม',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_4.jpg',
        alt: 'ที่ฉีดพ่นปั๊มทรงกลมสีขาว โปร่งแสงบางส่วน ใช้สำหรับสารทำความสะอาด',
      },
      {
        name: 'Premium Pump Bottle',
        nameTh: 'ขวดปั๊มพรีเมียม',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_5.jpg',
        alt: 'ขวดปั๊มหรูหราผิวขุ่นเทาอ่อน มีลายบางๆ วางบนแท่นโทนเขียว',
      },
      {
        name: 'Pump Bottle 250ml',
        nameTh: 'ขวดปั๊ม 250 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_6.jpg',
        alt: 'ขวดปั๊ม 250 มล. สไตล์มินีรัล โทนใสใจดวงตา เหมาะสำหรับน้ำมันบำรุงผิว',
      },
    ],
  },
];