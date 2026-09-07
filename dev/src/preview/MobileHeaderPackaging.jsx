/* =============================================================
 * TEMPORARY PACKAGING ANIMATION TEST — MOBILE ONLY
 * =============================================================
 * LOCALHOST EXPERIMENT — แสดงเฉพาะจอ ≤760px เท่านั้น
 *
 * ROLLBACK (ลบทิ้ง 3 จุด):
 *   1. Header.jsx  → ลบ import + <PackagingHeaderAnimation /> ที่มีคอมเมนต์
 *                     "TEMPORARY PACKAGING ANIMATION TEST" กำกับ
 *   2. ไฟล์นี้      → MobileHeaderPackaging.jsx
 *   3. ไฟล์ CSS    → mobile-header-packaging.css
 * (index.css และส่วนอื่นของ Header เดิมไม่ถูกแก้เพิ่ม)
 *
 * พฤติกรรม: one-shot เหมือน /animation-preview — เล่นครั้งเดียวจบแล้วหยุดนิ่ง
 * ไม่ loop / ไม่ marquee / ไม่มี rAF ค้าง (cancel เมื่อจบ) ·
 * เคารพ prefers-reduced-motion · Desktop render เป็น null (ไม่มี DOM,
 * ไม่โหลดรูป, ไม่มี animation)
 * ============================================================ */

import { useEffect, useRef, useState } from 'react';
import './mobile-header-packaging.css';

const ASSETS = [
  '/images/packaging/preview/1.png',
  '/images/packaging/preview/2.png',
  '/images/packaging/preview/3.png',
  '/images/packaging/preview/4.png',
  '/images/packaging/preview/5.png',
];

// ขนาดไฟล์จริง (px) ของ packaging/preview/1–5.png
const NATURAL = [
  [148, 347],
  [147, 365],
  [216, 198],
  [113, 385],
  [138, 392],
];

// สเปริงต่อชิ้น — ζ 0.58–0.62 = overshoot เล็กมาก (~8–9% ≈ 4–5px)
// overshoot อยู่ใน clearance บนของ header (5.8px) → ไม่โดน clip
const ITEM_SPEC = [
  { y0: 48, r0: -6, k: 130, zeta: 0.6 },
  { y0: 54, r0: 5, k: 148, zeta: 0.58 },
  { y0: 46, r0: -4.5, k: 122, zeta: 0.62 },
  { y0: 58, r0: 5.5, k: 157, zeta: 0.59 },
  { y0: 52, r0: -5.5, k: 139, zeta: 0.61 },
];

const STAGGER = 300;      // ms — เข้ามาทีละชิ้น
const SIDE_MARGIN = 8; // px ระยะปลอดภัยจากขอบโซนกลาง (เว้นจาก logo/ปุ่มเมนู)
const MIN_GAP = 3;     // px ช่องว่างแนวขอบวัตถุขั้นต่ำ (ห้ามชนกัน)

// สัดส่วนความกว้าง "วัตถุจริง" ต่อ canvas ของแต่ละไฟล์
// (วัดจาก alpha bbox จริง เทียบขนาดไฟล์ packaging/preview/1-5.png)
const VIS_FRAC = [0.808, 0.818, 0.896, 0.811, 0.820];
const MAX_DISPLAY_H = 48; // px — พอดีใน header ไม่เพิ่มความสูง header

function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

// ขนาดบนจอ + ตำแหน่งซ้าย: zoom เดียวกันทุกชิ้น (คง visual scale เดิม)
// แล้ววางศูนย์กลางวัตถุแบบห่างเท่า ๆ กันเต็มความกว้างโซนกลาง
function computeLayout(centerW) {
  const zoom0 = MAX_DISPLAY_H / Math.max(...NATURAL.map((n) => n[1]));
  let dims = NATURAL.map(([w, h]) => ({
    w: Math.max(1, Math.round(w * zoom0)),
    h: Math.max(1, Math.round(h * zoom0)),
  }));

  // Safety เฉพาะจอแคบมาก: ถ้าผลรวมวัตถุ+ช่องไฟ+margin ไม่พอ ค่อยย่อทั้งชุด
  const visSum = dims.reduce((s, d, i) => s + d.w * VIS_FRAC[i], 0);
  const needed = visSum + (ASSETS.length - 1) * MIN_GAP + 2 * SIDE_MARGIN;
  if (centerW > 0 && needed > centerW) {
    const k = Math.max(
      0.5,
      (centerW - 2 * SIDE_MARGIN - (ASSETS.length - 1) * MIN_GAP) / visSum
    );
    dims = dims.map((d) => ({
      w: Math.max(1, Math.round(d.w * k)),
      h: Math.max(1, Math.round(d.h * k)),
    }));
  }

  // ศูนย์กลางวัตถุเว้นระยะเท่ากัน: จาก (margin + ครึ่งกว้างวัตถุแรก)
  // ถึง (W - margin - ครึ่งกว้างวัตถุสุดท้าย) - ขอบวัตถุห่างขอบพื้นที่เท่ากัน
  // (คำนวณจากความกว้าง "วัตถุจริง" ไม่ใช่ canvas: visW = canvasW * VIS_FRAC[i])
  const halfVis = dims.map((d, i) => (d.w * VIS_FRAC[i]) / 2);
  const n = dims.length;
  const lefts = dims.map(() => 0);
  if (centerW > 0) {
    const c0 = SIDE_MARGIN + halfVis[0];
    const cLast = centerW - SIDE_MARGIN - halfVis[n - 1];
    const step = (cLast - c0) / (n - 1);
    for (let i = 0; i < n; i++) {
      lefts[i] = c0 + step * i - dims[i].w / 2; // ซ้าย canvas = center - ครึ่ง canvas
    }
  }
  return { dims, lefts };
}

export default function MobileHeaderPackaging() {
  // Desktop (≥761px) → null ตั้งแต่ render แรก: ไม่มี DOM / ไม่โหลดรูป / ไม่มี animation
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 760px)').matches
  );
  const [layout, setLayout] = useState(null);
  const centerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // วัดความกว้างโซนกลางจริง → คำนวณ spacing แบบเท่ากัน (fit ทุก viewport + resize)
  useEffect(() => {
    if (!isMobile) return undefined;
    const fit = () => {
      const w = centerRef.current ? centerRef.current.clientWidth : 0;
      setLayout(computeLayout(w));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [isMobile]);
  // One-shot spring engine — พฤติกรรมเดียวกับ dev/src/preview/AnimationPreview.jsx
  useEffect(() => {
    if (!isMobile) return undefined;
    const reduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const items = itemRefs.current.map((el, i) => ({
      el,
      y0: ITEM_SPEC[i].y0,
      r0: ITEM_SPEC[i].r0,
      k: ITEM_SPEC[i].k,
      zeta: ITEM_SPEC[i].zeta,
      delay: i * STAGGER,
      y: 0,
      vy: 0,
      r: 0,
      vr: 0,
      done: false,
    }));

    let raf = null;
    let last = 0;
    let startedAt = 0;

    const apply = (it) => {
      const g = clamp(1 - it.y / it.y0, 0, 1);
      it.el.style.transform =
        'translateY(' + it.y.toFixed(2) + 'px)' +
        ' rotate(' + it.r.toFixed(2) + 'deg)' +
        ' scale(' + clamp(1 - 0.4 * (it.y / it.y0), 0.55, 1.06).toFixed(3) + ')';
      it.el.style.opacity = clamp(g * 1.7, 0, 1).toFixed(3);
    };

    const settle = (it) => {
      it.y = 0; it.vy = 0; it.r = 0; it.vr = 0; it.done = true;
      it.el.style.transform = 'translateY(0px) rotate(0deg) scale(1)';
      it.el.style.opacity = '1';
    };

    const reset = () => {
      items.forEach((it) => {
        it.y = it.y0; it.vy = 0; it.r = it.r0; it.vr = 0; it.done = false;
        apply(it);
      });
    };

    const frame = (now) => {
      if (!last) last = now;
      const dt = Math.min(now - last, 34) / 1000;
      last = now;
      let allDone = true;

      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it.done) continue;
        if (now - startedAt < it.delay) { allDone = false; continue; }

        const c = 2 * Math.sqrt(it.k) * it.zeta; // damping → overshoot เบา ๆ + wobble
        for (let n = 0; n < 2; n++) {            // semi-implicit Euler x2 = เสถียร
          const h = dt / 2;
          it.vy += (-it.k * it.y - c * it.vy) * h;                  // accel → decel
          it.y += it.vy * h;
          it.vr += (-(it.k * 0.6) * it.r - (c * 0.85) * it.vr) * h; // tilt swing
          it.r += it.vr * h;
        }
        apply(it);

        if (
          Math.abs(it.y) < 0.12 &&
          Math.abs(it.vy) < 1.5 &&
          Math.abs(it.r) < 0.04 &&
          Math.abs(it.vr) < 0.8
        ) {
          settle(it);
        } else {
          allDone = false;
        }
      }

      if (!allDone) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = null; // ONE-SHOT: จบแล้วหยุดสมบูรณ์ — ไม่มี loop ค้าง
      }
    };

    // เล่นครั้งเดียวเมื่อ header โหลด (มือถือเท่านั้น)
    const timer = setTimeout(() => {
      if (reduced) {
        // prefers-reduced-motion: ข้าม animation → ตำแหน่งสุดท้ายทันที
        items.forEach(settle);
        return;
      }
      startedAt = performance.now();
      last = 0;
      reset();
      raf = requestAnimationFrame(frame);
    }, 400);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div className="ph-center" ref={centerRef} aria-hidden="true">
      <div className="ph-strip">
        {ASSETS.map((src, i) => (
          <div
            key={src}
            className="ph-item"
            ref={(el) => { itemRefs.current[i] = el; }}
            style={{
              '--ph-y0': ITEM_SPEC[i].y0 + 'px',
              '--ph-r0': ITEM_SPEC[i].r0 + 'deg',
              width: layout ? layout.dims[i].w : 0,
              height: layout ? layout.dims[i].h : 0,
              left: layout ? layout.lefts[i] + 'px' : 0,
            }}
          >
            <img
              src={src}
              alt=""
              width={layout ? layout.dims[i].w : undefined}
              height={layout ? layout.dims[i].h : undefined}
              loading="eager"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}