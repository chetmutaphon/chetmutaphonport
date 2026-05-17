// portfolio-utils.jsx — Theme definitions, scroll utilities, shared hooks

const PORTFOLIO_THEMES = {
  appleMinimal: {
    id: 'appleMinimal',
    name: 'Apple Minimal',
    vars: {
      '--font-body': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
      '--font-heading': '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
      '--heading-weight': '700',
      '--bg': '#ffffff',
      '--bg-alt': '#f5f5f7',
      '--text': '#1d1d1f',
      '--text-secondary': '#86868b',
      '--accent': '#1d1d1f',
      '--border': '#d2d2d7',
      '--card': '#f5f5f7',
      '--nav-bg': 'rgba(255,255,255,0.72)',
      '--radius': '18px',
      '--hero-size': 'clamp(48px, 8vw, 88px)',
      '--hero-align': 'center',
      '--hero-items': 'center',
      '--section-gap': '120px',
      '--gallery-cols': '3',
    }
  },
  warmEditorial: {
    id: 'warmEditorial',
    name: 'Warm Editorial',
    vars: {
      '--font-body': '"DM Sans", sans-serif',
      '--font-heading': '"DM Serif Display", serif',
      '--heading-weight': '400',
      '--bg': '#faf8f5',
      '--bg-alt': '#f0ece4',
      '--text': '#2c2825',
      '--text-secondary': '#8a8279',
      '--accent': '#8a7054',
      '--border': '#e0dbd3',
      '--card': '#f0ece4',
      '--nav-bg': 'rgba(250,248,245,0.85)',
      '--radius': '8px',
      '--hero-size': 'clamp(44px, 7vw, 76px)',
      '--hero-align': 'left',
      '--hero-items': 'flex-start',
      '--section-gap': '100px',
      '--gallery-cols': '3',
    }
  },
  coolStudio: {
    id: 'coolStudio',
    name: 'Cool Studio',
    vars: {
      '--font-body': '"Space Grotesk", sans-serif',
      '--font-heading': '"Space Grotesk", sans-serif',
      '--heading-weight': '600',
      '--bg': '#f5f7fa',
      '--bg-alt': '#e8ecf2',
      '--text': '#1a1e2e',
      '--text-secondary': '#6b7280',
      '--accent': '#4361ee',
      '--border': '#d5dbe5',
      '--card': '#e8ecf2',
      '--nav-bg': 'rgba(245,247,250,0.82)',
      '--radius': '14px',
      '--hero-size': 'clamp(44px, 7vw, 72px)',
      '--hero-align': 'center',
      '--hero-items': 'center',
      '--section-gap': '100px',
      '--gallery-cols': '4',
    }
  },
  inkPaper: {
    id: 'inkPaper',
    name: 'Ink & Paper',
    vars: {
      '--font-body': '"Syne", sans-serif',
      '--font-heading': '"Syne", sans-serif',
      '--heading-weight': '800',
      '--bg': '#ffffff',
      '--bg-alt': '#f0f0f0',
      '--text': '#000000',
      '--text-secondary': '#555555',
      '--accent': '#000000',
      '--border': '#e0e0e0',
      '--card': '#f0f0f0',
      '--nav-bg': 'rgba(255,255,255,0.92)',
      '--radius': '0px',
      '--hero-size': 'clamp(52px, 9vw, 100px)',
      '--hero-align': 'left',
      '--hero-items': 'flex-start',
      '--section-gap': '140px',
      '--gallery-cols': '3',
    }
  },
};

function applyTheme(themeKey) {
  const theme = PORTFOLIO_THEMES[themeKey];
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function useScrollReveal(threshold = 0.08) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function ScrollReveal({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(36px)',
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      willChange: 'opacity, transform',
      ...style,
    }}>
      {children}
    </div>
  );
}

function useActiveSection(ids) {
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);
  return active;
}

Object.assign(window, {
  PORTFOLIO_THEMES, applyTheme,
  useScrollReveal, ScrollReveal, useActiveSection,
});
