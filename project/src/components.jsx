// Shared components for the A&S corporate site

const { useState, useEffect, useRef, useMemo } = React;

// ─────────────────────────────────────────────────────────
// Reveal-on-scroll
// ─────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '-40px 0px' }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': delay + 'ms', ...style }}
    >
      {children}
    </Tag>
  );
}

// ─────────────────────────────────────────────────────────
// Header (with scroll state + mobile nav)
// ─────────────────────────────────────────────────────────
function Header({ current, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [current]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'chi-siamo', label: 'Chi siamo' },
    { id: 'sostenibilita', label: 'Sostenibilità' },
    { id: 'negozi', label: 'Negozi' },
    { id: 'iniziative', label: 'Iniziative' },
    { id: 'lavora-con-noi', label: 'Lavora con noi' },
    { id: 'press', label: 'Press' },
    { id: 'contatti', label: 'Contatti' },
  ];

  const go = (id) => (e) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="header-inner">
          <a className="header-logo" href="#" onClick={go('home')} aria-label="Acqua&Sapone">
            <img src="assets/logo-acqua-sapone-club.png" alt="Acqua&Sapone" />
          </a>
          <nav className="nav">
            {navItems.map(it => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={go(it.id)}
                className={current === it.id ? 'active' : ''}
              >{it.label}</a>
            ))}
          </nav>
          <a
            href="#"
            className="btn btn-primary btn-sm header-cta"
            onClick={(e) => { e.preventDefault(); window.open('#', '_self'); }}
            style={{ marginLeft: 8 }}
          >
            A&S Club
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_outward</span>
          </a>
          <button
            className="burger"
            aria-label="Menu"
            onClick={() => setMobileOpen(o => !o)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(it => (
          <a key={it.id} href={`#${it.id}`} onClick={go(it.id)}>{it.label}</a>
        ))}
        <a
          href="#"
          style={{
            marginTop: 24,
            padding: '16px 24px',
            background: 'var(--as-rosa-deep)',
            borderRadius: 56,
            textAlign: 'center',
            borderBottom: 0,
            display: 'inline-flex',
            justifyContent: 'center',
            gap: 10,
            alignSelf: 'stretch'
          }}
        >
          Vai al Club <span className="material-symbols-outlined">arrow_outward</span>
        </a>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────
function Footer({ onNavigate }) {
  const go = (id) => (e) => { e.preventDefault(); onNavigate(id); };
  const cols = [
    {
      h: 'Azienda',
      l: [
        ['Chi siamo', 'chi-siamo'],
        ['La nostra storia', 'chi-siamo'],
        ['Sostenibilità', 'sostenibilita'],
        ['Sala stampa', 'press'],
      ],
    },
    {
      h: 'Clienti',
      l: [
        ['Trova un negozio', 'negozi'],
        ['Iniziative e promo', 'iniziative'],
        ['Prodotti', 'home'],
        ['A&S Club', 'home'],
      ],
    },
    {
      h: 'Lavoro',
      l: [
        ['Lavora con noi', 'lavora-con-noi'],
        ['Posizioni aperte', 'lavora-con-noi'],
        ['Franchising', 'lavora-con-noi'],
        ['Fornitori', 'contatti'],
      ],
    },
    {
      h: 'Supporto',
      l: [
        ['Contatti', 'contatti'],
        ['Servizio clienti', 'contatti'],
        ['FAQ', 'contatti'],
        ['Privacy & Cookie', 'contatti'],
      ],
    },
  ];

  return (
    <footer className="footer" id="contatti-footer">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr repeat(4, 1fr)',
          gap: 48,
          alignItems: 'start',
          paddingBottom: 64,
        }}>
          <div>
            <img
              src="assets/logo-acqua-sapone-club.png"
              alt="Acqua&Sapone"
              style={{ height: 54, filter: 'brightness(0) invert(1)', marginBottom: 20 }}
            />
            <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.82, maxWidth: 360, margin: 0 }}>
              Dal 1992 portiamo cura, pulizia e benessere in ogni casa italiana. Oltre 800 punti vendita, un'unica promessa.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['facebook', 'instagram', 'youtube', 'linkedin'].map(ic => (
                <a key={ic} href="#" aria-label={ic} style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 180ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                >
                  <SocialIcon name={ic} />
                </a>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <h6 style={{
                fontFamily: 'Roboto Mono', fontWeight: 700, fontSize: 12,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                margin: '4px 0 18px 0', color: 'var(--as-cyan-soft)'
              }}>{col.h}</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.l.map(([lbl, id]) => (
                  <li key={lbl}>
                    <a href={`#${id}`} onClick={go(id)} style={{ fontSize: 14 }}>{lbl}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          opacity: 0.7,
        }}>
          <div>© 2026 Acqua&Sapone Italia S.p.A. · P.IVA 01234567890 · Tutti i diritti riservati</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a>Note legali</a>
            <a>Cookie</a>
            <a>Whistleblowing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const common = { width: 18, height: 18, fill: '#fff' };
  if (name === 'facebook') return <svg {...common} viewBox="0 0 24 24"><path d="M13 22v-8h2.8l.4-3.2H13V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2C15.9 4.1 14.8 4 13.6 4c-2.5 0-4.1 1.5-4.1 4.3v2.5H7v3.2h2.5V22H13z"/></svg>;
  if (name === 'instagram') return <svg {...common} viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.3.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.3 1.9.1 1.1.1 1.4.1 4s0 3-.1 4c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.3-1.1.1-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.4-.3-.9-.3-1.9-.1-1-.1-1.4-.1-4s0-3 .1-4c0-1 .2-1.5.3-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.3 1-.1 1.3-.1 4-.1zm0 4.4c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4S15 6.6 12 6.6zm0 8.9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.6-9.1c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z"/></svg>;
  if (name === 'youtube') return <svg {...common} viewBox="0 0 24 24"><path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.6 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.1V8.9l5.2 3.1-5.2 3.1z"/></svg>;
  if (name === 'linkedin') return <svg {...common} viewBox="0 0 24 24"><path d="M6.5 8H3.8v8h2.7V8zm-1.3-4C4.3 4 3.5 4.8 3.5 5.7s.7 1.7 1.7 1.7 1.7-.7 1.7-1.7S6.1 4 5.2 4zm8 4c-1.3 0-2.2.7-2.6 1.4V8H7.9v8h2.7v-4.4c0-1.1.2-2.2 1.6-2.2s1.4 1.3 1.4 2.3V16h2.7v-4.9c0-2.3-.5-4.1-3.2-4.1z"/></svg>;
  return null;
}

// ─────────────────────────────────────────────────────────
// Small building blocks
// ─────────────────────────────────────────────────────────
function Bubble({ size = 40, style = {}, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: size, height: size, borderRadius: '50%',
        background: 'radial-gradient(rgb(255,255,255) 0%, rgb(250,253,255) 11%, rgb(234,246,254) 27%, rgb(207,235,252) 47%, rgb(163,218,248) 68%, rgb(87,196,242) 91%, rgb(11,187,239) 100%)',
        boxShadow: '0 12px 30px rgba(0,172,233,0.25), inset -8px -8px 24px rgba(255,255,255,0.6)',
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

function Eyebrow({ children, color }) {
  return <span className="eyebrow" style={{ color: color || 'var(--palette-accent)' }}>{children}</span>;
}

function SectionHead({ eyebrow, title, lede, align = 'left', accent = false }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      marginBottom: 56,
    }}>
      {eyebrow && <Eyebrow color={accent ? 'var(--palette-accent)' : 'var(--as-blu)'}>{eyebrow}</Eyebrow>}
      <h2 className="display-h2">{title}</h2>
      {lede && <p className="lede" style={{ margin: 0 }}>{lede}</p>}
    </div>
  );
}

// KPI / Stat card
function Stat({ value, unit, label, delay = 0 }) {
  return (
    <Reveal delay={delay} style={{
      padding: '32px 28px',
      borderRadius: 24,
      background: '#fff',
      border: '1px solid var(--as-gray-200)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minHeight: 160,
      justifyContent: 'flex-end',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 6,
        fontFamily: 'var(--display-font)', fontWeight: 700,
        color: 'var(--as-blu-dark)',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        <span style={{ fontSize: 'clamp(40px, 4.5vw, 64px)' }}>{value}</span>
        {unit && <span style={{ fontSize: 20, color: 'var(--palette-accent)' }}>{unit}</span>}
      </div>
      <div style={{ color: 'var(--as-gray-700)', fontSize: 14, lineHeight: 1.45, marginTop: 8 }}>{label}</div>
    </Reveal>
  );
}

Object.assign(window, {
  Reveal, Header, Footer, Bubble, Eyebrow, SectionHead, Stat, SocialIcon,
});
