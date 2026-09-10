/* =====================================================================
 * LIVE CHAT PREVIEW — part 1/2 (state + helpers + render open)
 * See live-chat-preview.css + chatService.js. ROLLBACK: delete files.
 * ===================================================================== */

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  OPERATOR,
  getQuickReplies,
  getSimulatedDelay,
  getWelcomeMessages,
  simulateAgentReply,
} from '../services/chatService';
import './live-chat-preview.css';

const STORAGE_KEY = 'nirin-live-chat-preview-v1';
const QUICK_REPLIES = getQuickReplies();
const now = () => Date.now();
const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
const formatTime = (ts) =>
  new Date(ts).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
const withIds = (list) => list.map((m) => ({ id: m.id || uid(), ts: m.ts || now(), ...m }));

const loadStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.messages)) return null;
    return {
      conversationId: parsed.conversationId || uid(),
      messages: withIds(parsed.messages).slice(-100),
      category: parsed.category || null,
    };
  } catch {
    return null;
  }
};

const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

/* Reused Facebook "f" glyph — same artwork as the mobile social dock
 * (dev/public/images/social-icons/facebook.png): white f on FB blue. */
const FacebookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* Professional female operator avatar — lightweight inline SVG
 * (no photo asset in repo): friendly support woman, Nirin CI tones. */
const OperatorAvatar = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#f3e8f7" />
    <circle cx="20" cy="20" r="20" fill="url(#nidaGrad)" fillOpacity="0.35" />
    <defs>
      <linearGradient id="nidaGrad" x1="0" y1="0" x2="40" y2="40">
        <stop offset="0" stopColor="#6738a2" />
        <stop offset="1" stopColor="#ef5688" />
      </linearGradient>
    </defs>
    <path d="M20 6c-5.5 0-8.5 4-8.5 8.6 0 2.6 1.2 4.7 2.8 6.1-.9.4-2.1 1.2-2.6 2.7-.6 1.9-1 4.4-1.2 6.1-.1.9.6 1.5 1.4 1.5h16.2c.8 0 1.5-.6 1.4-1.5-.2-1.7-.6-4.2-1.2-6.1-.5-1.5-1.7-2.3-2.6-2.7 1.6-1.4 2.8-3.5 2.8-6.1C28.5 10 25.5 6 20 6z" fill="#5b3a7a" />
    <ellipse cx="20" cy="17.5" rx="6.2" ry="7" fill="#f6cfae" />
    <path d="M13.9 15.5c.2-4 2.6-6.3 6.1-6.3s5.9 2.3 6.1 6.3c.8-.3 1.4.2 1.3 1.2l-.4 2.2c-.1.9-1.1 1.3-1.8.8l-.9-.6c-.3-2.9-.2-5.6-1-7.4-1 1.6-2.9 2.3-4.6 2.3h-1.4c-1.7 0-3.6-.7-4.6-2.3-.8 1.8-.7 4.5-1 7.4l-.9.6c-.7.5-1.7.1-1.8-.8l-.4-2.2c-.1-1 .5-1.5 1.3-1.2z" fill="#5b3a7a" />
    <circle cx="17.6" cy="17.6" r="0.9" fill="#3a2350" />
    <circle cx="22.4" cy="17.6" r="0.9" fill="#3a2350" />
    <path d="M17.8 21.5c.6.7 1.4 1 2.2 1s1.6-.3 2.2-1c.3-.4.9 0 .6.5-.8 1.1-1.7 1.6-2.8 1.6s-2-0.5-2.8-1.6c-.3-.5.3-.9.6-.5z" fill="#a3546b" />
    <circle cx="16" cy="19.6" r="1.1" fill="#f0a08a" opacity="0.7" />
    <circle cx="24" cy="19.6" r="1.1" fill="#f0a08a" opacity="0.7" />
    <path d="M15.5 30.5c1.2-2.3 2.8-3.4 4.5-3.4s3.3 1.1 4.5 3.4c.4.8-.2 1.5-1 1.5h-7c-.8 0-1.4-.7-1-1.5z" fill="#ef5688" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const MinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
);

export default function LiveChatPreview() {
  const [status, setStatus] = useState('CLOSED');
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState('');
  const [category, setCategory] = useState(null);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const [showLead, setShowLead] = useState(false);
  const [lead, setLead] = useState({ name: '', company: '', product: '', qty: '' });
  const [leadSaved, setLeadSaved] = useState(false);
  const [unread, setUnread] = useState(0);
  const listRef = useRef(null);
  const stickRef = useRef(true);
  const statusRef = useRef(status);
  statusRef.current = status;
  const timerRef = useRef(null);

  useEffect(() => {
    const stored = loadStored();
    if (stored) {
      setConversationId(stored.conversationId);
      setMessages(stored.messages);
      setCategory(stored.category);
    } else {
      setConversationId(uid());
      setMessages(withIds(getWelcomeMessages()));
    }
  }, []);

  useEffect(() => {
    if (!conversationId) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ conversationId, messages: messages.slice(-100), category })
      );
    } catch { /* preview continues in memory */ }
  }, [conversationId, messages, category]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const scrollToBottom = useCallback((smooth = true) => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
  }, []);

  const handleScroll = () => {
    const el = listRef.current;
    if (!el) return;
    stickRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
  };

  useEffect(() => {
    if (stickRef.current && status === 'OPEN') scrollToBottom(false);
  }, [messages, typing, status, scrollToBottom]);

  const openChat = () => {
    setStatus('OPEN');
    setUnread(0);
    stickRef.current = true;
    requestAnimationFrame(() => scrollToBottom(false));
  };

  const deliverAgentReply = useCallback((userText) => {
    const replyText = simulateAgentReply(userText);
    timerRef.current = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: uid(), sender: 'agent', text: replyText, ts: now() }]);
      if (statusRef.current !== 'OPEN') setUnread((n) => n + 1);
    }, getSimulatedDelay(replyText));
  }, []);

  const sendText = useCallback((raw) => {
    const text = (raw || '').trim();
    if (!text || typing) return;
    const matched = QUICK_REPLIES.find((q) => text.includes(q));
    if (matched) setCategory(matched);
    setMessages((prev) => [...prev, { id: uid(), sender: 'me', text, ts: now() }]);
    setDraft('');
    setTyping(true);
    stickRef.current = true;
    deliverAgentReply(text);
  }, [typing, deliverAgentReply]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendText(draft);
    }
    if (e.key === 'Escape') setStatus((s) => (s === 'OPEN' ? 'MINIMIZED' : s));
  };

  const saveLead = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem(`${STORAGE_KEY}-lead`, JSON.stringify({ ...lead, ts: now() }));
    } catch { /* ignore */ }
    setLeadSaved(true);
    setMessages((prev) => [
      ...prev,
      {
        id: uid(),
        sender: 'agent',
        text: `ขอบคุณ${lead.name ? `คุณ${lead.name}` : 'ค่ะ'} นิดาได้รับรายละเอียดแล้ว จะรีบติดต่อกลับนะคะ`,
        ts: now(),
      },
    ]);
    setTimeout(() => {
      setShowLead(false);
      setLeadSaved(false);
    }, 1600);
  };

  const isOpen = status === 'OPEN';
  const stateLabel = typing ? 'TYPING' : messages.length <= 2 ? 'EMPTY' : 'READY';

  return (
    <div className="livechat-page" data-state={stateLabel.toLowerCase()}>
      <div className="livechat-stage">
        <p className="livechat-kicker">Live Chat Preview · Desktop</p>
        <h1 className="livechat-title">Nirin Packaging — Full Live Chat</h1>
        <p className="livechat-sub">
          ต้นแบบ UX Facebook-only สำหรับทดสอบก่อนเชื่อม Facebook จริง —
          กดปุ่มแชทมุมขวาล่างเพื่อเริ่มสนทนากับ{OPERATOR.name} (ข้อมูลเก็บในเบราว์เซอร์เท่านั้น)
        </p>
        <ul className="livechat-notes">
          <li>Enter = ส่ง · Shift+Enter = ขึ้นบรรทัดใหม่ · Esc = ย่อหน้าต่าง</li>
          <li>ลองพิมพ์ “สนใจขวดปั๊มค่ะ” → “5,000 ชิ้น” → “ขอราคาได้ไหม”</li>
        </ul>
      </div>

      {status !== 'OPEN' ? (
        <button
          type="button"
          className={status === 'MINIMIZED' ? 'livechat-fab livechat-fab--open' : 'livechat-fab'}
          aria-label="Open live chat"
          onClick={openChat}
        >
          {status === 'MINIMIZED' ? <CloseIcon /> : <ChatIcon />}
          {unread > 0 ? <span className="livechat-unread">{unread}</span> : null}
        </button>
      ) : null}

      {isOpen ? (
        <section className="livechat-window" role="dialog" aria-label="Nirin Packaging live chat" aria-modal="false">
          <header className="livechat-head">
            <span className="livechat-avatar livechat-avatar--op" aria-hidden="true"><OperatorAvatar /></span>
            <span className="livechat-id">
              <strong>NIRIN PACKAGING</strong>
              <small className="livechat-op">{OPERATOR.name} · NIRIN Support</small>
              <small className="livechat-channel"><i className="livechat-dot" /><span className="livechat-fb"><FacebookIcon /> Facebook · Online</span></small>
            </span>
            <span className="livechat-actions">
              <button type="button" aria-label="Minimize chat" title="ย่อ" onClick={() => setStatus('MINIMIZED')}>
                <MinIcon />
              </button>
              <button type="button" aria-label="Close live chat" title="ปิด" onClick={() => setStatus('CLOSED')}>
                <CloseIcon />
              </button>
            </span>
          </header>

          <div className="livechat-body" ref={listRef} onScroll={handleScroll} role="log" aria-live="polite" aria-label="Conversation">
            {messages.length === 0 ? (
              <p className="livechat-empty">เราพร้อมช่วยคุณเลือกแพ็คเกจจิ้ง</p>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`livechat-msg livechat-msg--${m.sender === 'me' ? 'me' : 'agent'}`}>
                  <p className="livechat-bubble">{m.text}</p>
                  <time className="livechat-time">{formatTime(m.ts)}</time>
                </div>
              ))
            )}
            {typing ? (
              <div className="livechat-msg livechat-msg--agent livechat-msg--typing">
                <span className="livechat-mini-avatar" aria-hidden="true"><OperatorAvatar /></span>
                <p className="livechat-bubble livechat-typing" aria-label={`${OPERATOR.name} is typing`}>
                  <span /><span /><span />
                </p>
              </div>
            ) : null}
          </div>

          <div className="livechat-quick" aria-label="Quick replies">
            {QUICK_REPLIES.map((q) => (
              <button key={q} type="button" className={category === q ? 'active' : ''} onClick={() => sendText(q)}>
                {q}
              </button>
            ))}
          </div>

          <form
            className="livechat-form"
            onSubmit={(e) => {
              e.preventDefault();
              sendText(draft);
            }}
          >
            <label className="visually-hidden" htmlFor="livechat-input">พิมพ์ข้อความ</label>
            <textarea
              id="livechat-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="พิมพ์ข้อความ… (Enter = ส่ง)"
              rows={1}
            />
            <button type="submit" aria-label="Send message" disabled={!draft.trim() || typing}>
              ส่ง
            </button>
          </form>

          <div className="livechat-foot">
            <button type="button" onClick={() => setShowLead((v) => !v)}>
              ส่งรายละเอียดให้ทีมงาน
            </button>
          </div>

          {showLead ? (
            <form className="livechat-lead" onSubmit={saveLead} aria-label="Contact details">
              <strong>ฝากรายละเอียด (เก็บในเครื่องเท่านั้น)</strong>
              <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="ชื่อ" aria-label="ชื่อ" />
              <input value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="บริษัท" aria-label="บริษัท" />
              <input value={lead.product} onChange={(e) => setLead({ ...lead, product: e.target.value })} placeholder="สินค้าที่สนใจ" aria-label="สินค้าที่สนใจ" />
              <input value={lead.qty} onChange={(e) => setLead({ ...lead, qty: e.target.value })} placeholder="จำนวนโดยประมาณ" aria-label="จำนวนโดยประมาณ" />
              <button type="submit">{leadSaved ? 'บันทึกแล้ว ✓' : 'บันทึก'}</button>
            </form>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

