/* =====================================================================
 * LIVE CHAT SERVICE — PREVIEW ONLY (localhost, do not commit / push)
 * ---------------------------------------------------------------------
 * Frontend-only simulated operator (คุณนิดา — feminine Thai). No AI /
 * LINE / Facebook API calls. Facebook channel only in this preview.
 *
 * FUTURE API CONTRACT (when a tiny backend exists, e.g. Cloudflare
 * Worker + one minimal endpoint):
 *
 *   POST /api/chat/message
 *   Request:  { "conversationId": "...", "message": "..." }
 *   Response: { "conversationId": "...",
 *               "message": { "sender": "agent", "text": "..." } }
 *
 * FUTURE CHANNEL DESIGN (not implemented):
 *   Website Chat -> Worker -> Channel adapter (Facebook Messenger only
 *   in this preview). Keep this module as the single seam:
 *   replace `simulateAgentReply` internals with a fetch() call,
 *   keep the exported function signatures unchanged.
 * ===================================================================== */

/* Single operator identity — Facebook-only preview. */
export const OPERATOR = {
  name: 'คุณนิดา',
  title: 'NIRIN Support · Facebook',
  channel: 'Facebook',
};

const QUICK_REPLIES = ['ขวดปั๊ม', 'กล่อง', 'ซอง', 'เซรั่ม', 'กระปุกครีม'];

const CATEGORY_INFO = {
  'ขวดปั๊ม': 'ขวดปั๊มมีหลายรูปแบบนะคะ ทั้งขวดปั๊มโลชั่นและขวดปั๊มสเปรย์ ขอทราบจำนวนที่ต้องการโดยประมาณได้ไหมคะ?',
  'กล่อง': 'กล่องมีหลายแบบค่ะ ทั้งกล่องจั่วปัง กล่องฝาเปิด และกล่องของขวัญ ขอทราบจำนวนโดยประมาณได้ไหมคะ?',
  'ซอง': 'ซองมีทั้งซองซิปล็อค ซองสแตนด์อัพ และซองฟอยล์ค่ะ ขอทราบจำนวนโดยประมาณได้ไหมคะ?',
  'เซรั่ม': 'ขวดเซรั่มมีทั้งแบบดรอปเปอร์และแบบปั๊มค่ะ ขอทราบจำนวนโดยประมาณได้ไหมคะ?',
  'กระปุกครีม': 'กระปุกครีมมีหลายขนาดและวัสดุค่ะ ขอทราบจำนวนโดยประมาณได้ไหมคะ?',
};

const FALLBACK_REPLIES = [
  'รับทราบค่ะ เดี๋ยวนิดาช่วยเช็กรูปแบบและราคาให้ได้นะคะ ขอทราบจำนวนโดยประมาณได้ไหมคะ?',
  'ได้เลยค่ะ รบกวนแจ้งจำนวนที่ต้องการคร่าว ๆ นิดาจะได้แนะนำรูปแบบที่คุ้มที่สุดให้ค่ะ',
  'ขอบคุณค่ะ หากสนใจ นิดาช่วยแนะนำวัสดุและขนาดที่เหมาะกับงบได้นะคะ ต้องการประมาณกี่ชิ้นคะ?',
];

let fallbackIndex = 0;

const containsQuantity = (text) => /\d/.test(text);

const findCategory = (text) =>
  Object.keys(CATEGORY_INFO).find((name) => text.includes(name));

export function getQuickReplies() {
  return [...QUICK_REPLIES];
}

export function getWelcomeMessages() {
  return [
    { sender: 'agent', text: 'สวัสดีค่ะ 👋 นิดาจาก NIRIN PACKAGING ยินดีให้บริการค่ะ' },
    {
      sender: 'agent',
      text: 'สนใจแพ็คเกจจิ้งประเภทไหน สามารถสอบถามได้เลยนะคะ เลือกหมวดด้านล่างได้เลยค่ะ',
    },
  ];
}

/* Simulated operator — keyword-based, frontend only, feminine Thai. */
export function simulateAgentReply(userText) {
  const text = (userText || '').trim();

  const category = findCategory(text);
  if (category) {
    return `ได้เลยค่ะ ${CATEGORY_INFO[category]}`;
  }

  if (containsQuantity(text)) {
    return `ได้เลยค่ะ สำหรับประมาณ ${text} เดี๋ยวนิดาช่วยแนะนำรูปแบบที่เหมาะสมให้ได้นะคะ รบกวนฝากชื่อและเบอร์โทรไว้ที่ "ส่งรายละเอียดให้ทีมงาน" ได้เลยค่ะ`;
  }

  if (/ราคา|ค่าใช้จ่าย|เท่าไหร่|เสนอราคา/.test(text)) {
    return 'เรื่องราคา นิดาขอทราบประเภทสินค้าและจำนวนโดยประมาณก่อนนะคะ แล้วจะรีบเช็กราคาให้ค่ะ แจ้งจำนวนคร่าว ๆ ได้เลยค่ะ';
  }

  if (/สวัสดี|hello|hi|ดีค่ะ|ดีครับ/.test(text.toLowerCase())) {
    return 'สวัสดีค่ะ 😊 สนใจแพ็คเกจจิ้งประเภทไหนเป็นพิเศษคะ เลือกหมวดด้านล่างได้เลยค่ะ';
  }

  if (/ขอบคุณ|thank/.test(text.toLowerCase())) {
    return 'ยินดีค่ะ หากต้องการสอบถามเพิ่มเติม นิดาพร้อมช่วยเสมอเลยนะคะ 🙏';
  }

  const reply = FALLBACK_REPLIES[fallbackIndex % FALLBACK_REPLIES.length];
  fallbackIndex += 1;
  return reply;
}

/* Typing delay: realistic 800–1500ms, scaled slightly by reply length. */
export function getSimulatedDelay(replyText) {
  const base = 800 + Math.min(500, (replyText || '').length * 6);
  return Math.min(1500, Math.round(base));
}
