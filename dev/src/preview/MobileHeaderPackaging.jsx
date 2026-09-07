/* =============================================================
 * TEMPORARY PACKAGING + BRAND MESSAGE — ONE CONTINUOUS STREAM (MOBILE ONLY)
 * =============================================================
 * LOCALHOST EXPERIMENT — แสดงเฉพาะจอ ≤760px เท่านั้น
 * แนวคิด: ขวด 5 ชิ้น + ข้อความแบรนด์ อยู่ใน "รางเดียว" (track) เดินทางไปด้วยกัน
 *   • PHASE 1 ขวดเข้าทีละชิ้นด้วยฟีลสปริงเดิม (one-shot เฉพาะตอนโหลดครั้งแรก)
 *   • PHASE 2 ตั้ง → PHASE 3 รางเลื่อนซ้ายด้วยความเร็วคงที่ (linear)
 *     ขวดไหลออกซ้ายเข้าใกล้ logo → ข้อความไหลตามหลัง (nowrap บรรทัดเดียว
 *     ไม่มีกล่อง/พื้นหลัง) → ขวดชุดถัดไปไหลตามหลังข้อความ → วนซ้ำ
 *   • Loop: track มีเนื้อหา 2 สำเนาเหมือนเป๊ะ + translateX 0 → -50% linear
 *     infinite → จุดต่อมองไม่เห็น ( seamless ไม่ใช่ ticker กระโดด )
 *   • ความเร็วเดียวกันทั้งราง — ขวดและข้อความขยับพร้อมกัน ไม่มี overlap
 * • CSS keyframes ล้วน (transform/opacity) — ไม่มี rAF / setInterval
 * • เคารพ prefers-reduced-motion (โชว์ข้อความนิ่ง) · Desktop render null
 *
 * ROLLBACK (ลบทิ้ง 3 จุด):
 *   1. Header.jsx  → ลบ import + <PackagingHeaderAnimation /> ที่มีคอมเมนต์
 *                     "TEMPORARY PACKAGING ANIMATION TEST" กำกับ
 *   2. ไฟล์นี้      → MobileHeaderPackaging.jsx
 *   3. ไฟล์ CSS    → mobile-header-packaging.css
 * (index.css และส่วนอื่นของ Header เดิมไม่ถูกแก้เพิ่ม)
 * ============================================================ */

import { useEffect, useState } from 'react';
import './mobile-header-packaging.css';

const ASSETS = [
  '/images/packaging/preview/bottle-new01-preview.png',
  '/images/packaging/preview/bottle-new02-preview.png',
  '/images/packaging/preview/bottle-new03-preview.png',
  '/images/packaging/preview/bottle-new04-preview.png',
  '/images/packaging/preview/bottle-new05-preview.png',
];

// ขนาดไฟล์จริง (px) ของ packaging/preview/bottle-new01–05-preview.png
// (ชุดใหม่ — normalize จาก packaging/originals/bottle-new01–05.png ด้วยวิธีเดิม:
//  trim alpha bbox → scale เดียวกันทั้งชุด (365/873) → padding โปร่งใส 12px รอบด้าน
//  ชุดเก่า preview/1–5.png ยังอยู่ครบ ไม่ถูกลบ/แก้ — ใช้ rollback ได้ทันที)
const NATURAL = [
  [158, 356],
  [186, 375],
  [150, 386],
  [160, 389],
  [298, 252],
];

// ท่าเริ่มต้นต่อชิ้น (ระยะตก + มุมเอียง) — ส่งเข้า keyframes ผ่าน CSS var
// overshoot/bounce/settle อยู่ใน keyframes (ph-item-enter) — สัดส่วนเดิม ~8–9% ≈ 4–5px
const ITEM_SPEC = [
  { y0: 48, r0: -6 },
  { y0: 54, r0: 5 },
  { y0: 46, r0: -4.5 },
  { y0: 58, r0: 5.5 },
  { y0: 52, r0: -5.5 },
];

const STAGGER = 300;     // ms — เข้ามาทีละชิ้น (คงเดิม)
const START_DELAY = 400; // ms — หน่วงเล็กน้อยหลัง header โหลด
const MESSAGE = 'รับผลิตแพ็คเกจจิ้ง ครบวงจร'; // ข้อความแบรนด์ — ห้ามแก้ถ้อยคำ (บรรทัดเดียว)

// ขนาดแสดงผล (px) — zoom เดียวทั้งชุดคง visual scale เดิม
// (จอแคบ CSS จะคูณ --ph-zoom ให้เอง — ไม่ต้องวัด viewport ด้วย JS)
const MAX_DISPLAY_H = 48; // px — พอดีใน header ไม่เพิ่มความสูง header
const ZOOM_BASE = MAX_DISPLAY_H / Math.max(...NATURAL.map((n) => n[1]));
const DIMS = NATURAL.map(([w, h]) => ({
  w: Math.max(1, Math.round(w * ZOOM_BASE)),
  h: Math.max(1, Math.round(h * ZOOM_BASE)),
}));

export default function MobileHeaderPackaging() {
  // Desktop (≥761px) → null ตั้งแต่ render แรก: ไม่มี DOM / ไม่โหลดรูป / ไม่มี animation
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

  // รางเดียว (track) บรรจุเนื้อหา 2 สำเนาเหมือนกันเป๊ะ → keyframes เลื่อน
  // translateX 0 → -50% แล้ววนกลับ = สำเนา B ต่อจากสำเนา A พอดีทุกพิกเซล
  // (จุดต่อลูปมองไม่เห็น) · ขวดเข้าทีละชิ้นครั้งเดียวตอนโหลดแล้วไหลต่อเนื่อง
  return (
    <div className="ph-center" aria-hidden="true">
      <div className="ph-track">
        {[0, 1].map((copy) => (
          <div className="ph-seg" key={copy}>
            {ASSETS.map((src, i) => (
              <div
                key={src}
                className="ph-item"
                style={{
                  '--ph-y0': ITEM_SPEC[i].y0 + 'px',
                  '--ph-r0': ITEM_SPEC[i].r0 + 'deg',
                  width: `calc(${DIMS[i].w}px * var(--ph-zoom, 1))`,
                  height: `calc(${DIMS[i].h}px * var(--ph-zoom, 1))`,
                  /* PHASE 1: เข้าทีละชิ้น (one-shot ตอนโหลด — จากนั้นไหลต่อเนื่อง) */
                  animationDelay: START_DELAY + i * STAGGER + 'ms',
                }}
              >
                <img
                  src={src}
                  alt=""
                  width={DIMS[i].w}
                  height={DIMS[i].h}
                  loading="eager"
                  draggable="false"
                />
              </div>
            ))}
            {/* PHASE 3–4: ข้อความไหลตามหลังขวดในรางเดียวกัน — บรรทัดเดียว ไม่มีกล่อง */}
            <span className="ph-msg">
              <span className="ph-msg-text">{MESSAGE}</span>
            </span>
          </div>
        ))}
      </div>
      {/* prefers-reduced-motion: ข้อความนิ่งกลางโซนแทนลูป (ไม่มีกล่อง) */}
      <div className="ph-msg-static">
        <span className="ph-msg-text">{MESSAGE}</span>
      </div>
    </div>
  );
}