// ============================================================
//  content.js — แก้ไขข้อมูลผลงานทั้งหมดที่นี่
//  แล้วอัปไฟล์นี้ขึ้น GitHub พร้อมกับรูปภาพ
// ============================================================


// ── DESIGN WORK (Artwork) ────────────────────────────────────
// aspect ratio 4:3 (แนวนอน)
// img: ใส่ URL รูป หรือ path เช่น 'images/artwork1.jpg'
// ถ้ายังไม่มีรูป ให้เว้น img: '' ไว้ก่อน

var ARTWORK_ITEMS = [
  {
    id: 'a1',
    title: 'Brand Identity System',   // ← ชื่อผลงาน
    label: 'BRAND IDENTITY',          // ← ป้ายกำกับ (ตัวพิมพ์ใหญ่)
    hue: 260,                         // ← สี placeholder (0-360)
    img: '',                          // ← URL หรือ path รูป เช่น 'images/artwork1.jpg'
  },
  {
    id: 'a2',
    title: 'Event Poster Series',
    label: 'POSTER DESIGN',
    hue: 280,
    img: '',
  },
  {
    id: 'a3',
    title: 'Editorial Layout',
    label: 'EDITORIAL',
    hue: 240,
    img: '',
  },
  {
    id: 'a4',
    title: 'Annual Report Design',
    label: 'REPORT',
    hue: 220,
    img: '',
  },
  {
    id: 'a5',
    title: 'Packaging Design',
    label: 'PACKAGING',
    hue: 300,
    img: '',
  },
  {
    id: 'a6',
    title: 'Social Media Templates',
    label: 'SOCIAL KIT',
    hue: 250,
    img: '',
  },
  // ต้องการเพิ่มผลงาน? copy block ด้านล่างแล้ว paste ต่อได้เลย
  // {
  //   id: 'a7',
  //   title: 'ชื่อผลงาน',
  //   label: 'LABEL',
  //   hue: 200,
  //   img: 'images/artwork7.jpg',
  // },
];


// ── PHOTOGRAPHY ───────────────────────────────────────────────
// aspect ratio 3:2 (landscape)

var PHOTO_ITEMS = [
  {
    id: 'p1',
    title: 'Urban Landscapes',
    label: 'URBAN',
    hue: 180,
    img: '', Photo1.png ,
  },
  {
    id: 'p2',
    title: 'Product Photography',
    label: 'PRODUCT',
    hue: 160,
    img: '',
  },
  {
    id: 'p3',
    title: 'Food Photography',
    label: 'FOOD',
    hue: 40,
    img: '',
  },
  {
    id: 'p4',
    title: 'Portrait Series',
    label: 'PORTRAIT',
    hue: 20,
    img: '',
  },
  {
    id: 'p5',
    title: 'Event Photography',
    label: 'EVENT',
    hue: 200,
    img: '',
  },
  {
    id: 'p6',
    title: 'Architecture',
    label: 'ARCHITECTURE',
    hue: 190,
    img: '',
  },
  // ต้องการเพิ่มภาพ? copy block ด้านล่างแล้ว paste ต่อได้เลย
  // {
  //   id: 'p7',
  //   title: 'ชื่อภาพ',
  //   label: 'LABEL',
  //   hue: 170,
  //   img: 'images/photo7.jpg',
  // },
];


// ── VIDEOGRAPHER ──────────────────────────────────────────────
// vimeoId: เอาจาก URL ของ Vimeo เช่น vimeo.com/123456789
// → vimeoId: '123456789'

var VIDEO_ITEMS = [
  {
    id: 'v1',
    title: 'Brand Story',             // ← ชื่อวิดีโอ
    desc: 'Company brand narrative',  // ← คำอธิบายสั้น
    vimeoId: '',                      // ← Vimeo ID (ตัวเลขใน URL)
  },
  {
    id: 'v2',
    title: 'Product Launch',
    desc: 'New product reveal campaign',
    vimeoId: '',
  },
  {
    id: 'v3',
    title: 'Behind the Scenes',
    desc: 'Creative process documentary',
    vimeoId: '',
  },
  {
    id: 'v4',
    title: 'Event Highlight',
    desc: 'Corporate event recap',
    vimeoId: '',
  },
  {
    id: 'v5',
    title: 'Social Reel',
    desc: 'Short-form social content',
    vimeoId: '',
  },
  {
    id: 'v6',
    title: 'Client Testimonial',
    desc: 'Customer success story',
    vimeoId: '',
  },
  // ต้องการเพิ่มวิดีโอ? copy block ด้านล่างแล้ว paste ต่อได้เลย
  // {
  //   id: 'v7',
  //   title: 'ชื่อวิดีโอ',
  //   desc: 'คำอธิบาย',
  //   vimeoId: '123456789',
  // },
];


// ── DASHBOARD & ANALYTICS ─────────────────────────────────────
// aspect ratio 16:9 (widescreen)

var DASHBOARD_ITEMS = [
  {
    id: 'd1',
    title: 'Social Media Analytics',
    label: 'SOCIAL ANALYTICS',
    hue: 210,
    img: '',
  },
  {
    id: 'd2',
    title: 'Campaign Performance',
    label: 'CAMPAIGN KPI',
    hue: 150,
    img: '',
  },
  {
    id: 'd3',
    title: 'Content Calendar',
    label: 'CONTENT PLAN',
    hue: 30,
    img: '',
  },
  {
    id: 'd4',
    title: 'Engagement Metrics',
    label: 'ENGAGEMENT',
    hue: 340,
    img: '',
  },
  {
    id: 'd5',
    title: 'ROI Dashboard',
    label: 'ROI REPORT',
    hue: 120,
    img: '',
  },
  {
    id: 'd6',
    title: 'Monthly Performance',
    label: 'MONTHLY REVIEW',
    hue: 270,
    img: '',
  },
];
