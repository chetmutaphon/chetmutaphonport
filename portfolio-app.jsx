// portfolio-app.jsx — Loading screen, App root, Tweaks, Mount

// ============ LOADING SCREEN ============
function LoadingScreen({ onDone }) {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(onDone, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 16,
      opacity: phase >= 2 ? 0 : 1,
      transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1)',
      pointerEvents: phase >= 2 ? 'none' : 'auto',
    }}>
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--heading-weight)',
        fontSize: 56,
        color: 'var(--text)',
        letterSpacing: '-0.04em',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)',
      }}>
        CM
      </div>
      <div style={{
        width: 48, height: 2, borderRadius: 1,
        background: 'var(--accent)',
        opacity: phase >= 1 ? 0.4 : 0,
        transform: phase >= 1 ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s',
      }} />
    </div>
  );
}

// ============ TWEAKS CONFIG ============
function TweaksConfig({ tweaks, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection label="Design Theme">
        <TweakSelect
          label="Theme"
          value={tweaks.theme}
          options={[
            { label: 'Apple Minimal', value: 'appleMinimal' },
            { label: 'Warm Editorial', value: 'warmEditorial' },
            { label: 'Cool Studio', value: 'coolStudio' },
            { label: 'Ink & Paper', value: 'inkPaper' },
          ]}
          onChange={v => setTweak('theme', v)}
        />
      </TweakSection>
      <TweakSection label="Gallery">
        <TweakRadio
          label="Columns"
          value={tweaks.galleryCols}
          options={['3', '4']}
          onChange={v => setTweak('galleryCols', v)}
        />
      </TweakSection>
      <TweakSection label="Spacing">
        <TweakRadio
          label="Density"
          value={tweaks.spacing}
          options={['compact', 'normal', 'spacious']}
          onChange={v => setTweak('spacing', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// ============ MAIN APP ============
function App() {
  const [loaded, setLoaded] = React.useState(false);
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const active = useActiveSection([
    'about', 'experience', 'artwork', 'photography', 'videos', 'dashboard'
  ]);

  React.useEffect(() => { applyTheme(tweaks.theme); }, [tweaks.theme]);
  React.useEffect(() => {
    document.documentElement.style.setProperty('--gallery-cols', tweaks.galleryCols);
  }, [tweaks.galleryCols]);
  React.useEffect(() => {
    const map = { compact: '80px', normal: '120px', spacious: '160px' };
    document.documentElement.style.setProperty('--section-gap', map[tweaks.spacing] || '120px');
  }, [tweaks.spacing]);
  React.useEffect(() => { applyTheme(tweaks.theme); }, []);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <ScrollProgress />
      <Navigation active={active} />
      <HeroSection />
      <AboutSkillsSection />
      <ExperienceSection />
      <ArtworkSection />
      <PhotographySection />
      <VideoSection />
      <DashboardSection />
      <FooterSection />
      <TweaksConfig tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

// ============ MOUNT ============
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
