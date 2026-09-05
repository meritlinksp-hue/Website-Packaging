import { showcaseItems } from '../data/products';

export default function ShowcaseSection() {
  return (
    <div className="showcase-stack">
      {showcaseItems.map((item, index) => (
        <section
          key={item.id}
          className="showcase-section"
          id={item.id}
          aria-label={item.alt}
        >
          <figure
            className={
              item.mobileImage
                ? 'poster-frame poster-frame--mobile-hero'
                : 'poster-frame'
            }
          >
            {/* Desktop: ใช้ item.image ตามเดิม — Mobile (≤760px): สลับเป็น item.mobileImage
                ผ่าน <picture><source media> เบราว์เซอร์โหลดเฉพาะไฟล์ที่ตรงเงื่อนไข media query */}
            <picture>
              {item.mobileImage && (
                <source
                  media="(max-width: 760px)"
                  srcSet={item.mobileImage}
                />
              )}
              <img
                src={item.image}
                alt={item.alt}
                width="1980"
                height="1200"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>
          </figure>
        </section>
      ))}
    </div>
  );
}