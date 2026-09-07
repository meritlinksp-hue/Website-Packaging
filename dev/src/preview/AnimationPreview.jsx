import { useEffect, useRef, useState } from 'react';
import './animation-preview.css';

/* ============================================================
 * ISOLATED PREVIEW — /animation-preview
 * จำลอง Mobile Header: [ LOGO ][ PACKAGING ANIMATION ][ MENU ]
 * • ใช้เฉพาะหน้า preview — ไม่แตะ Header.jsx / Home / สไตล์จริง
 * • One-shot animation: เล่นครั้งเดียว จบแล้วหยุดสมบูรณ์ (ไม่ loop,
 *   ไม่ marquee, ไม่ setInterval — rAF ถูกยกเลิกเมื่อเล่นจบ)
 * • Assets: /images/packaging/preview/1..5.png (normalize แยกโฟลเดอร์)
 * ============================================================ */

const ASSETS = [
  '/images/packaging/preview/1.png',
  '/images/packaging/preview/2.png',
  '/images/packaging/preview/3.png',
  '/images/packaging/preview/4.png',
  '/images/packaging/preview/5.png',
];

// ขนาดไฟล์จริง (px) หลัง normalize — ใช้คำนวณ display size zoom เดียวกัน
const NATURAL = [
  [148, 347],
  [147, 365],
  [216, 198],
  [113, 385],
  [138, 392],
];

// สเปริงต่อชิ้น: ระยะตก/มุมเอียง/ความแข็ง/ค่าหน่วง ต่างกันเล็กน้อยให้เป็นธรรมชาติ
const ITEM_SPEC = [
  { y0: 58, r0: -7, k: 130, zeta: 0.54 },
  { y0: 66, r0: 5.5, k: 148, zeta: 0.5 },
  { y0: 54, r0: -5, k: 122, zeta: 0.57 },
  { y0: 72, r0: 6.5, k: 157, zeta: 0.52 },
  { y0: 62, r0: -6, k: 139, zeta: 0.55 },
];

const STAGGER = 300; // ms (virtual) ระหว่างชิ้น
const MAX_DISPLAY_H = 56; // ความสูงสูงสุดบนจอ (px) — พอดีใน header ไม่บวม header
const SPEEDS = [0.5, 0.75, 1];

function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

export default function AnimationPreview() {
  const itemRefs = useRef([]);
  const engineRef = useRef(null);
  const [phase, setPhase] = useState('idle'); // idle | playing | paused | done
  const [speed, setSpeedState] = useState(1);

  // display size: zoom เดียวกันทุกชิ้น (คง visual scale ที่ normalize ไว้)
  const zoom = MAX_DISPLAY_H / Math.max(...NATURAL.map((n) => n[1]));
  const dims = NATURAL.map(([w, h]) => ({
    w: Math.max(1, Math.round(w * zoom)),
    h: Math.max(1, Math.round(h * zoom)),
  }));

  useEffect(() => {
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
    let vt = 0; // เวลาเสมือน (ms) — scale ด้วย speed
    let speed = 1;
    let phaseLocal = 'idle';
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
      vt = 0;
      items.forEach((it) => {
        it.y = it.y0; it.vy = 0; it.r = it.r0; it.vr = 0; it.done = false;
        apply(it);
      });
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    const frame = (now) => {
      if (!last) last = now;
      const dtMs = Math.min(now - last, 34);
      last = now;
      vt += dtMs * speed;
      const dt = (dtMs * speed) / 1000;
      let allDone = true;

      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it.done) continue;
        if (vt < it.delay) { allDone = false; continue; }

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
        raf = null; // ONE-SHOT: จบแล้วหยุดสมบูรณ์ ไม่มี loop ถาวร
        phaseLocal = 'done';
        setPhase('done');
      }
    };

    const play = () => {
      if (phaseLocal === 'playing') return;
      if (phaseLocal === 'idle' || phaseLocal === 'done') reset();
      last = 0;
      phaseLocal = 'playing';
      setPhase('playing');
      raf = requestAnimationFrame(frame);
    };

    const pause = () => {
      if (phaseLocal !== 'playing') return;
      stop();
      phaseLocal = 'paused';
      setPhase('paused');
    };

    const finishNow = () => { // reduced-motion: แสดงตำแหน่งสุดท้ายทันที
      stop();
      items.forEach(settle);
      phaseLocal = 'done';
      setPhase('done');
    };

    engineRef.current = {
      play,
      pause,
      replay: () => {
        stop(); reset();
        phaseLocal = 'playing'; setPhase('playing');
        raf = requestAnimationFrame(frame);
      },
      setSpeed: (s) => { speed = s; },
    };

    // เล่นครั้งเดียวเมื่อเข้าหน้า (หรือโชว์สถานะสุดท้ายถ้า reduce motion)
    const timer = setTimeout(() => {
      if (reduced) finishNow();
      else play();
    }, 350);

    return () => {
      stop();
      clearTimeout(timer);
    };
  }, []);

  const engine = engineRef.current;
  return (
    <div className="ap-page">
      <p className="ap-note">
        <strong>Packaging Animation Preview</strong> — จำลอง Mobile Header (≤760px):
        [ LOGO ][ PACKAGING ANIMATION ][ MENU ] · หน้านี้เป็น prototype แยกจากเว็บไซต์จริง
        (Header.jsx / Home / สไตล์ production ไม่ถูกแตะ)
      </p>

      <div className="ap-phone">
        <div className="ap-screen">
          <div className="ap-statusbar">
            <span>9:41</span>
            <span>●●●●○ ⌁ ▮</span>
          </div>
          <div className="ap-notch" />

          {/* Header จำลอง — โครงสร้าง/สัดส่วนตรงตาม Header มือถือจริง */}
          <div className="ap-header">
            <a className="ap-brand" href="#/" aria-label="Nirin Packaging">
              <img src="/images/nirin-logo.avif" alt="Nirin Packaging" />
            </a>

            {/* โซนกลาง: overflow hidden → ไม่ทับ logo/hamburger ไม่ล้นแนวนอน */}
            <div className="ap-center">
              <div className="ap-strip">
                {ASSETS.map((src, i) => (
                  <div
                    key={src}
                    className="ap-item"
                    ref={(el) => { itemRefs.current[i] = el; }}
                    style={{
                      '--y0': ITEM_SPEC[i].y0 + 'px',
                      '--r0': ITEM_SPEC[i].r0 + 'deg',
                      width: dims[i].w,
                    }}
                  >
                    <img
                      src={src}
                      alt={'Packaging ' + (i + 1)}
                      width={dims[i].w}
                      height={dims[i].h}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button type="button" className="ap-menu" aria-label="เปิดเมนู">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Controls — เฉพาะหน้า preview เท่านั้น */}
      <div className="ap-controls">
        <button
          type="button"
          className="ap-btn"
          disabled={!engine || phase === 'playing'}
          onClick={() => engine && engine.play()}
        >
          ▶ PLAY
        </button>
        <button
          type="button"
          className="ap-btn"
          disabled={!engine || phase === 'playing'}
          onClick={() =>
            engine && (phase === 'paused' ? engine.play() : engine.replay())
          }
        >
          ⟲ REPLAY
        </button>
        <button
          type="button"
          className="ap-btn"
          disabled={!engine || (phase !== 'playing' && phase !== 'paused')}
          onClick={() => engine && engine.pause()}
        >
          {phase === 'paused' ? '▶ RESUME' : '⏸ PAUSE'}
        </button>
        <span className="ap-speed-label">SPEED</span>
        {SPEEDS.map((s) => (
          <button
            key={s}
            type="button"
            className={'ap-btn' + (speed === s ? ' is-active' : '')}
            onClick={() => {
              setSpeedState(s);
              if (engine) engine.setSpeed(s);
            }}
          >
            {s}x
          </button>
        ))}
      </div>

      <p className="ap-note">
        One-shot spring animation — stagger 300ms · overshoot ~10–15% · tilt ±5–7° ·
        เล่นครั้งเดียวแล้วหยุดนิ่ง (ไม่ loop / ไม่ marquee) · เคารพ
        prefers-reduced-motion · ภาพ: <code>packaging/preview/1–5.png</code>
        (normalize จาก <code>packaging/originals/</code> โดยไม่แก้ไฟล์ต้นฉบับ)
      </p>
    </div>
  );
}