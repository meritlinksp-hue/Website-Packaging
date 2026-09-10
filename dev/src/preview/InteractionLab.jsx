import { useState, useEffect, useRef } from 'react';
import './interaction-lab.css';

function DemoCard({ number, title, description, children }) {
  const [enabled, setEnabled] = useState(true);
  const [key, setKey] = useState(0);
  const [speed, setSpeed] = useState(1);
  const replay = () => setKey(k => k + 1);
  const reset = () => { setKey(k => k + 1); setEnabled(true); setSpeed(1); };
  return (
    <div className="lab-demo-card" style={{ '--demo-speed': speed }}>
      <div className="lab-demo-header">
        <span className="lab-demo-number">{number.toString().padStart(2, '0')}</span>
        <h3 className="lab-demo-title">{title}</h3>
      </div>
      <p className="lab-demo-desc">{description}</p>
      <div className="lab-demo-stage" key={key}>
        {enabled ? children : <div className="lab-disabled">Disabled</div>}
      </div>
      <div className="lab-demo-controls">
        <button className={`lab-btn ${enabled ? 'lab-btn--active' : ''}`} onClick={() => { setEnabled(!enabled); setKey(k => k + 1); }}>
          {enabled ? 'Disable' : 'Enable'}
        </button>
        <button className="lab-btn" onClick={replay}>Replay</button>
        <button className="lab-btn" onClick={reset}>Reset</button>
        <div className="lab-speed-group">
          <span>Speed:</span>
          {[0.5, 0.75, 1, 1.25].map(s => (
            <button key={s} className={`lab-btn lab-btn--speed ${speed === s ? 'lab-btn--active' : ''}`} onClick={() => { setSpeed(s); setKey(k => k + 1); }}>
              {s}x
            </button>
          ))}
        </div>
      </div>
      <div className="lab-badge">NOT YET IN PRODUCTION</div>
    </div>
  );
}

function Demo1() {
  const [page, setPage] = useState(0);
  return (
    <div className="lab-page-transition">
      <div className={`lab-pt-page ${page === 0 ? 'lab-pt-active' : 'lab-pt-exit'}`}>
        <div className="lab-pt-card">Page A</div>
      </div>
      <div className={`lab-pt-page ${page === 1 ? 'lab-pt-active' : 'lab-pt-enter'}`}>
        <div className="lab-pt-card">Page B</div>
      </div>
      <button className="lab-pt-btn" onClick={() => setPage(p => p === 0 ? 1 : 0)}>Transition</button>
    </div>
  );
}

function Demo2() {
  return (
    <div className="lab-card-press-demo">
      <div className="lab-product-card lab-card-press">
        <div className="lab-product-image" />
        <div className="lab-product-info">
          <span className="lab-product-name">Product Card</span>
          <span className="lab-product-price">Tap me</span>
        </div>
      </div>
    </div>
  );
}

function Demo3({ parentKey }) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setRevealed(false); const t = setTimeout(() => setRevealed(true), 100); return () => clearTimeout(t); }, [parentKey]);
  return (
    <div className="lab-image-reveal-demo">
      <div className={`lab-reveal-image ${revealed ? 'lab-reveal-visible' : ''}`} />
      <span className="lab-reveal-label">{revealed ? 'Sharp' : 'Loading...'}</span>
    </div>
  );
}

function Demo4() {
  const chips = ['All', 'Bottles', 'Jars', 'Tubes'];
  const [active, setActive] = useState(0);
  return (
    <div className="lab-chip-demo">
      {chips.map((chip, i) => (
        <button key={chip} className={`lab-chip ${active === i ? 'lab-chip--active' : ''}`} onClick={() => setActive(i)}>
          {chip}
        </button>
      ))}
    </div>
  );
}

function Demo5({ parentKey }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [parentKey]);
  return (
    <div className="lab-scroll-reveal-demo">
      <div className={`lab-reveal-section ${visible ? 'lab-reveal-visible' : ''}`} ref={ref}>
        <span>Scroll Reveal Section</span>
        <p>Enters viewport → fades up</p>
      </div>
    </div>
  );
}

function Demo6() {
  return (
    <div className="lab-cta-demo">
      <button className="lab-cta-button lab-cta-tactile">Contact Us</button>
    </div>
  );
}

function Demo7() {
  return (
    <div className="lab-social-dock-demo">
      <div className="lab-social-dock">
        <a className="lab-social-icon" href="#" aria-label="Facebook">f</a>
        <a className="lab-social-icon" href="#" aria-label="TikTok">t</a>
      </div>
      <span className="lab-dock-label">Floating Dock</span>
    </div>
  );
}

function Demo8({ parentKey }) {
  const [hidden, setHidden] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => { setHidden(false); }, [parentKey]);
  const handleScroll = () => { if (scrollRef.current) setHidden(scrollRef.current.scrollTop > 20); };
  return (
    <div className="lab-scroll-social-demo">
      <div className="lab-scroll-area" ref={scrollRef} onScroll={handleScroll}>
        <div className="lab-scroll-content"><p>Scroll down</p><p style={{ marginTop: '200px' }}>Icons hide</p></div>
      </div>
      <div className={`lab-scroll-icons ${hidden ? 'lab-scroll-icons--hidden' : ''}`}>
        <span className="lab-scroll-icon">f</span>
        <span className="lab-scroll-icon">t</span>
      </div>
    </div>
  );
}

function Demo9({ parentKey }) {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => { setScrolled(false); }, [parentKey]);
  const handleScroll = () => { if (scrollRef.current) setScrolled(scrollRef.current.scrollTop > 30); };
  return (
    <div className="lab-scroll-header-demo">
      <div className={`lab-mini-header ${scrolled ? 'lab-header--reduced' : ''}`}>Nirin Packaging</div>
      <div className="lab-scroll-area" ref={scrollRef} onScroll={handleScroll}>
        <div className="lab-scroll-content"><p>Scroll to reduce header</p><p style={{ marginTop: '300px' }}>Keep going...</p></div>
      </div>
    </div>
  );
}

function Demo10({ parentKey }) {
  const [offset, setOffset] = useState(0);
  const scrollRef = useRef(null);
  useEffect(() => { setOffset(0); }, [parentKey]);
  const handleScroll = () => { if (scrollRef.current) setOffset(scrollRef.current.scrollTop * 0.15); };
  return (
    <div className="lab-parallax-demo">
      <div className="lab-parallax-hero" ref={scrollRef} onScroll={handleScroll}>
        <div className="lab-parallax-image" style={{ transform: `translateY(${offset}px)` }} />
        <div className="lab-parallax-content">Hero</div>
      </div>
    </div>
  );
}

function Demo11() {
  const [tilted, setTilted] = useState(false);
  return (
    <div className="lab-tilt-demo">
      <div className={`lab-tilt-image ${tilted ? 'lab-tilted' : ''}`} onPointerDown={() => setTilted(true)} onPointerUp={() => setTilted(false)} onPointerLeave={() => setTilted(false)} />
      <span className="lab-tilt-label">Touch & hold</span>
    </div>
  );
}

function Demo12() {
  const [zoomed, setZoomed] = useState(false);
  return (
    <div className="lab-zoom-demo">
      <div className={`lab-zoom-image ${zoomed ? 'lab-zoomed' : ''}`} onPointerDown={() => setZoomed(true)} onPointerUp={() => setZoomed(false)} onPointerLeave={() => setZoomed(false)} />
      <span className="lab-zoom-label">Touch & hold</span>
    </div>
  );
}

function Demo13() {
  const chips = ['All', 'Bottles', 'Jars', 'Tubes', 'Pumps', 'Boxes'];
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const chipRefs = useRef([]);
  const handleChipClick = (i) => {
    setActive(i);
    const container = containerRef.current;
    const chip = chipRefs.current[i];
    if (container && chip) {
      const containerRect = container.getBoundingClientRect();
      const chipRect = chip.getBoundingClientRect();
      const scrollOffset = chipRect.left - containerRect.left - (containerRect.width / 2) + (chipRect.width / 2);
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };
  return (
    <div className="lab-autocenter-demo">
      <div className="lab-chip-scroll" ref={containerRef}>
        {chips.map((chip, i) => (
          <button key={chip} ref={(el) => (chipRefs.current[i] = el)} className={`lab-chip ${active === i ? 'lab-chip--active' : ''}`} onClick={() => handleChipClick(i)}>
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

function Demo14() {
  const chips = ['All', 'Bottles', 'Jars', 'Tubes'];
  const [active, setActive] = useState(0);
  const chipRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  useEffect(() => {
    const chip = chipRefs.current[active];
    if (chip) setIndicatorStyle({ left: chip.offsetLeft, width: chip.offsetWidth });
  }, [active]);
  return (
    <div className="lab-indicator-demo">
      <div className="lab-indicator-chips">
        {chips.map((chip, i) => (
          <button key={chip} ref={(el) => (chipRefs.current[i] = el)} className={`lab-chip ${active === i ? 'lab-chip--active' : ''}`} onClick={() => setActive(i)}>
            {chip}
          </button>
        ))}
        <div className="lab-indicator-bar" style={indicatorStyle} />
      </div>
    </div>
  );
}

function Demo15({ parentKey }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [parentKey]);
  return (
    <div className="lab-stagger-demo" ref={ref}>
      <div className="lab-stagger-grid">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`lab-stagger-card ${visible ? 'lab-stagger-visible' : ''}`} style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="lab-stagger-image" />
            <span>Product {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Demo16() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lab-bottomsheet-demo">
      <button className="lab-cta-button" onClick={() => setOpen(true)}>View Product</button>
      <div className={`lab-sheet-overlay ${open ? 'lab-sheet--open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`lab-bottom-sheet ${open ? 'lab-sheet--open' : ''}`}>
        <div className="lab-sheet-handle" />
        <div className="lab-sheet-image" />
        <h4 className="lab-sheet-title">Premium Bottle</h4>
        <p className="lab-sheet-desc">High-quality packaging solution.</p>
        <button className="lab-cta-button" onClick={() => setOpen(false)}>Close</button>
      </div>
    </div>
  );
}

function Demo17() {
  return (
    <div className="lab-breathe-demo">
      <button className="lab-cta-button lab-breathe">Explore Now</button>
      <span className="lab-breathe-label">Subtle breathing</span>
    </div>
  );
}

function Demo18() {
  const [active, setActive] = useState(false);
  return (
    <div className="lab-shadow-demo">
      <div className={`lab-shadow-card ${active ? 'lab-shadow-active' : ''}`} onPointerDown={() => setActive(true)} onPointerUp={() => setActive(false)} onPointerLeave={() => setActive(false)}>
        <div className="lab-shadow-image" />
        <span>Touch for shadow</span>
      </div>
    </div>
  );
}

function Demo19({ parentKey }) {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef(null);
  useEffect(() => { setProgress(0); }, [parentKey]);
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setProgress(scrollTop / (scrollHeight - clientHeight));
    }
  };
  return (
    <div className="lab-progress-demo">
      <div className="lab-progress-bar" style={{ transform: `scaleX(${progress})` }} />
      <div className="lab-scroll-area" ref={scrollRef} onScroll={handleScroll}>
        <div className="lab-scroll-content"><p>Scroll for progress</p><p style={{ marginTop: '300px' }}>Keep going...</p></div>
      </div>
    </div>
  );
}

function Demo20({ parentKey }) {
  const ref = useRef(null);
  const [swept, setSwept] = useState(false);
  useEffect(() => {
    setSwept(false);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSwept(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [parentKey]);
  return (
    <div className="lab-sweep-demo" ref={ref}>
      <div className={`lab-sweep-image ${swept ? 'lab-swept' : ''}`}>
        <div className="lab-sweep-light" />
      </div>
      <span className="lab-sweep-label">One-time sweep</span>
    </div>
  );
}

function RecommendedCombo() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [cardPressed, setCardPressed] = useState(null);
  const [chipActive, setChipActive] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="lab-combo-demo" ref={ref}>
      <h4 className="lab-combo-title">Recommended Combination</h4>
      <div className="lab-combo-chips">
        {['All', 'Bottles', 'Jars', 'Tubes'].map((chip, i) => (
          <button key={chip} className={`lab-chip ${chipActive === i ? 'lab-chip--active' : ''}`} onClick={() => setChipActive(i)}>
            {chip}
          </button>
        ))}
      </div>
      <div className="lab-combo-grid">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`lab-product-card lab-card-press lab-stagger-card ${visible ? 'lab-stagger-visible' : ''} ${cardPressed === i ? 'lab-card-pressed' : ''}`} style={{ transitionDelay: `${i * 60}ms` }} onPointerDown={() => setCardPressed(i)} onPointerUp={() => setCardPressed(null)} onPointerLeave={() => setCardPressed(null)}>
            <div className="lab-product-image" />
            <span className="lab-product-name">Product {i + 1}</span>
          </div>
        ))}
      </div>
      <div className="lab-combo-social">
        <a className="lab-social-icon" href="#" aria-label="Facebook">f</a>
        <a className="lab-social-icon" href="#" aria-label="TikTok">t</a>
      </div>
    </div>
  );
}

function InteractionLab() {
  const demos = [
    { Comp: Demo1, title: 'Premium Page Transition', desc: 'Fade + subtle slide between pages (250-400ms)' },
    { Comp: Demo2, title: 'Product Card Press', desc: 'Scale 0.97-0.985 with shadow depth response' },
    { Comp: Demo3, title: 'Product Image Reveal', desc: 'Soft blur to sharp + opacity 0 to 1 (200-300ms)' },
    { Comp: Demo4, title: 'Category Chip Motion', desc: 'Scale + color shift + indicator on selection' },
    { Comp: Demo5, title: 'Smart Scroll Reveal', desc: 'opacity 0 + translateY(12-16px) to visible' },
    { Comp: Demo6, title: 'LINE CTA Tactile Press', desc: 'Scale 0.97 + translateY(1px) + depth' },
    { Comp: Demo7, title: 'Floating Social Dock', desc: '42-46px circular buttons, minimal spacing' },
    { Comp: Demo8, title: 'Scroll-Aware Social Icons', desc: 'Hide on scroll down, return on stop' },
    { Comp: Demo9, title: 'Scroll-Aware Header', desc: 'Subtle prominence reduction on scroll' },
    { Comp: Demo10, title: 'Subtle Hero Parallax', desc: '3-6px movement relative to scroll' },
    { Comp: Demo11, title: 'Product Image Tilt', desc: '1-2 degree rotation on touch' },
    { Comp: Demo12, title: 'Image Depth Zoom', desc: 'Scale 1.02-1.04 with shadow response' },
    { Comp: Demo13, title: 'Category Auto-Center', desc: 'Selected chip scrolls to viewport center' },
    { Comp: Demo14, title: 'Active Category Indicator', desc: 'Sliding underline/pill indicator' },
    { Comp: Demo15, title: 'Product Grid Stagger', desc: 'Sequential 50-80ms card entrance' },
    { Comp: Demo16, title: 'Bottom Sheet Product Detail', desc: 'translateY(100%) to 0, 300-450ms' },
    { Comp: Demo17, title: 'CTA Micro-Breathe', desc: 'Subtle 1.00 to 1.03 to 1.00 scale pulse' },
    { Comp: Demo18, title: 'Edge-Follow Shadow', desc: 'Shadow responds to touch position' },
    { Comp: Demo19, title: 'Scroll Progress Line', desc: 'Thin CI-colored progress indicator' },
    { Comp: Demo20, title: 'Premium Image Light Sweep', desc: 'One-time subtle light sweep on enter' },
  ];
  return (
    <div className="lab-container">
      <header className="lab-header">
        <h1>Interaction Lab</h1>
        <p>20 Premium Mobile Micro-Interaction Previews</p>
        <span className="lab-header-badge">PREVIEW ONLY</span>
      </header>
      <div className="lab-demos">
        {demos.map(({ Comp, title, description }, i) => (
          <DemoCard key={i} number={i + 1} title={title} description={description}>
            <Comp parentKey={i} />
          </DemoCard>
        ))}
      </div>
      <div className="lab-combo-section">
        <DemoCard number={21} title="Recommended Combination" desc="Combined: Card Press + Chip Motion + Image Reveal + Grid Stagger + CTA Press + Social Dock">
          <RecommendedCombo />
        </DemoCard>
      </div>
      <footer className="lab-footer">
        <p>Nirin Packaging - Interaction Lab Preview</p>
        <p className="lab-footer-sub">All effects are experimental. None are active on the live site.</p>
      </footer>
    </div>
  );
}

export default InteractionLab;