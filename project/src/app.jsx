// Root app: router + tweaks + composition

const { useState: useStateRoot, useEffect: useEffectRoot } = React;

// Default tweakable values (persisted via __edit_mode_set_keys)
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "default",
  "palette": "rosa",
  "density": "comfortable",
  "display": "montserrat"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = useStateRoot(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [tweaks, setTweaks] = useStateRoot(DEFAULTS);
  const [tweakOpen, setTweakOpen] = useStateRoot(false);
  const [editModeOn, setEditModeOn] = useStateRoot(false);

  // Apply tweaks to :root
  useEffectRoot(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', tweaks.palette);
    root.setAttribute('data-density', tweaks.density);
    root.setAttribute('data-display', tweaks.display);
  }, [tweaks]);

  // Hash routing
  useEffectRoot(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '') || 'home';
      setPage(h);
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Edit-mode protocol
  useEffectRoot(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setEditModeOn(true);
      if (e.data.type === '__deactivate_edit_mode') setEditModeOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const navigate = (id) => {
    window.location.hash = id;
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  const Page = {
    'home': <HomePage onNavigate={navigate} heroVariant={tweaks.hero} />,
    'chi-siamo': <AboutPage onNavigate={navigate} />,
    'sostenibilita': <SustainabilityPage />,
    'negozi': <StoreLocatorPage />,
    'iniziative': <InitiativesPage />,
    'lavora-con-noi': <CareersPage />,
    'press': <PressPage />,
    'contatti': <ContactPage />,
  }[page] || <HomePage onNavigate={navigate} heroVariant={tweaks.hero} />;

  return (
    <div data-screen-label={pageLabel(page)}>
      <Header current={page} onNavigate={navigate} />
      <main key={page}>{Page}</main>
      <Footer onNavigate={navigate} />

      {editModeOn && (
        <>
          <button
            aria-label="Tweaks"
            onClick={() => setTweakOpen(o => !o)}
            style={{
              position: 'fixed', right: 24, bottom: 24, zIndex: 10000,
              width: 56, height: 56, borderRadius: '50%',
              background: 'var(--as-blu)', color: '#fff', border: 0, cursor: 'pointer',
              boxShadow: '0 12px 30px rgba(25,73,155,0.35)',
              display: 'grid', placeItems: 'center',
            }}
          >
            <span className="material-symbols-outlined">{tweakOpen ? 'close' : 'tune'}</span>
          </button>
          <div className={`tweaks-panel ${tweakOpen ? 'open' : ''}`} style={{ bottom: 96 }}>
            <h4>Tweaks</h4>
            <TweakRow label="Hero (home)" value={tweaks.hero} onChange={v => updateTweak('hero', v)}
              options={[['default','Default'],['split','Split'],['editorial','Editoriale']]} />
            <TweakRow label="Palette accento" value={tweaks.palette} onChange={v => updateTweak('palette', v)}
              options={[['rosa','Rosa'],['blu','Blu'],['giallo','Giallo']]} />
            <TweakRow label="Densità layout" value={tweaks.density} onChange={v => updateTweak('density', v)}
              options={[['comfortable','Arioso'],['compact','Denso']]} />
            <TweakRow label="Font display" value={tweaks.display} onChange={v => updateTweak('display', v)}
              options={[['montserrat','Montserrat'],['sora','Sora (2026)']]} />
          </div>
        </>
      )}
    </div>
  );
}

function TweakRow({ label, value, onChange, options }) {
  return (
    <div className="tweak-row">
      <div className="tweak-label">{label}</div>
      <div className="tweak-options">
        {options.map(([v, l]) => (
          <button key={v} className={value === v ? 'active' : ''} onClick={() => onChange(v)}>{l}</button>
        ))}
      </div>
    </div>
  );
}

function pageLabel(id) {
  const map = {
    'home': '01 Home',
    'chi-siamo': '02 Chi siamo',
    'sostenibilita': '03 Sostenibilità',
    'negozi': '04 Negozi',
    'iniziative': '05 Iniziative',
    'lavora-con-noi': '06 Lavora con noi',
    'press': '07 Press',
    'contatti': '08 Contatti',
  };
  return map[id] || id;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
