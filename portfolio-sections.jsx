// portfolio-sections.jsx — All section components (v2)

// ============ DATA ============
const SKILLS = [
  'Graphic Design', 'Photography', 'Videography', 'Marketing Strategy',
  'Social Media Management', 'Adobe Creative Suite', 'Content Creation',
  'Brand Development', 'Art Direction', 'Motion Graphics', 'Print Design', 'Analytics',
];

const EXPERIENCES = [
  { role: 'Marketing Executive', company: 'Company Name', period: '2023 — Present',
    desc: 'Led integrated marketing campaigns and brand strategy across digital and print channels. Managed social media presence and content creation.' },
  { role: 'Senior Graphic Designer', company: 'Studio Name', period: '2021 — 2023',
    desc: 'Created visual identities, marketing materials, and digital content. Directed photoshoots and video productions for diverse clients.' },
  { role: 'Marketing Coordinator', company: 'Agency Name', period: '2019 — 2021',
    desc: 'Coordinated cross-channel campaigns, analyzed performance metrics, and produced creative content for social media and print.' },
  { role: 'Junior Designer', company: 'Design Firm', period: '2017 — 2019',
    desc: 'Designed marketing collateral, social media graphics, and supported senior designers on brand identity projects.' },
];

const ARTWORK_ITEMS = [
  { id: 'a1', title: 'Brand Identity System', label: 'BRAND IDENTITY', hue: 260 },
  { id: 'a2', title: 'Event Poster Series', label: 'POSTER DESIGN', hue: 280 },
  { id: 'a3', title: 'Editorial Layout', label: 'EDITORIAL', hue: 240 },
  { id: 'a4', title: 'Annual Report Design', label: 'REPORT', hue: 220 },
  { id: 'a5', title: 'Packaging Design', label: 'PACKAGING', hue: 300 },
  { id: 'a6', title: 'Social Media Templates', label: 'SOCIAL KIT', hue: 250 },
];

const PHOTO_ITEMS = [
  { id: 'p1', title: 'Urban Landscapes', label: 'URBAN', hue: 180 },
  { id: 'p2', title: 'Product Photography', label: 'PRODUCT', hue: 160 },
  { id: 'p3', title: 'Food Photography', label: 'FOOD', hue: 40 },
  { id: 'p4', title: 'Portrait Series', label: 'PORTRAIT', hue: 20 },
  { id: 'p5', title: 'Event Photography', label: 'EVENT', hue: 200 },
  { id: 'p6', title: 'Architecture', label: 'ARCHITECTURE', hue: 190 },
];

const VIDEO_ITEMS = [
  { id: 'v1', title: 'Brand Story', desc: 'Company brand narrative video', vimeoId: '76979871' },
  { id: 'v2', title: 'Product Launch', desc: 'New product reveal campaign', vimeoId: '76979871' },
  { id: 'v3', title: 'Behind the Scenes', desc: 'Creative process documentary', vimeoId: '76979871' },
  { id: 'v4', title: 'Event Highlight', desc: 'Corporate event recap', vimeoId: '76979871' },
  { id: 'v5', title: 'Social Reel', desc: 'Short-form social content', vimeoId: '76979871' },
  { id: 'v6', title: 'Client Testimonial', desc: 'Customer success story', vimeoId: '76979871' },
];

const DASHBOARD_ITEMS = [
  { id: 'd1', title: 'Social Media Analytics', label: 'SOCIAL ANALYTICS', hue: 210 },
  { id: 'd2', title: 'Campaign Performance', label: 'CAMPAIGN KPI', hue: 150 },
  { id: 'd3', title: 'Content Calendar', label: 'CONTENT PLAN', hue: 30 },
  { id: 'd4', title: 'Engagement Metrics', label: 'ENGAGEMENT', hue: 340 },
  { id: 'd5', title: 'ROI Dashboard', label: 'ROI REPORT', hue: 120 },
  { id: 'd6', title: 'Monthly Performance', label: 'MONTHLY REVIEW', hue: 270 },
];

// ============ SCROLL PROGRESS ============
function ScrollProgress() {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setW(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div className="scroll-progress" style={{ width: `${w}%` }} />;
}

// ============ NAVIGATION ============
function Navigation({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'artwork', label: 'Artwork' },
    { id: 'photography', label: 'Photo' },
    { id: 'videos', label: 'Video' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Chet Mutaphon
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l.id}
            className={`nav-link ${active === l.id ? 'nav-link--active' : ''}`}
            onClick={() => goTo(l.id)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ============ HERO ============
function HeroSection() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setShow(true), 300); }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content" style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <h1 className="hero-name">Chet Mutaphon</h1>
        <p className="hero-title">Marketing Executive &amp; Graphic Designer</p>
        <p className="hero-tagline">
          Crafting visual stories that connect brands with people.
        </p>
      </div>
      <div className="scroll-hint" style={{
        opacity: show ? 1 : 0, transition: 'opacity 1.2s ease 0.8s',
      }}>
        <div className="scroll-hint-line"></div>
      </div>
    </section>
  );
}

// ============ ABOUT & SKILLS ============
function AboutSkillsSection() {
  return (
    <section className="section section--alt" id="about">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">About</p>
          <h2 className="section-title">A creative at the intersection<br />of design and marketing.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="about-text">
            With years of experience spanning graphic design, photography, videography, and marketing strategy,
            I bring a multidisciplinary approach to every project. From crafting brand identities to directing
            video content and analyzing campaign performance — I believe great design drives great results.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <span key={i} className="skill-tag">{s}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============ EXPERIENCE ============
function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked.</h2>
        </ScrollReveal>
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-desc">{exp.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ REUSABLE PORTFOLIO GRID + LIGHTBOX ============
function PortfolioGrid({ items, aspectRatio = '4/3' }) {
  const [lightbox, setLightbox] = React.useState(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.08}>
            <div className="gallery-card" onClick={() => setLightbox(item)}>
              <div className="gallery-placeholder" style={{
                aspectRatio,
                background: `repeating-linear-gradient(-45deg, transparent, transparent 10px, oklch(0.9 0.015 ${item.hue}) 10px, oklch(0.9 0.015 ${item.hue}) 20px), var(--card)`,
              }}>
                <span className="placeholder-label">{item.label}</span>
                <span className="placeholder-hint">drop image here</span>
              </div>
              <div className="gallery-overlay">
                <span className="gallery-overlay-title">{item.title}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      {lightbox && (
        <div className="modal-overlay" onClick={() => setLightbox(null)}>
          <button className="modal-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="modal-content lightbox-content" onClick={e => e.stopPropagation()}>
            <div className="lightbox-image" style={{
              aspectRatio,
              background: `repeating-linear-gradient(-45deg, transparent, transparent 14px, oklch(0.9 0.015 ${lightbox.hue}) 14px, oklch(0.9 0.015 ${lightbox.hue}) 28px), var(--card)`,
            }}>
              <span className="placeholder-label" style={{ fontSize: 16 }}>{lightbox.label}</span>
              <span className="placeholder-hint">drop image here</span>
            </div>
            <div className="lightbox-info">
              <h3 className="lightbox-title">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ============ ARTWORK SECTION ============
function ArtworkSection() {
  return (
    <section className="section section--alt" id="artwork">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Artwork</p>
          <h2 className="section-title">Design work.</h2>
        </ScrollReveal>
        <PortfolioGrid items={ARTWORK_ITEMS} />
      </div>
    </section>
  );
}

// ============ PHOTOGRAPHY SECTION ============
function PhotographySection() {
  return (
    <section className="section" id="photography">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Photography</p>
          <h2 className="section-title">Through the lens.</h2>
        </ScrollReveal>
        <PortfolioGrid items={PHOTO_ITEMS} aspectRatio="3/2" />
      </div>
    </section>
  );
}

// ============ VIDEO SECTION ============
function VideoSection() {
  const [modal, setModal] = React.useState(null);

  return (
    <section className="section section--alt" id="videos">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Videographer</p>
          <h2 className="section-title">Motion &amp; storytelling.</h2>
        </ScrollReveal>
        <div className="video-grid">
          {VIDEO_ITEMS.map((v, i) => (
            <ScrollReveal key={v.id} delay={i * 0.1}>
              <div className="video-card" onClick={() => setModal(v)}>
                <div className="video-thumb">
                  <div className="video-play">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                      <path d="M20 16l12 8-12 8V16z" fill="currentColor" opacity="0.9" />
                    </svg>
                  </div>
                </div>
                <div className="video-info">
                  <h4 className="video-title">{v.title}</h4>
                  <p className="video-desc">{v.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {modal && (
        <div className="modal-overlay modal-overlay--dark" onClick={() => setModal(null)}>
          <button className="modal-close" onClick={() => setModal(null)}>✕</button>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <div className="video-embed">
              <iframe
                src={`https://player.vimeo.com/video/${modal.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              ></iframe>
            </div>
            <p className="video-modal-title">{modal.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

// ============ DASHBOARD SECTION ============
function DashboardSection() {
  return (
    <section className="section" id="dashboard">
      <div className="section-inner">
        <ScrollReveal>
          <p className="section-label">Marketing</p>
          <h2 className="section-title">Dashboard &amp; analytics.</h2>
        </ScrollReveal>
        <PortfolioGrid items={DASHBOARD_ITEMS} aspectRatio="16/9" />
      </div>
    </section>
  );
}

// ============ FOOTER ============
function FooterSection() {
  return (
    <footer className="footer">
      <ScrollReveal>
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-name">Chet Mutaphon</span>
            <span className="footer-copy">© 2026 All rights reserved.</span>
          </div>
          <div className="footer-contact">
            <a href="mailto:your.email@example.com" className="footer-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginRight: 6, verticalAlign: '-2px'}}>
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M1 5l7 4 7-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              your.email@example.com
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="footer-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{marginRight: 6, verticalAlign: '-2px'}}>
                <path d="M13.6 1H2.4C1.63 1 1 1.63 1 2.4v11.2c0 .77.63 1.4 1.4 1.4h11.2c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4zM5.3 13H3.2V6.5h2.1V13zM4.25 5.6c-.69 0-1.25-.56-1.25-1.25S3.56 3.1 4.25 3.1s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM13 13h-2.1V9.85c0-.75-.01-1.72-1.05-1.72-1.05 0-1.21.82-1.21 1.67V13H6.55V6.5h2.01v.89h.03c.28-.53.96-1.09 1.98-1.09 2.12 0 2.51 1.4 2.51 3.21V13z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}

Object.assign(window, {
  ScrollProgress, Navigation, HeroSection,
  AboutSkillsSection, ExperienceSection,
  ArtworkSection, PhotographySection,
  VideoSection, DashboardSection, FooterSection,
});
