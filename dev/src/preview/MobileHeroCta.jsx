import { useEffect, useState } from 'react';
import './mobile-hero-cta.css';

/* =============================================================
 * TEMPORARY MOBILE HERO CTA — "Explore our packaging" PULSE
 * =============================================================
 * The CTA button artwork is EMBEDDED in the hero image
 * (hero-mobile/New Hero.png: button at x[42-456] y[803-905],
 *  measured from pixels — magenta→purple gradient, rounded ends).
 *
 * Approach — the ORIGINAL ARTWORK ITSELF scales (no overlay, no
 * glow, no shimmer, no redrawn button):
 *
 *   .mhcta     = semantic <a> hotspot (clickable → catalog),
 *                positioned proportionally over the pill.
 *   .mhcta-art = a CSS "cutout": the SAME hero image rendered as a
 *                background with background-size/background-position
 *                tuned so it reproduces EXACTLY the pill's own
 *                pixels, clipped to the pill's rounded shape. At
 *                scale(1) it is pixel-identical to the artwork
 *                beneath (invisible seam). The infinite keyframes
 *                scale it 1 → 1.10 → 1 around its center → the
 *                ORIGINAL artwork visibly grows, then returns.
 *                Pure transform — no opacity/glow/shimmer animation.
 *
 *  • Mobile only (≤760px): desktop renders null → no DOM at all.
 *  • prefers-reduced-motion: static original artwork, still clickable.
 *
 * ROLLBACK: delete this file + mobile-hero-cta.css + the commented
 * "TEMPORARY ... MOBILE HERO CTA" block in ShowcaseSection.jsx
 * ============================================================ */

const CATALOG_ROUTE = '#/product-catalog'; // existing route (navItems/App.jsx)

export default function MobileHeroCta({ onNavigate }) {
  // Desktop (≥761px) → null at first render: hero stays 100% unchanged.
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 760px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  if (!isMobile) return null;

  // Use the app's existing router navigate('catalog') → sets the
  // #/product-catalog hash AND scrollTo top. A plain <a href> only
  // updates the hash without resetting scroll, so the catalog page
  // could land scrolled mid-page (appears "not to navigate").
  const handleClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('catalog');
    }
  };

  return (
    <a
      className="mhcta"
      href={CATALOG_ROUTE}
      aria-label="Explore our packaging"
      onClick={handleClick}
    >
      <span className="mhcta-art" aria-hidden="true" />
    </a>
  );
}