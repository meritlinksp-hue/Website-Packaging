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
  alt: 'Nirin Packaging product categories — comprehensive packaging solutions for every brand idea',
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
      {
        name: 'Clear Dropper Serum Bottle',
        nameTh: 'ขวดเซรั่มดรอปเปอร์ใส',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_7.jpg',
        alt: 'ขวดเซรั่มดรอปเปอร์แก้วใส พร้อมหลอดหยดและหยดเซรั่มเนื้อใส',
      },
      {
        name: 'Square Serum Bottle Set',
        nameTh: 'เซ็ตขวดเซรั่มทรงเหลี่ยม',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_8.jpg',
        alt: 'เซ็ตขวดเซรั่ม NIRIN ทรงเหลี่ยม 3 ขวด ฝาสีม่วง เขียวมิ้นต์ และฟ้า วางบนแท่นหินอ่อน',
      },
      {
        name: 'Serum Dropper Bottle Duo',
        nameTh: 'ขวดเซรั่มดรอปเปอร์คู่',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_9.jpg',
        alt: 'ขวดเซรั่มดรอปเปอร์ NIRIN 2 ขวด โทนชมพูใสและม่วง พร้อมหยดเซรั่มบนผิว',
      },
      {
        name: 'Luxury Serum Dropper Bottle',
        nameTh: 'ขวดเซรั่มดรอปเปอร์หรูหรา',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_10.jpg',
        alt: 'ขวดเซรั่มดรอปเปอร์ NIRIN ฝาทองทรงสูง ขวดแก้วใส เหมาะสำหรับเซรั่มพรีเมียม',
      },
      {
        name: 'Pink Serum Dropper Bottle',
        nameTh: 'ขวดเซรั่มดรอปเปอร์สีชมพู',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_11.jpg',
        alt: 'ขวดเซรั่มดรอปเปอร์ NIRIN สีชมพูทั้งขวด วางคู่กับดอกไม้สีชมพู',
      },
      {
        name: 'Amber Dropper Serum Bottle',
        nameTh: 'ขวดเซรั่มดรอปเปอร์สีอำพัน',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_12.jpg',
        alt: 'ขวดเซรั่มดรอปเปอร์ NIRIN ขวดแก้วสีอำพัน ฝาดำและฝาทอง วางบนหนังสือ',
      },
      {
        name: 'Mini Dropper Serum Set',
        nameTh: 'เซ็ตขวดเซรั่มดรอปเปอร์มินิ',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_13.jpg',
        alt: 'เซ็ตขวดเซรั่มดรอปเปอร์ขนาดมินิ NIRIN ฝาสีครีม วางเรียงบนแท่นวงกลมสีขาว',
      },
      {
        name: 'Frosted Serum Pump Bottle',
        nameTh: 'ขวดเซรั่มปั๊มฝ้า',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_14.jpg',
        alt: 'ขวดเซรั่มหัวปั๊ม NIRIN ขวดแก้วฝ้าไล่สีชมพู พร้อมกล่องบรรจุภัณฑ์สีชมพู',
      },
      {
        name: 'Green Serum Dropper Bottle',
        nameTh: 'ขวดเซรั่มดรอปเปอร์สีเขียว',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_15.jpg',
        alt: 'ขวดเซรั่มดรอปเปอร์ NIRIN ขวดแก้วสีเขียว ฝาไม้ไผ่ วางคู่กับใบไม้',
      },
      {
        name: 'Clear Serum Bottle with Bamboo Cap',
        nameTh: 'ขวดเซรั่มใสฝาไม้ไผ่',
        image: '/images/products/เซรั่ม/LINE_ALBUM_เซรั่ม_260909_16.jpg',
        alt: 'ขวดเซรั่ม NIRIN ขวดใสฝาไม้ไผ่ ทั้งหัวดรอปเปอร์และหัวปั๊ม วางบนผ้าลินิน',
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
      {
        name: 'Gold Lid Cream Jar',
        nameTh: 'กระปุกครีมฝาทอง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_7.jpg',
        alt: 'กระปุกครีม NIRIN ฝาทอง ฉลากสีชมพู ขนาด 50 กรัม วางบนแท่นหินอ่อน',
      },
      {
        name: 'Gold Cap Cream Jar Set',
        nameTh: 'เซ็ตกระปุกครีมฝาทอง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_8.jpg',
        alt: 'เซ็ตกระปุกครีม NIRIN ฝาทอง ตัวกระปุกสีชมพูและครีม วางบนแท่นหินอ่อน',
      },
      {
        name: 'Open Cream Jar Gold Lid',
        nameTh: 'กระปุกครีมเปิดฝาทอง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_9.jpg',
        alt: 'กระปุกครีม NIRIN เปิดฝาทองเห็นเนื้อครีม ขนาด 50 กรัม วางบนแท่นหินอ่อน',
      },
      {
        name: 'Black Lid Cream Jar',
        nameTh: 'กระปุกครีมฝาดำ',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_10.jpg',
        alt: 'กระปุกครีม NIRIN ฝาดำ ฉลากชมพูเงิน ขนาด 50 กรัม พร้อมกล่องบรรจุภัณฑ์',
      },
      {
        name: 'Gold Lid Cream Jar Gift Set',
        nameTh: 'เซ็ตของขวัญกระปุกครีมฝาทอง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_11.jpg',
        alt: 'กระปุกครีม NIRIN ฝาทอง วางคู่กับกล่องของขวัญสีชมพู พร้อมดอกไม้',
      },
      {
        name: 'White Cream Jar Set',
        nameTh: 'เซ็ตกระปุกครีมสีขาว',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_260909_12.jpg',
        alt: 'เซ็ตกระปุกครีม NIRIN สีขาว 3 กระปุก วางบนหนังสือปกชมพู',
      },
      {
        name: 'Pink Lid Cream Jar with Inner Cups',
        nameTh: 'กระปุกครีมฝาชมพูพร้อมถ้วยด้านใน',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_261016_1.jpg',
        alt: 'กระปุกครีม NIRIN ฝาชมพู พร้อมถ้วยครีมด้านใน 2 ถ้วย เนื้อครีมสีชมพู',
      },
      {
        name: 'Frosted Cream Jar Wood Lid',
        nameTh: 'กระปุกครีมฝ้า ฝาไม้',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_261016_2.jpg',
        alt: 'กระปุกครีม NIRIN ขวดแก้วฝ้า ฝาไม้ พร้อมป้ายเนื้อครีมสีชมพู',
      },
      {
        name: 'Clear Cream Jar Bamboo Lid',
        nameTh: 'กระปุกครีมใส ฝาไม้ไผ่',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_261016_3.jpg',
        alt: 'มือถือกระปุกครีม NIRIN ขวดใส ฝาไม้ไผ่ พร้อมป้ายเนื้อครีมสีชมพู',
      },
      {
        name: 'Green Cream Jar Wood Lid',
        nameTh: 'กระปุกครีมสีเขียว ฝาไม้',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_261016_4.jpg',
        alt: 'กระปุกครีม NIRIN สีเขียว ฝาไม้ 2 กระปุก เปิดเห็นเนื้อครีมสีขาว',
      },
      {
        name: 'Wide Frosted Cream Jar Wood Lid',
        nameTh: 'กระปุกครีมปากกว้าง ฝาไม้',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุก_261016_5.jpg',
        alt: 'กระปุกครีม NIRIN ทรงปากกว้าง ขวดแก้วฝ้า ฝาไม้ วางบนมอสสีเขียว',
      },
      {
        name: 'Pink Double Wall Cream Jar',
        nameTh: 'กระปุกครีมชมพูผนังสองชั้น',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_1.jpg',
        alt: 'กระปุกครีม NIRIN สีชมพู ผนังสองชั้น ขนาด 100 กรัม พร้อมกล่องสีชมพู',
      },
      {
        name: 'Pink Cream Jar with Texture',
        nameTh: 'กระปุกครีมชมพูพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_2.jpg',
        alt: 'กระปุกครีม NIRIN สีชมพู เปิดฝาเห็นเนื้อครีมสีชมพู พร้อมกล่องบรรจุภัณฑ์',
      },
      {
        name: 'Lavender Cream Jar',
        nameTh: 'กระปุกครีมสีม่วงลาเวนเดอร์',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_3.jpg',
        alt: 'กระปุกครีม NIRIN สีม่วงลาเวนเดอร์ ขนาด 100 กรัม พร้อมกล่องสีม่วง',
      },
      {
        name: 'Lavender Cream Jar with Texture',
        nameTh: 'กระปุกครีมลาเวนเดอร์พร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_4.jpg',
        alt: 'กระปุกครีม NIRIN สีม่วงลาเวนเดอร์ เปิดฝาเห็นเนื้อครีม พร้อมกล่องบรรจุภัณฑ์',
      },
      {
        name: 'Purple Cream Jar Silver Band',
        nameTh: 'กระปุกครีมม่วงแถบเงิน',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_5.jpg',
        alt: 'กระปุกครีม NIRIN สีม่วง แถบเงิน เปิดฝาเห็นเนื้อครีมสีขาว พร้อมกล่องสีม่วงเข้ม',
      },
      {
        name: 'Purple Cream Jar Gold Band',
        nameTh: 'กระปุกครีมม่วงแถบทอง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_6.jpg',
        alt: 'กระปุกครีม NIRIN สีม่วง แถบทอง ปิดฝา พร้อมกล่องบรรจุภัณฑ์สีม่วงเข้ม',
      },
      {
        name: 'Blue Cream Jar with Texture',
        nameTh: 'กระปุกครีมสีฟ้าพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_7.jpg',
        alt: 'กระปุกครีม NIRIN สีฟ้า เปิดฝาเห็นเนื้อครีมสีฟ้า พร้อมกล่องสีฟ้า',
      },
      {
        name: 'Light Blue Cream Jar Duo',
        nameTh: 'กระปุกครีมฟ้าอ่อนคู่',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_8.jpg',
        alt: 'กระปุกครีม NIRIN สีฟ้าอ่อน 2 กระปุก ทั้งเปิดและปิดฝา พร้อมกล่องสีฟ้า',
      },
      {
        name: 'Light Blue Cream Jar with Texture',
        nameTh: 'กระปุกครีมฟ้าอ่อนพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_9.jpg',
        alt: 'กระปุกครีม NIRIN สีฟ้าอ่อน เปิดฝาเห็นเนื้อครีมสีฟ้า พร้อมกล่องบรรจุภัณฑ์',
      },
      {
        name: 'Turquoise Cream Jar Trio',
        nameTh: 'เซ็ตกระปุกครีมสีเทอร์ควอยซ์',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_10.jpg',
        alt: 'กระปุกครีม NIRIN สีฟ้าเทอร์ควอยซ์ 3 กระปุก ทั้งเปิดและปิดฝา พร้อมกล่องสีฟ้า',
      },
      {
        name: 'Green Cream Jar Duo',
        nameTh: 'กระปุกครีมสีเขียวคู่',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_11.jpg',
        alt: 'กระปุกครีม NIRIN สีเขียว 2 กระปุก เปิดเห็นเนื้อครีมสีเขียว พร้อมกล่องสีเขียว',
      },
      {
        name: 'Green Cream Jar',
        nameTh: 'กระปุกครีมสีเขียว',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_12.jpg',
        alt: 'กระปุกครีม NIRIN สีเขียว เปิดฝาเห็นเนื้อครีม พร้อมกล่องบรรจุภัณฑ์สีเขียว',
      },
      {
        name: 'Lime Green Cream Jar with Texture',
        nameTh: 'กระปุกครีมเขียวมะนาวพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_13.jpg',
        alt: 'กระปุกครีม NIRIN สีเขียวมะนาว เปิดฝาเห็นเนื้อครีม พร้อมกล่องสีเขียวอ่อน',
      },
      {
        name: 'Yellow Cream Jar Trio',
        nameTh: 'เซ็ตกระปุกครีมสีเหลือง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_14.jpg',
        alt: 'กระปุกครีม NIRIN สีเหลือง 3 กระปุก ทั้งเปิดและปิดฝา พร้อมกล่องสีเหลือง',
      },
      {
        name: 'Yellow Cream Jar with Texture',
        nameTh: 'กระปุกครีมเหลืองพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_15.jpg',
        alt: 'กระปุกครีม NIRIN สีเหลือง เปิดฝาเห็นเนื้อครีมสีเหลือง พร้อมกล่องบรรจุภัณฑ์',
      },
      {
        name: 'Orange Cream Jar Trio',
        nameTh: 'เซ็ตกระปุกครีมสีส้ม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_16.jpg',
        alt: 'กระปุกครีม NIRIN สีส้ม 3 กระปุก ทั้งเปิดและปิดฝา พร้อมกล่องสีชมพู',
      },
      {
        name: 'Orange Cream Jar with Texture',
        nameTh: 'กระปุกครีมส้มพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_17.jpg',
        alt: 'กระปุกครีม NIRIN สีส้ม เปิดฝาเห็นเนื้อครีมสีส้ม พร้อมกล่องสีชมพู',
      },
      {
        name: 'Coral Red Cream Jar Trio',
        nameTh: 'เซ็ตกระปุกครีมสีแดงปะการัง',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_18.jpg',
        alt: 'กระปุกครีม NIRIN สีแดงปะการัง 3 กระปุก ทั้งเปิดและปิดฝา พร้อมกล่องสีชมพู',
      },
      {
        name: 'Coral Red Cream Jar with Texture',
        nameTh: 'กระปุกครีมแดงพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_19.jpg',
        alt: 'กระปุกครีม NIRIN สีแดงปะการัง เปิดฝาเห็นเนื้อครีม พร้อมกล่องสีชมพู',
      },
      {
        name: 'Pink Cream Jar White Flower',
        nameTh: 'กระปุกครีมชมพูดอกไม้ขาว',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_20.jpg',
        alt: 'กระปุกครีม NIRIN สีชมพู ปิดฝา วางคู่กับดอกไม้สีขาว พร้อมกล่องสีชมพู',
      },
      {
        name: 'Pink Cream Jar Cherry Blossom',
        nameTh: 'กระปุกครีมชมพูดอกซากุระ',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_21.jpg',
        alt: 'กระปุกครีม NIRIN สีชมพู ปิดฝา วางคู่กับดอกซากุระสีชมพู พร้อมกล่องบรรจุภัณฑ์',
      },
      {
        name: 'Pink Cream Jar White Orchid',
        nameTh: 'กระปุกครีมชมพูดอกกล้วยไม้',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_22.jpg',
        alt: 'กระปุกครีม NIRIN สีชมพู เปิดฝาเห็นเนื้อครีม วางคู่กับดอกกล้วยไม้สีขาว',
      },
      {
        name: 'Pink Cream Jar Flower with Texture',
        nameTh: 'กระปุกครีมชมพูพร้อมเนื้อครีม',
        image: '/images/products/กระปุกครีม/LINE_ALBUM_กระปุกครีม_261016_23.jpg',
        alt: 'กระปุกครีม NIRIN สีชมพู เปิดฝาเห็นเนื้อครีมสีชมพู วางคู่กับดอกไม้สีขาว',
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
      {
        name: 'Hydrating Skincare Pump Set',
        nameTh: 'เซ็ตขวดปั๊มสกินแคร์ไฮเดรติ้ง',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_7.jpg',
        alt: 'เซ็ตขวดปั๊มสกินแคร์ NIRIN โทนฟ้าขาว ทั้งเจลล้างหน้า เซรั่ม โทนเนอร์ และครีมบำรุงผิว',
      },
      {
        name: 'Pastel Lotion Pump Bottle 500ml',
        nameTh: 'ขวดปั๊มโลชั่นพาสเทล 500 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_8.jpg',
        alt: 'ขวดปั๊มโลชั่น NIRIN 500 มล. 4 สีพาสเทล ฟ้า เหลือง ม่วง และเขียว สำหรับโลชั่นบำรุงผิว',
      },
      {
        name: 'Body Lotion Pump 750ml',
        nameTh: 'ขวดปั๊มโลชั่นบอดี้ 750 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_9.jpg',
        alt: 'ขวดปั๊มโลชั่นบอดี้ เจลอาบน้ำ และบอดี้วอช NIRIN โทนชมพู ขนาด 300-750 มล. วางบนผิวน้ำ',
      },
      {
        name: 'Essence Lotion Pump Bottle',
        nameTh: 'ขวดปั๊มเอสเซนส์โลชั่น',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_10.jpg',
        alt: 'ขวดปั๊มเอสเซนส์โลชั่น NIRIN ฝาทรงกลมสีม่วงพาสเทล ขนาด 30-120 มล.',
      },
      {
        name: 'Mist Lotion Pump Bottle 50ml',
        nameTh: 'ขวดปั๊มมิสต์โลชั่น 50 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_11.jpg',
        alt: 'ขวดปั๊มมิสต์โลชั่น NIRIN สีชมพูใส 50 มล. ทั้งหัวสเปรย์ หัวปั๊มกลม และหัวปั๊มตรง',
      },
      {
        name: 'Wood Cap Lotion Pump 100ml',
        nameTh: 'ขวดปั๊มฝาไม้ 100 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_12.jpg',
        alt: 'ขวดปั๊มโลชั่น NIRIN ฝาลายไม้ทรงกลม 100 มล. โทนชมพู ทั้งหัวสเปรย์และหัวปั๊ม',
      },
      {
        name: 'Pet Care Pump Bottle 500ml',
        nameTh: 'ขวดปั๊มแชมพูสัตว์เลี้ยง 500 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_13.jpg',
        alt: 'ขวดปั๊มแชมพู ครีมนวด และบอดี้วอชสำหรับสัตว์เลี้ยง NIRIN 500 มล. โทนชมพูม่วง',
      },
      {
        name: 'Travel Pump Bottle Set',
        nameTh: 'เซ็ตขวดปั๊มขนาดพกพา',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_14.jpg',
        alt: 'เซ็ตขวดปั๊มขนาดพกพา NIRIN ทั้งเอสเซนส์ บอดี้วอช โลชั่น และสเปรย์ฉีดหน้า โทนชมพูม่วง',
      },
      {
        name: 'Lotion Pump Bottle 500ml',
        nameTh: 'ขวดปั๊มโลชั่น 500 มล.',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_15.jpg',
        alt: 'ขวดปั๊มโลชั่น NIRIN 500 มล. สีชมพูและม่วง พร้อมภาพชิ้นส่วนหัวปั๊มและหลอดดูด',
      },
      {
        name: 'Foam Pump Bottle',
        nameTh: 'ขวดปั๊มโฟม',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_16.jpg',
        alt: 'ขวดปั๊มโฟม NIRIN หัวปั๊มกดสร้างฟอง โทนชมพูขาว พร้อมฟองโฟมสีชมพู',
      },
      {
        name: 'Cleansing Foam Pump',
        nameTh: 'ขวดปั๊มโฟมล้างหน้า',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_17.jpg',
        alt: 'ขวดปั๊มโฟมล้างหน้า NIRIN โทนฟ้าขาว มีฟองโฟมเนื้อละเอียด พร้อมภาพหัวปั๊มแบบถอดประกอบ',
      },
      {
        name: 'Mousse Foam Pump Bottle',
        nameTh: 'ขวดปั๊มมูสโฟม',
        image: '/images/products/ขวดปั๊ม/LINE_ALBUM_ปั๊ม_260909_18.jpg',
        alt: 'ขวดปั๊มมูสโฟม NIRIN ทรงกระบอกสูงสีขาวชมพู พร้อมเนื้อมูสโฟมสีชมพู',
      },
    ],
  },
];
