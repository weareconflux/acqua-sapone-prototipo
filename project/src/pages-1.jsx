// Page 1/2: Home, Chi siamo, Sostenibilità, Negozi

const HomePage = ({ onNavigate, heroVariant }) => {
  return (
    <>
      {/* HERO */}
      {heroVariant === 'split' ? <HeroSplit onNavigate={onNavigate} /> :
       heroVariant === 'editorial' ? <HeroEditorial onNavigate={onNavigate} /> :
       <HeroDefault onNavigate={onNavigate} />}

      {/* KPI STRIP */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
              <div>
                <Eyebrow>Numeri chiave</Eyebrow>
                <h2 className="display-h2" style={{ marginTop: 12, maxWidth: 640 }}>
                  Una presenza capillare in Italia, costruita giorno dopo giorno.
                </h2>
              </div>
              <a className="link-brand" href="#chi-siamo" onClick={e => { e.preventDefault(); onNavigate('chi-siamo'); }}>
                Scopri la nostra storia →
              </a>
            </div>
          </Reveal>
          <div className="grid grid-4">
            <Stat value="800+" label="Punti vendita in tutta Italia" delay={0} />
            <Stat value="12.000" label="Collaboratori e collaboratrici" delay={80} />
            <Stat value="1992" label="Anno di fondazione" delay={160} />
            <Stat value="98" unit="%" label="Clienti che tornano ogni settimana" delay={240} />
          </div>
        </div>
      </section>

      {/* CATEGORIE PRODOTTO */}
      <section className="section" style={{ background: 'var(--as-sky-lo)' }}>
        <div className="container">
          <SectionHead
            eyebrow="Cosa trovi da noi"
            title="Tutto quello che serve a una casa, a portata di bolle."
            lede="Oltre 15.000 referenze tra cura della persona, pulizia, igiene, prodotti per la casa, bambino e animali."
          />
          <div className="grid grid-3">
            {[
              { t: 'Cura della persona', n: '3.200+ referenze', c: 'var(--as-cyan-soft)', i: 'face' },
              { t: 'Pulizia casa', n: '2.800+ referenze', c: 'var(--as-ice)', i: 'cleaning_services' },
              { t: 'Prodotti bimbo', n: '1.400+ referenze', c: 'var(--as-rosa-pink)', i: 'child_care' },
              { t: 'Alimenti & bevande', n: '4.600+ referenze', c: 'var(--as-sky-50)', i: 'restaurant' },
              { t: 'Animali', n: '900+ referenze', c: 'var(--as-cyan-soft)', i: 'pets' },
              { t: 'Casa & tempo libero', n: '2.000+ referenze', c: 'var(--as-ice)', i: 'chair' },
            ].map((cat, i) => (
              <Reveal key={cat.t} delay={i * 60}>
                <a href="#" className="card" style={{
                  display: 'flex', gap: 18, alignItems: 'center',
                  padding: '28px 28px', textDecoration: 'none',
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: cat.c,
                    display: 'grid', placeItems: 'center',
                    flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--as-blu-dark)' }}>{cat.i}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>{cat.t}</div>
                    <div style={{ fontSize: 13, color: 'var(--as-gray-700)', marginTop: 2 }}>{cat.n}</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ marginLeft: 'auto', color: 'var(--palette-accent)' }}>arrow_forward</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALORI preview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: 80, alignItems: 'center' }}>
            <Reveal>
              <Eyebrow>I nostri valori</Eyebrow>
              <h2 className="display-h2" style={{ marginTop: 16 }}>
                Prezzi giusti, scelta<br />responsabile, persone al centro.
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Crediamo che la qualità e la convenienza non debbano mai essere in contraddizione. La nostra promessa è rendere accessibili prodotti affidabili, rispettando chi li produce, chi li vende e l'ambiente che ci ospita.
              </p>
              <a className="btn btn-outline" href="#sostenibilita" onClick={e => { e.preventDefault(); onNavigate('sostenibilita'); }} style={{ marginTop: 32 }}>
                Il nostro impegno
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { t: 'Convenienza vera', d: 'Oltre 5.000 prodotti sempre a prezzo più basso. Senza finte promo.' },
                { t: 'Prossimità', d: 'Un negozio a meno di 15 minuti da 9 italiani su 10.' },
                { t: 'Qualità verificata', d: 'Ogni prodotto controllato prima di entrare nei nostri scaffali.' },
                { t: 'Persone al centro', d: 'Formazione continua, contratti stabili, pari opportunità.' },
              ].map((v, i) => (
                <Reveal key={v.t} delay={i * 80} className="card" style={{ padding: 28 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'var(--as-sky-50)',
                    display: 'grid', placeItems: 'center',
                    marginBottom: 18,
                  }}>
                    <Bubble size={24} />
                  </div>
                  <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>{v.t}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--as-gray-700)', marginTop: 8 }}>{v.d}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INIZIATIVE */}
      <section className="section on-dark" style={{
        background: 'var(--as-blu-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="bubble-deco" style={{ width: 280, height: 280, top: -80, right: -40, opacity: 0.2 }} />
        <div className="bubble-deco" style={{ width: 180, height: 180, bottom: -40, left: 80, opacity: 0.15, animationDelay: '1.2s' }} />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--as-cyan-soft)' }}>Iniziative e campagne</span>
                <h2 className="display-h2" style={{ color: '#fff', marginTop: 12 }}>
                  Progetti che muovono<br />le nostre comunità.
                </h2>
              </div>
              <a href="#iniziative" onClick={e => { e.preventDefault(); onNavigate('iniziative'); }} className="btn btn-ghost-white">
                Tutte le iniziative
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>
            </div>
          </Reveal>
          <div className="grid grid-3">
            {[
              { c: 'in corso', t: 'Spesa Sospesa', d: 'Dal 2019 sosteniamo le famiglie in difficoltà insieme al Banco Alimentare. Oltre 2,4M di pasti donati.' },
              { c: 'in corso', t: 'Plastica in circolo', d: 'Raccogliamo e rigeneriamo i flaconi dei nostri marchi. Nel 2025 l\'80% degli imballaggi è riciclabile.' },
              { c: 'nuovo', t: 'Scuola di Igiene', d: 'Progetto educativo nelle scuole primarie su igiene personale, nutrizione e rispetto dell\'ambiente.' },
            ].map((it, i) => (
              <Reveal key={it.t} delay={i * 80}>
                <a href="#iniziative" onClick={e => { e.preventDefault(); onNavigate('iniziative'); }} style={{
                  display: 'block',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 24,
                  padding: 28,
                  textDecoration: 'none',
                  color: '#fff',
                  transition: 'background 220ms ease, transform 220ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <span className="chip chip-accent" style={{ background: it.c === 'nuovo' ? 'var(--as-rosa-deep)' : 'var(--as-cyan)', color: '#fff' }}>{it.c}</span>
                  <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 28, color: '#fff', marginTop: 20, letterSpacing: '-0.015em' }}>{it.t}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, marginTop: 14, opacity: 0.85 }}>{it.d}</div>
                  <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--as-cyan-soft)' }}>
                    Scopri il progetto <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORE LOCATOR PREVIEW */}
      <section className="section">
        <div className="container">
          <div style={{
            borderRadius: 30,
            overflow: 'hidden',
            background: 'var(--as-sky-50)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            minHeight: 420,
          }}>
            <Reveal style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Eyebrow>Store locator</Eyebrow>
              <h2 className="display-h2" style={{ marginTop: 14 }}>
                Trova il negozio<br />più vicino a te.
              </h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Oltre 800 punti vendita in tutta Italia. Inserisci il tuo CAP per vedere i negozi nelle vicinanze, gli orari e i servizi disponibili.
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 28, maxWidth: 440 }}>
                <div style={{
                  flex: 1, height: 54, borderRadius: 56,
                  background: '#fff', display: 'flex', alignItems: 'center',
                  padding: '0 8px 0 22px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--as-gray-500)', marginRight: 10 }}>search</span>
                  <input
                    type="text" placeholder="CAP, città o indirizzo"
                    style={{ flex: 1, border: 0, background: 'transparent', outline: 'none', fontFamily: 'inherit', fontSize: 15 }}
                  />
                </div>
                <button className="btn btn-primary" onClick={() => onNavigate('negozi')}>Cerca</button>
              </div>
              <div style={{ display: 'flex', gap: 24, marginTop: 28, fontSize: 13, color: 'var(--as-gray-700)', flexWrap: 'wrap' }}>
                <span>✓ Orari aggiornati</span>
                <span>✓ Servizi del negozio</span>
                <span>✓ Navigazione da Google Maps</span>
              </div>
            </Reveal>
            <MapPreview onClick={() => onNavigate('negozi')} />
          </div>
        </div>
      </section>

      {/* NEWS strip */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
            <Reveal>
              <Eyebrow>Sala stampa</Eyebrow>
              <h2 className="display-h2" style={{ marginTop: 12 }}>Ultime notizie</h2>
            </Reveal>
            <a href="#press" onClick={e => { e.preventDefault(); onNavigate('press'); }} className="link-brand">
              Tutte le news →
            </a>
          </div>
          <div className="grid grid-3">
            {[
              { d: '12 Apr 2026', t: 'Apre a Bologna il 820° punto vendita Acqua&Sapone', c: 'Retail' },
              { d: '02 Apr 2026', t: 'Bilancio di Sostenibilità 2025: -22% emissioni, +15% packaging riciclato', c: 'Sostenibilità' },
              { d: '18 Mar 2026', t: 'Nuovo centro logistico a Pomezia: 320 nuovi posti di lavoro', c: 'Persone' },
            ].map((n, i) => (
              <Reveal key={n.t} delay={i * 80}>
                <a href="#press" onClick={e => { e.preventDefault(); onNavigate('press'); }} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    height: 200, borderRadius: 24, overflow: 'hidden',
                    background: i === 0 ? `url(assets/hero-section.jpg) center/cover` :
                                i === 1 ? `linear-gradient(135deg, var(--as-cyan), var(--as-blu))` :
                                `url(assets/banner-bg.png) center/cover`,
                    marginBottom: 18,
                    position: 'relative',
                  }}>
                    {i === 1 && (
                      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
                        <Bubble size={120} style={{ opacity: 0.9 }} />
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 10, fontSize: 12, color: 'var(--as-gray-700)', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Roboto Mono', fontWeight: 700, color: 'var(--palette-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{n.c}</span>
                    <span style={{ opacity: 0.6 }}>•</span>
                    <span>{n.d}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, color: 'var(--as-blu-dark)', marginTop: 10, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{n.t}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLUB CTA */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 30,
            background: `linear-gradient(rgba(25,73,155,0.85), rgba(25,73,155,0.92)), url(assets/bubbles-hero.jpg) center/cover`,
            padding: '64px 56px',
            color: '#fff',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
            alignItems: 'center',
            gap: 40,
          }}>
            <div className="bubble-deco" style={{ width: 160, height: 160, top: -20, right: 60, opacity: 0.4 }} />
            <div className="bubble-deco" style={{ width: 90, height: 90, bottom: 40, right: 220, opacity: 0.5, animationDelay: '1.8s' }} />
            <Reveal>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Il programma fedeltà</span>
              <h2 className="display-h2" style={{ color: '#fff', marginTop: 18 }}>
                Entra nel Club,<br />
                <span style={{ color: 'var(--as-cyan-soft)' }}>ogni spesa vale di più.</span>
              </h2>
              <p className="lede" style={{ color: 'rgba(255,255,255,0.85)', marginTop: 18 }}>
                Raccogli bolle, utilizzale per i tuoi premi preferiti o converti in buoni spesa. Iscrizione gratuita.
              </p>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
              <a className="btn btn-primary" href="#" style={{ padding: '0 36px' }}>iscriviti al club</a>
              <a className="btn btn-ghost-white" href="#">Scopri i vantaggi</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ──────────────────────────────────────────────
// Hero variants
// ──────────────────────────────────────────────
function HeroDefault({ onNavigate }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 120, paddingBottom: 140,
      background: 'radial-gradient(ellipse at 75% 30%, var(--as-sky-100) 0%, #fff 65%)',
      overflow: 'hidden',
    }}>
      <div className="bubble-deco" style={{ width: 220, height: 220, top: 120, right: '8%', opacity: 0.9 }} />
      <div className="bubble-deco" style={{ width: 90, height: 90, top: 320, right: '28%', opacity: 0.7, animationDelay: '1.5s' }} />
      <div className="bubble-deco" style={{ width: 60, height: 60, top: 80, right: '30%', opacity: 0.6, animationDelay: '0.6s' }} />
      <div className="bubble-deco" style={{ width: 140, height: 140, bottom: 60, right: '14%', opacity: 0.55, animationDelay: '2.2s' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 780 }}>
          <Reveal>
            <Eyebrow>Acqua&Sapone — dal 1992</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-h1" style={{ marginTop: 18 }}>
              La cura di ogni giorno,<br />
              <span style={{ color: 'var(--palette-accent)' }}>alla portata di tutti.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 24, fontSize: 20 }}>
              Siamo la più grande rete italiana di negozi di igiene, bellezza e casa. Oltre 800 punti vendita, 12.000 persone, un'unica promessa: prezzi giusti e qualità vera, ogni giorno.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="#chi-siamo" onClick={e => { e.preventDefault(); onNavigate('chi-siamo'); }}>
                Chi siamo
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>
              <a className="btn btn-outline" href="#negozi" onClick={e => { e.preventDefault(); onNavigate('negozi'); }}>
                Trova un negozio
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ onNavigate }) {
  return (
    <section style={{ position: 'relative', padding: '0', overflow: 'hidden' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
        minHeight: 620,
      }}>
        <div style={{
          background: 'linear-gradient(160deg, var(--as-sky-100), #fff 80%)',
          padding: '100px 64px 80px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative',
        }}>
          <Reveal><Eyebrow>Acqua&Sapone — dal 1992</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display-h1" style={{ marginTop: 20 }}>
              Prendersi cura.<br />È il nostro mestiere.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 22, fontSize: 19, maxWidth: 520 }}>
              800 negozi. 12.000 collaboratori. Un network di famiglie, artigiani e imprese che da oltre trent'anni porta qualità e convenienza vicino a ogni casa italiana.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="#chi-siamo" onClick={e => { e.preventDefault(); onNavigate('chi-siamo'); }}>Scopri chi siamo</a>
              <a className="btn btn-outline" href="#negozi" onClick={e => { e.preventDefault(); onNavigate('negozi'); }}>Trova un negozio</a>
            </div>
          </Reveal>
        </div>
        <div style={{
          background: `linear-gradient(rgba(25,73,155,0.25), rgba(25,73,155,0.45)), url(assets/hero-section.jpg) center/cover`,
          position: 'relative',
          minHeight: 520,
        }}>
          <div className="bubble-deco" style={{ width: 160, height: 160, top: '40%', left: '30%', opacity: 0.9 }} />
          <div className="bubble-deco" style={{ width: 80, height: 80, top: '20%', left: '60%', opacity: 0.8, animationDelay: '1.5s' }} />
          <div className="bubble-deco" style={{ width: 100, height: 100, bottom: '15%', right: '20%', opacity: 0.85, animationDelay: '0.8s' }} />
        </div>
      </div>
    </section>
  );
}

function HeroEditorial({ onNavigate }) {
  return (
    <section style={{
      padding: '100px 0 80px',
      background: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <Bubble size={32} />
            <Eyebrow>Dal 1992, ogni giorno in Italia</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-h1" style={{
            fontSize: 'clamp(44px, 8.5vw, 160px)',
            lineHeight: 0.92,
            textWrap: 'balance',
            maxWidth: '100%',
          }}>
            La cura<br />
            dell'<span style={{ color: 'var(--palette-accent)', fontStyle: 'italic', fontWeight: 400 }}>ordinario</span>.
          </h1>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
          gap: 64,
          marginTop: 64,
          alignItems: 'end',
        }}>
          <Reveal delay={160}>
            <p className="lede" style={{ fontSize: 22, maxWidth: 640 }}>
              Siamo convinti che il gesto più ordinario — lavarsi le mani, sistemare la casa, scegliere un sapone — meriti prodotti sinceri, prezzi giusti, negozi puliti. Per questo ci siamo. Da più di trent'anni.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a className="btn btn-primary" href="#chi-siamo" onClick={e => { e.preventDefault(); onNavigate('chi-siamo'); }}>La nostra storia</a>
              <a className="btn btn-outline" href="#sostenibilita" onClick={e => { e.preventDefault(); onNavigate('sostenibilita'); }}>Il nostro impegno</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// Map preview (simplified SVG Italy)
// ──────────────────────────────────────────────
function MapPreview({ onClick }) {
  const dots = useMemo(() => {
    // cluster-ish points over fake Italy bbox
    const seeds = [[0.35,0.12],[0.42,0.08],[0.5,0.14],[0.45,0.22],[0.52,0.26],[0.58,0.30],[0.49,0.34],[0.55,0.38],[0.43,0.40],[0.52,0.44],[0.60,0.46],[0.48,0.52],[0.56,0.55],[0.46,0.60],[0.54,0.64],[0.62,0.62],[0.50,0.70],[0.58,0.74],[0.66,0.72],[0.52,0.80],[0.60,0.84],[0.28,0.90],[0.35,0.88],[0.42,0.93],[0.70,0.78],[0.72,0.68],[0.44,0.70],[0.38,0.74],[0.62,0.54],[0.48,0.46]];
    return seeds;
  }, []);
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        minHeight: 420,
        background: `linear-gradient(rgba(25,73,155,0.04), rgba(25,73,155,0.08)), repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(25,73,155,0.04) 18px, rgba(25,73,155,0.04) 19px)`,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 200 240" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
        {/* stylised Italy blob */}
        <path
          d="M 90 10 Q 110 5 120 15 L 130 30 Q 145 35 140 55 L 135 70 Q 150 75 148 95 L 140 115 Q 155 125 150 145 L 140 165 Q 155 175 150 195 Q 145 210 130 215 L 115 220 Q 105 225 100 220 L 90 215 Q 80 205 85 195 L 95 180 Q 82 170 85 150 L 92 130 Q 80 120 82 100 L 85 80 Q 78 65 85 45 Q 88 25 90 10 Z M 55 220 Q 70 215 75 225 L 80 235 Q 70 240 55 235 Q 45 228 55 220 Z"
          fill="rgba(25,73,155,0.12)"
          stroke="rgba(25,73,155,0.35)"
          strokeWidth="0.8"
        />
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x * 200} cy={y * 240} r={2.2}
            fill="var(--palette-accent)"
            style={{ animation: `float 3s ${i * 0.08}s ease-in-out infinite` }}
          />
        ))}
      </svg>
      <div style={{
        position: 'absolute', top: 20, left: 20, right: 20,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{
          background: '#fff', padding: '10px 16px', borderRadius: 100,
          fontSize: 13, fontWeight: 700, color: 'var(--as-blu)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--palette-accent)' }}>location_on</span>
          820 punti vendita
        </div>
        <div style={{
          background: '#fff', padding: '10px 16px', borderRadius: 100,
          fontSize: 13, fontWeight: 700, color: 'var(--as-blu)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
          20 regioni
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: 20, left: 20,
        background: '#fff', padding: '10px 18px', borderRadius: 100,
        fontSize: 13, fontWeight: 700, color: 'var(--as-blu-dark)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}>
        Apri la mappa
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_outward</span>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Chi siamo / storia
// ──────────────────────────────────────────────
const AboutPage = ({ onNavigate }) => (
  <>
    <section style={{ padding: '100px 0 60px', background: 'var(--as-sky-lo)' }}>
      <div className="container">
        <Reveal><Eyebrow>Chi siamo</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h1 className="display-h1" style={{ marginTop: 18, maxWidth: 900 }}>
            Una storia di famiglia,<br />
            <span style={{ color: 'var(--palette-accent)' }}>scritta in Italia.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lede" style={{ marginTop: 24, fontSize: 20, maxWidth: 780 }}>
            Nati in Abruzzo nel 1992, siamo cresciuti un negozio alla volta. Oggi Acqua&Sapone è la più grande catena italiana di drug-store, ma pensiamo ancora come una bottega: conosciamo i nostri clienti, conosciamo i nostri prodotti.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead eyebrow="La nostra storia" title="Trent'anni, tappa per tappa." />
        <Timeline />
      </div>
    </section>

    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 80, alignItems: 'center' }}>
          <Reveal>
            <img src="assets/hero-section.jpg" alt="" style={{
              width: '100%', aspectRatio: '4/5', objectFit: 'cover',
              borderRadius: 30, boxShadow: '0 16px 40px rgba(25,73,155,0.15)',
            }} />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>La guida</Eyebrow>
            <h2 className="display-h2" style={{ marginTop: 14 }}>
              Una governance familiare,<br />una visione contemporanea.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Il Gruppo è guidato dalla seconda generazione della famiglia fondatrice, affiancata da un comitato esecutivo con competenze internazionali nella grande distribuzione, nella sostenibilità e nell'innovazione digitale.
            </p>
            <div style={{ display: 'flex', gap: 32, marginTop: 32, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 36, fontWeight: 700, color: 'var(--as-blu)', letterSpacing: '-0.02em' }}>42</div>
                <div style={{ fontSize: 13, color: 'var(--as-gray-700)' }}>anni di esperienza retail<br />del comitato</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 36, fontWeight: 700, color: 'var(--as-blu)', letterSpacing: '-0.02em' }}>2</div>
                <div style={{ fontSize: 13, color: 'var(--as-gray-700)' }}>generazioni di famiglia<br />alla guida</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 36, fontWeight: 700, color: 'var(--as-blu)', letterSpacing: '-0.02em' }}>50%</div>
                <div style={{ fontSize: 13, color: 'var(--as-gray-700)' }}>donne nei ruoli<br />dirigenziali</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

function Timeline() {
  const items = [
    { y: '1992', t: 'Il primo negozio', d: 'Apre a Città Sant\'Angelo (PE) il primo negozio Acqua&Sapone. 180mq, 6 collaboratori, un\'idea semplice: tutto ciò che serve per pulire casa, sotto lo stesso tetto.' },
    { y: '1998', t: 'Oltre i confini regionali', d: 'Apertura del 50° punto vendita. Il format si diffonde nel Centro Italia e nel Sud.' },
    { y: '2005', t: 'Il centro logistico', d: 'Nasce a Pomezia il primo centro di distribuzione automatizzato, cuore della rete nazionale.' },
    { y: '2014', t: 'Seconda generazione', d: 'La famiglia fondatrice passa il testimone ai figli. Entra un Comitato Esecutivo con figure manageriali esterne.' },
    { y: '2020', t: 'Servizio alla comunità', d: 'Durante la pandemia, negozi aperti e dipendenti in prima linea. Oltre 2M di prodotti donati a ospedali e RSA.' },
    { y: '2024', t: 'Nasce A&S Club', d: 'Lanciamo il programma fedeltà digitale: oltre 3M di iscritti nel primo anno.' },
    { y: '2026', t: '800° negozio', d: 'Raggiungiamo un traguardo storico: 800 punti vendita in Italia, con la nuova apertura di Bologna Borgo Panigale.' },
  ];
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', left: 140, top: 20, bottom: 20,
        width: 2, background: 'var(--as-sky-50)',
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {items.map((it, i) => (
          <Reveal key={it.y} delay={i * 40} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 40, alignItems: 'flex-start' }}>
            <div style={{
              fontFamily: 'var(--display-font)', fontWeight: 700,
              fontSize: 34, letterSpacing: '-0.02em',
              color: 'var(--palette-accent)',
            }}>{it.y}</div>
            <div style={{ position: 'relative', paddingLeft: 40 }}>
              <div style={{
                position: 'absolute', left: -7, top: 14,
                width: 16, height: 16, borderRadius: '50%',
                background: 'var(--palette-accent)',
                boxShadow: '0 0 0 6px rgba(220,28,131,0.15)',
              }} />
              <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 22, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>{it.t}</div>
              <p style={{ fontSize: 15, color: 'var(--as-gray-700)', marginTop: 8, lineHeight: 1.6, maxWidth: 640 }}>{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Sostenibilità
// ──────────────────────────────────────────────
const SustainabilityPage = () => (
  <>
    <section style={{
      padding: '100px 0 80px',
      background: 'linear-gradient(180deg, var(--as-sky-50), #fff)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="bubble-deco" style={{ width: 260, height: 260, top: 40, right: '6%', opacity: 0.9 }} />
      <div className="bubble-deco" style={{ width: 120, height: 120, top: 200, right: '24%', opacity: 0.7, animationDelay: '1.2s' }} />
      <div className="container" style={{ position: 'relative' }}>
        <Reveal><Eyebrow>Sostenibilità</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h1 className="display-h1" style={{ marginTop: 18, maxWidth: 820 }}>
            Un impegno concreto,<br />
            <span style={{ color: 'var(--palette-accent)' }}>misurato in numeri.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lede" style={{ marginTop: 24, fontSize: 20, maxWidth: 720 }}>
            Pubblichiamo ogni anno il nostro Bilancio di Sostenibilità secondo gli standard GRI. Perché le parole sono importanti, ma i numeri ancora di più.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="#">Scarica il Bilancio 2025
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>download</span>
            </a>
            <a className="btn btn-outline" href="#">Archivio bilanci</a>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="grid grid-3">
          {[
            { v: '-22%', l: 'Emissioni CO₂ scope 1+2 vs 2020', c: '#238719' },
            { v: '80%', l: 'Packaging riciclabile nei marchi propri', c: 'var(--as-cyan)' },
            { v: '100%', l: 'Energia elettrica da fonti rinnovabili', c: 'var(--as-blu)' },
            { v: '2,4M', l: 'Pasti donati con Spesa Sospesa dal 2019', c: 'var(--palette-accent)' },
            { v: '50%', l: 'Donne nei ruoli dirigenziali', c: 'var(--as-rosa)' },
            { v: '98%', l: 'Fornitori italiani per prodotti freschi', c: 'var(--as-blu-dark)' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 60} className="card" style={{ padding: 32 }}>
              <div style={{
                fontFamily: 'var(--display-font)', fontWeight: 700,
                fontSize: 64, lineHeight: 1, color: s.c, letterSpacing: '-0.03em',
              }}>{s.v}</div>
              <div style={{ fontSize: 15, color: 'var(--as-gray-700)', marginTop: 14, lineHeight: 1.5 }}>{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--as-sky-lo)' }}>
      <div className="container">
        <SectionHead eyebrow="I nostri 4 pilastri" title="Come misuriamo l'impatto" />
        <div className="grid grid-2">
          {[
            { t: 'Ambiente', d: 'Riduzione emissioni, economia circolare, packaging riciclabile, logistica a basso impatto.', ps: ['Carbon neutrality entro il 2035', 'Flotta 100% elettrica entro il 2030', 'Zero rifiuti in discarica dai centri logistici'] },
            { t: 'Persone', d: 'Contratti stabili, formazione continua, pari opportunità, sicurezza sul lavoro.', ps: ['95% contratti a tempo indeterminato', '28 ore medie di formazione/anno per persona', 'Politica di welfare estesa ai familiari'] },
            { t: 'Comunità', d: 'Progetti sul territorio, sostegno a realtà fragili, educazione nelle scuole.', ps: ['Spesa Sospesa nei 820 negozi', 'Scuola di Igiene in 240 istituti primari', 'Partnership con Banco Alimentare, Protezione Civile, Emergency'] },
            { t: 'Governance', d: 'Trasparenza, etica, compliance, catena di fornitura responsabile.', ps: ['Codice Etico firmato dal 100% dei fornitori', 'Whistleblowing attivo e indipendente', 'Rating ESG "A-" da MSCI'] },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="card" style={{ padding: 36, height: '100%' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'var(--palette-accent)',
                  display: 'grid', placeItems: 'center', color: '#fff',
                  fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 22,
                  marginBottom: 24,
                }}>
                  {i + 1}
                </div>
                <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 28, color: 'var(--as-blu-dark)', letterSpacing: '-0.015em' }}>{p.t}</div>
                <p style={{ fontSize: 15, color: 'var(--as-gray-700)', marginTop: 12, lineHeight: 1.6 }}>{p.d}</p>
                <ul style={{ margin: '20px 0 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.ps.map(pt => (
                    <li key={pt} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--as-blu-dark)' }}>
                      <span className="material-symbols-outlined" style={{ color: '#238719', fontSize: 18, marginTop: 2 }}>check_circle</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

Object.assign(window, { HomePage, AboutPage, SustainabilityPage, Timeline });
