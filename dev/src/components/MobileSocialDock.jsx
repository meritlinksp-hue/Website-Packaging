/* =====================================================================
 * MOBILE FLOATING SOCIAL DOCK — LOCALHOST ONLY (do not commit / push)
 * Facebook / TikTok / LINE · fixed right, BELOW the mobile header.
 * Mobile only: renders null at ≥761px (CSS also hides it).
 * ROLLBACK: delete this file + MobileSocialDock.css + 2 lines in App.jsx
 * Replace href="#" placeholders with real brand URLs before any release.
 * ===================================================================== */

import { useEffect, useState } from 'react';
import './MobileSocialDock.css';

export default function MobileSocialDock() {
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

  return (
    <nav className="msocial-dock" aria-label="ช่องทางติดต่อโซเชียล">
      <a
        className="msocial-link msocial-link--fb"
        href="https://www.facebook.com/share/16CCz4mc1kC/?mibextid=wwXIfr"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="msocial-logo"
          src="/images/social-icons/facebook.png"
          alt=""
          width="44"
          height="44"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </a>
      <a
        className="msocial-link msocial-link--tiktok"
        href="https://www.tiktok.com/@nirin.packaging?_r=1&_t=ZS-99btgGWt2a0"
        aria-label="TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="msocial-logo"
          src="/images/social-icons/Tiktok.png"
          alt=""
          width="44"
          height="44"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </a>
      <a
        className="msocial-link msocial-link--line"
        href="https://lin.ee/TiPFhI6"
        aria-label="LINE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="msocial-logo"
          src="/images/social-icons/Line.png"
          alt=""
          width="44"
          height="44"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </a>
    </nav>
  );
}
