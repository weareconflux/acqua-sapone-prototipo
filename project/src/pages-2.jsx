// Page 2/2: Negozi, Iniziative, Lavora con noi, Press, Contatti

// ──────────────────────────────────────────────
// Store locator (interactive list + fake map)
// ──────────────────────────────────────────────
const STORES = [
  { n: 'Roma — Prati', a: 'Via Cola di Rienzo 210, 00192 Roma', h: '08:30 — 21:00', s: ['Parcheggio', 'Profumeria', 'Pet'], r: 'Lazio', city: 'Roma' },
  { n: 'Milano — Porta Romana', a: 'Corso Lodi 34, 20135 Milano', h: '09:00 — 20:30', s: ['Profumeria', 'Consegna a domicilio'], r: 'Lombardia', city: 'Milano' },
  { n: 'Bologna — Borgo Panigale', a: 'Via Emilia Ponente 287, 40132 Bologna', h: '08:30 — 21:00', s: ['Parcheggio', 'Pet', 'Bio'], r: 'Emilia-Romagna', city: 'Bologna' },
  { n: 'Napoli — Vomero', a: 'Via Luca Giordano 65, 80127 Napoli', h: '09:00 — 20:00', s: ['Profumeria'], r: 'Campania', city: 'Napoli' },
  { n: 'Torino — San Paolo', a: 'Via Monginevro 118, 10141 Torino', h: '08:30 — 20:30', s: ['Parcheggio', 'Pet'], r: 'Piemonte', city: 'Torino' },
  { n: 'Palermo — Notarbartolo', a: 'Via L. Notarbartolo 49, 90141 Palermo', h: '09:00 — 20:30', s: ['Profumeria', 'Parcheggio'], r: 'Sicilia', city: 'Palermo' },
  { n: 'Firenze — Novoli', a: 'Via di Novoli 39, 50127 Firenze', h: '08:30 — 21:00', s: ['Parcheggio', 'Pet', 'Bio'], r: 'Toscana', city: 'Firenze' },
  { n: 'Bari — Japigia', a: 'Via Caldarola 3, 70126 Bari', h: '08:30 — 20:30', s: ['Parcheggio'], r: 'Puglia', city: 'Bari' },
];

const StoreLocatorPage = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('Tutte');
  const [selected, setSelected] = useState(0);
  const regions = ['Tutte', ...Array.from(new Set(STORES.map(s => s.r)))];
  const filtered = STORES.filter(s =>
    (region === 'Tutte' || s.r === region) &&
    (query === '' || (s.n + ' ' + s.a + ' ' + s.city).toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <section style={{ padding: '80px 0 40px', background: 'var(--as-sky-lo)' }}>
        <div className="container">
          <Reveal><Eyebrow>Punti vendita</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display-h1" style={{ marginTop: 18, maxWidth: 900 }}>
              Trova il negozio<br />più vicino a te.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 20, fontSize: 20 }}>
              820 punti vendita in 20 regioni. Cerca per città, CAP o indirizzo.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 420px) minmax(0, 1fr)', gap: 32, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <div style={{
                  flex: 1, height: 54, borderRadius: 56,
                  background: '#fff', border: '1px solid var(--as-gray-200)',
                  display: 'flex', alignItems: 'center', padding: '0 8px 0 22px',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--as-gray-500)', marginRight: 10 }}>search</span>
                  <input
                    value={query} onChange={e => setQuery(e.target.value)}
                    placeholder="Cerca città, CAP, indirizzo"
                    style={{ flex: 1, border: 0, background: 'transparent', outline: 'none', fontFamily: 'inherit', fontSize: 15 }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {regions.map(r => (
                  <button key={r} onClick={() => setRegion(r)} style={{
                    padding: '8px 16px', borderRadius: 100,
                    border: 0, fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    background: region === r ? 'var(--as-blu)' : 'var(--as-sky-50)',
                    color: region === r ? '#fff' : 'var(--as-blu)',
                    transition: 'all 160ms ease',
                  }}>{r}</button>
                ))}
              </div>
              <div style={{ fontSize: 13, color: 'var(--as-gray-700)', marginBottom: 12 }}>
                {filtered.length} {filtered.length === 1 ? 'negozio' : 'negozi'} trovati
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 560, overflowY: 'auto', paddingRight: 4 }}>
                {filtered.map((s, i) => (
                  <button key={s.n} onClick={() => setSelected(STORES.indexOf(s))} style={{
                    textAlign: 'left', cursor: 'pointer',
                    background: STORES.indexOf(s) === selected ? '#fff' : 'var(--as-gray-200)',
                    padding: 20, borderRadius: 16,
                    border: STORES.indexOf(s) === selected ? '2px solid var(--palette-accent)' : '2px solid transparent',
                    transition: 'all 180ms ease', fontFamily: 'inherit',
                  }}>
                    <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 16, color: 'var(--as-blu-dark)' }}>{s.n}</div>
                    <div style={{ fontSize: 13, color: 'var(--as-gray-700)', marginTop: 4 }}>{s.a}</div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                      {s.s.map(tag => (
                        <span key={tag} style={{
                          fontSize: 11, padding: '3px 10px', borderRadius: 100,
                          background: 'var(--as-sky-50)', color: 'var(--as-blu)', fontWeight: 600,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div style={{ padding: 32, textAlign: 'center', color: 'var(--as-gray-500)', fontSize: 14 }}>
                    Nessun negozio trovato. Prova con un'altra ricerca.
                  </div>
                )}
              </div>
            </div>
            <div style={{
              position: 'sticky', top: 100,
              height: 620, borderRadius: 24, overflow: 'hidden',
              background: `linear-gradient(rgba(25,73,155,0.04), rgba(25,73,155,0.08)), repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(25,73,155,0.04) 18px, rgba(25,73,155,0.04) 19px)`,
            }}>
              <svg viewBox="0 0 200 240" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
                <path
                  d="M 90 10 Q 110 5 120 15 L 130 30 Q 145 35 140 55 L 135 70 Q 150 75 148 95 L 140 115 Q 155 125 150 145 L 140 165 Q 155 175 150 195 Q 145 210 130 215 L 115 220 Q 105 225 100 220 L 90 215 Q 80 205 85 195 L 95 180 Q 82 170 85 150 L 92 130 Q 80 120 82 100 L 85 80 Q 78 65 85 45 Q 88 25 90 10 Z"
                  fill="rgba(25,73,155,0.10)" stroke="rgba(25,73,155,0.35)" strokeWidth="0.8"
                />
                {STORES.map((s, i) => {
                  const coords = [[110,50],[95,45],[115,75],[125,130],[90,38],[135,180],[108,85],[145,135]];
                  const [x, y] = coords[i];
                  const active = i === selected;
                  return (
                    <g key={s.n} onClick={() => setSelected(i)} style={{ cursor: 'pointer' }}>
                      <circle cx={x} cy={y} r={active ? 6 : 3} fill="var(--palette-accent)"
                        style={{ transition: 'r 200ms ease', filter: active ? 'drop-shadow(0 0 6px rgba(220,28,131,0.6))' : 'none' }}
                      />
                      {active && <circle cx={x} cy={y} r="12" fill="none" stroke="var(--palette-accent)" strokeWidth="1.5" opacity="0.5" />}
                    </g>
                  );
                })}
              </svg>
              <div style={{
                position: 'absolute', bottom: 20, left: 20, right: 20,
                background: '#fff', padding: 24, borderRadius: 20,
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              }}>
                <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, color: 'var(--as-blu-dark)' }}>{STORES[selected].n}</div>
                <div style={{ fontSize: 13, color: 'var(--as-gray-700)', marginTop: 4 }}>{STORES[selected].a}</div>
                <div style={{ display: 'flex', gap: 24, fontSize: 13, marginTop: 12, color: 'var(--as-blu-dark)' }}>
                  <span><strong>Orari:</strong> {STORES[selected].h}</span>
                  <span>Lun-Dom</span>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  <a className="btn btn-primary btn-sm" href="#">Indicazioni</a>
                  <a className="btn btn-outline btn-sm" href="#">Dettagli</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ──────────────────────────────────────────────
// Iniziative
// ──────────────────────────────────────────────
const InitiativesPage = () => (
  <>
    <section style={{ padding: '100px 0 80px', background: 'var(--as-sky-lo)' }}>
      <div className="container">
        <Reveal><Eyebrow>Iniziative e campagne</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h1 className="display-h1" style={{ marginTop: 18, maxWidth: 860 }}>
            Ogni negozio è un pezzo di<br />
            <span style={{ color: 'var(--palette-accent)' }}>comunità.</span>
          </h1>
        </Reveal>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="grid grid-2" style={{ rowGap: 60 }}>
          {[
            { c: 'sociale', t: 'Spesa Sospesa', y: 'Dal 2019', d: 'Ogni cliente può donare alla cassa prodotti di prima necessità, che il Banco Alimentare distribuisce a famiglie fragili. Nel 2025 abbiamo donato oltre 410.000 pasti.', bg: `url(assets/hero-section.jpg) center/cover` },
            { c: 'ambiente', t: 'Plastica in circolo', y: 'Dal 2022', d: 'Raccolta post-consumo dei flaconi dei nostri marchi propri: macinati, rigenerati e reinseriti nella produzione. 1.200 tonnellate rigenerate nel 2025.', bg: 'linear-gradient(135deg, var(--as-cyan), var(--as-blu))' },
            { c: 'educazione', t: 'Scuola di Igiene', y: 'Dal 2024', d: 'Progetto didattico gratuito per la scuola primaria su igiene personale, nutrizione, rispetto dell\'ambiente. 240 istituti coinvolti, 38.000 bambini.', bg: `url(assets/banner-bg.png) center/cover` },
            { c: 'territorio', t: 'Negozio di Quartiere', y: 'Dal 2023', d: 'Partnership con le amministrazioni locali per aprire negozi dove il commercio di prossimità si sta perdendo. 42 aperture in piccoli centri nel 2025.', bg: 'linear-gradient(135deg, var(--as-rosa-pink), var(--as-rosa-deep))' },
          ].map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <article style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 24 }}>
                <div style={{
                  height: 240, borderRadius: 24, background: it.bg,
                  position: 'relative',
                }}>
                  <span className="chip chip-accent" style={{ position: 'absolute', top: 16, left: 16, background: '#fff', color: 'var(--palette-accent)' }}>{it.c}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Roboto Mono', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--as-gray-700)', textTransform: 'uppercase' }}>{it.y}</div>
                  <h3 style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 32, color: 'var(--as-blu-dark)', marginTop: 8, letterSpacing: '-0.015em' }}>{it.t}</h3>
                  <p style={{ fontSize: 16, color: 'var(--as-gray-700)', marginTop: 12, lineHeight: 1.6 }}>{it.d}</p>
                  <a className="link-brand" href="#" style={{ marginTop: 16, display: 'inline-block' }}>Approfondisci →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

// ──────────────────────────────────────────────
// Lavora con noi
// ──────────────────────────────────────────────
const CareersPage = () => {
  const [dept, setDept] = useState('Tutti');
  const jobs = [
    { t: 'Store Manager', d: 'Retail', l: 'Milano', type: 'Tempo indeterminato' },
    { t: 'Addetto/a vendita', d: 'Retail', l: 'Roma, Napoli, Bologna (+12 sedi)', type: 'Tempo indeterminato' },
    { t: 'Buyer Private Label', d: 'Acquisti', l: 'Pescara', type: 'Tempo indeterminato' },
    { t: 'Data Engineer', d: 'Digital', l: 'Milano / Remote', type: 'Tempo indeterminato' },
    { t: 'Product Designer — A&S Club', d: 'Digital', l: 'Milano / Remote', type: 'Tempo indeterminato' },
    { t: 'Operatore/trice logistica', d: 'Logistica', l: 'Pomezia, Piacenza', type: 'Tempo indeterminato' },
    { t: 'HR Business Partner Sud', d: 'Persone', l: 'Napoli', type: 'Tempo indeterminato' },
    { t: 'Sustainability Analyst', d: 'Sostenibilità', l: 'Pescara / Remote', type: 'Tempo indeterminato' },
  ];
  const depts = ['Tutti', ...Array.from(new Set(jobs.map(j => j.d)))];
  const filtered = jobs.filter(j => dept === 'Tutti' || j.d === dept);
  return (
    <>
      <section style={{ padding: '100px 0 80px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="bubble-deco" style={{ width: 200, height: 200, top: 60, right: '10%', opacity: 0.85 }} />
        <div className="bubble-deco" style={{ width: 90, height: 90, top: 240, right: '28%', opacity: 0.7, animationDelay: '1.4s' }} />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal><Eyebrow>Lavora con noi</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display-h1" style={{ marginTop: 18, maxWidth: 860 }}>
              Fare la differenza,<br />
              <span style={{ color: 'var(--palette-accent)' }}>ogni giorno.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 24, fontSize: 20, maxWidth: 720 }}>
              Cerchiamo persone che vogliano crescere con noi. Negozi, centri logistici, sede, digital: ovunque tu sia, c'è un posto.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="grid grid-4" style={{ marginBottom: 64 }}>
            {[
              { v: '12.000+', l: 'Persone in azienda' },
              { v: '95%', l: 'Contratti a tempo indeterminato' },
              { v: '28 h', l: 'Formazione media per persona/anno' },
              { v: '4,6/5', l: 'Indice clima aziendale 2025' },
            ].map((s, i) => <Stat key={s.l} value={s.v} label={s.l} delay={i * 80} />)}
          </div>

          <SectionHead eyebrow="Posizioni aperte" title="Cerchiamo te." />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {depts.map(d => (
              <button key={d} onClick={() => setDept(d)} style={{
                padding: '10px 18px', borderRadius: 100,
                border: 0, fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                background: dept === d ? 'var(--as-blu)' : 'var(--as-sky-50)',
                color: dept === d ? '#fff' : 'var(--as-blu)',
                transition: 'all 160ms ease',
              }}>{d}</button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--as-gray-200)' }}>
            {filtered.map((j) => (
              <a href="#" key={j.t} style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr auto',
                gap: 24, alignItems: 'center',
                padding: '24px 12px',
                borderBottom: '1px solid var(--as-gray-200)',
                textDecoration: 'none',
                transition: 'background 160ms ease, padding 160ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--as-sky-lo)'; e.currentTarget.style.paddingLeft = '24px'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '12px'; }}
              >
                <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>{j.t}</div>
                <div style={{ fontSize: 14, color: 'var(--palette-accent)', fontWeight: 700 }}>{j.d}</div>
                <div style={{ fontSize: 14, color: 'var(--as-gray-700)' }}>{j.l}</div>
                <div style={{ fontSize: 13, color: 'var(--as-gray-700)' }}>{j.type}</div>
                <span className="material-symbols-outlined" style={{ color: 'var(--palette-accent)' }}>arrow_forward</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 40, padding: 40, background: 'var(--as-sky-lo)', borderRadius: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 22, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>Non trovi la tua posizione?</div>
              <div style={{ fontSize: 15, color: 'var(--as-gray-700)', marginTop: 6 }}>Invia la tua candidatura spontanea: la guardiamo tutti i lunedì.</div>
            </div>
            <a className="btn btn-primary" href="#">Candidatura spontanea</a>
          </div>
        </div>
      </section>
    </>
  );
};

// ──────────────────────────────────────────────
// Press
// ──────────────────────────────────────────────
const PressPage = () => {
  const news = [
    { d: '12 Apr 2026', c: 'Retail', t: 'Apre a Bologna il 820° punto vendita Acqua&Sapone', dd: 'Con la nuova apertura di Borgo Panigale, il gruppo consolida la presenza in Emilia-Romagna e supera la soglia storica degli 800 negozi.' },
    { d: '02 Apr 2026', c: 'Sostenibilità', t: 'Bilancio di Sostenibilità 2025: -22% emissioni, +15% packaging riciclato', dd: 'Pubblicato il 4° Bilancio di Sostenibilità. Obiettivi 2030 confermati, carbon neutrality target 2035.' },
    { d: '18 Mar 2026', c: 'Persone', t: 'Nuovo centro logistico a Pomezia: 320 nuovi posti di lavoro', dd: 'L\'investimento da 85M€ porterà il centro distribuzione del Centro-Sud alla piena automazione entro il 2027.' },
    { d: '02 Mar 2026', c: 'Digital', t: 'A&S Club supera i 3,2 milioni di iscritti', dd: 'A un anno dal lancio, il programma fedeltà digitale diventa uno dei più usati nel retail italiano.' },
    { d: '12 Feb 2026', c: 'Sociale', t: 'Spesa Sospesa: 410.000 pasti donati nel 2025', dd: 'La partnership con il Banco Alimentare prosegue con risultati in forte crescita.' },
  ];
  return (
    <>
      <section style={{ padding: '100px 0 60px', background: '#fff' }}>
        <div className="container">
          <Reveal><Eyebrow>Sala stampa</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display-h1" style={{ marginTop: 18 }}>News, comunicati<br />e materiali per la stampa.</h1>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {news.map((n, i) => (
                <Reveal key={n.t} delay={i * 40}>
                  <a href="#" style={{
                    display: 'grid', gridTemplateColumns: '160px 1fr', gap: 32,
                    padding: '32px 0', textDecoration: 'none',
                    borderTop: i === 0 ? '1px solid var(--as-gray-200)' : 'none',
                    borderBottom: '1px solid var(--as-gray-200)',
                  }}>
                    <div>
                      <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 16, color: 'var(--palette-accent)' }}>{n.d.split(' ')[0]} {n.d.split(' ')[1]}</div>
                      <div style={{ fontSize: 13, color: 'var(--as-gray-700)' }}>{n.d.split(' ')[2]}</div>
                      <span className="chip" style={{ marginTop: 10, padding: '4px 12px', fontSize: 11 }}>{n.c}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 26, color: 'var(--as-blu-dark)', letterSpacing: '-0.015em' }}>{n.t}</h3>
                      <p style={{ fontSize: 15, color: 'var(--as-gray-700)', marginTop: 10, lineHeight: 1.6, maxWidth: 640 }}>{n.dd}</p>
                      <span className="link-brand" style={{ marginTop: 14, display: 'inline-block' }}>Leggi il comunicato →</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <aside style={{ position: 'sticky', top: 110, alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ padding: 28, background: 'var(--as-sky-lo)', borderRadius: 20 }}>
                <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>Ufficio stampa</div>
                <p style={{ fontSize: 14, color: 'var(--as-gray-700)', marginTop: 10, lineHeight: 1.6 }}>Per interviste, richieste di materiale o interlocuzioni editoriali.</p>
                <div style={{ fontSize: 14, color: 'var(--as-blu-dark)', marginTop: 16, fontWeight: 700 }}>press@acquaesapone.it</div>
                <div style={{ fontSize: 14, color: 'var(--as-gray-700)' }}>+39 085 123 4567</div>
              </div>
              <div style={{ padding: 28, background: 'var(--as-blu-dark)', color: '#fff', borderRadius: 20 }}>
                <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em' }}>Media kit</div>
                <p style={{ fontSize: 14, opacity: 0.85, marginTop: 10, lineHeight: 1.6 }}>Logo, immagini ad alta risoluzione, fact sheet e profili dirigenziali.</p>
                <a className="btn btn-white btn-sm" href="#" style={{ marginTop: 16 }}>Scarica (28 MB)
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// ──────────────────────────────────────────────
// Contatti
// ──────────────────────────────────────────────
const ContactPage = () => {
  const [topic, setTopic] = useState('generale');
  const [form, setForm] = useState({ n: '', e: '', m: '' });
  const [sent, setSent] = useState(false);
  const topics = [
    { id: 'generale', t: 'Informazioni generali' },
    { id: 'negozio', t: 'Un negozio specifico' },
    { id: 'prodotto', t: 'Un prodotto' },
    { id: 'press', t: 'Stampa e media' },
    { id: 'fornitori', t: 'Proposta fornitore' },
    { id: 'club', t: 'A&S Club' },
  ];
  return (
    <>
      <section style={{ padding: '100px 0 60px', background: 'var(--as-sky-lo)' }}>
        <div className="container">
          <Reveal><Eyebrow>Contatti</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display-h1" style={{ marginTop: 18 }}>Parliamone.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede" style={{ marginTop: 20, fontSize: 20 }}>
              Rispondiamo entro 2 giorni lavorativi. Per urgenze in negozio, chiama il nostro servizio clienti.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 64 }}>
            <div>
              <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 28, color: 'var(--as-blu-dark)', letterSpacing: '-0.015em', marginBottom: 24 }}>Scrivici</div>
              {sent ? (
                <div style={{ padding: 40, background: '#fff', borderRadius: 24, textAlign: 'center', border: '1px solid var(--as-gray-200)' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(35,135,25,0.12)', color: '#238719',
                    display: 'grid', placeItems: 'center', margin: '0 auto 20px',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 36 }}>check</span>
                  </div>
                  <div style={{ fontFamily: 'var(--display-font)', fontSize: 22, fontWeight: 700, color: 'var(--as-blu-dark)' }}>Grazie, {form.n.split(' ')[0] || 'a te'}!</div>
                  <p style={{ fontSize: 15, color: 'var(--as-gray-700)', marginTop: 10 }}>Abbiamo ricevuto la tua richiesta. Ti risponderemo all'indirizzo {form.e || 'che ci hai fornito'} entro 2 giorni lavorativi.</p>
                  <button className="btn btn-outline" style={{ marginTop: 20 }} onClick={() => { setSent(false); setForm({ n: '', e: '', m: '' }); }}>Invia un'altra richiesta</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 200, behavior: 'smooth' }); }}>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontFamily: 'Roboto Mono', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--as-gray-700)' }}>Di cosa vuoi parlare?</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                      {topics.map(t => (
                        <button key={t.id} type="button" onClick={() => setTopic(t.id)} style={{
                          padding: '10px 18px', borderRadius: 100,
                          border: topic === t.id ? '1.5px solid var(--as-blu)' : '1.5px solid var(--as-gray-200)',
                          background: topic === t.id ? 'var(--as-blu)' : '#fff',
                          color: topic === t.id ? '#fff' : 'var(--as-blu)',
                          fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                          transition: 'all 160ms ease',
                        }}>{t.t}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <TextField label="Nome e cognome" required value={form.n} onChange={v => setForm(f => ({ ...f, n: v }))} />
                    <TextField label="Email" required type="email" value={form.e} onChange={v => setForm(f => ({ ...f, e: v }))} />
                  </div>
                  <TextField label="Messaggio" textarea required value={form.m} onChange={v => setForm(f => ({ ...f, m: v }))} />
                  <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 16, fontSize: 13, color: 'var(--as-gray-700)' }}>
                    <input type="checkbox" required style={{ marginTop: 3 }} />
                    Ho letto la <a className="link-brand" href="#" style={{ fontSize: 13 }}>Privacy Policy</a> e acconsento al trattamento dei miei dati.
                  </label>
                  <button className="btn btn-primary" type="submit" style={{ marginTop: 24 }}>
                    Invia richiesta
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                  </button>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { i: 'support_agent', t: 'Servizio clienti', l1: '800 123 456', l2: 'Numero verde, Lun-Ven 9-19', c: 'Gratuito da fisso e mobile' },
                { i: 'mail', t: 'Email', l1: 'info@acquaesapone.it', l2: 'Per richieste di informazioni' },
                { i: 'newspaper', t: 'Ufficio stampa', l1: 'press@acquaesapone.it', l2: '+39 085 123 4567' },
                { i: 'work', t: 'Lavora con noi', l1: 'careers@acquaesapone.it', l2: 'Candidature spontanee' },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 60}>
                  <div style={{
                    padding: 24, borderRadius: 20,
                    background: '#fff', border: '1px solid var(--as-gray-200)',
                    display: 'flex', gap: 18, alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'var(--as-sky-50)',
                      display: 'grid', placeItems: 'center',
                      flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--as-blu)', fontSize: 24 }}>{c.i}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 18, color: 'var(--as-blu-dark)', letterSpacing: '-0.01em' }}>{c.t}</div>
                      <div style={{ fontSize: 15, color: 'var(--as-blu)', fontWeight: 700, marginTop: 6 }}>{c.l1}</div>
                      <div style={{ fontSize: 13, color: 'var(--as-gray-700)', marginTop: 2 }}>{c.l2}</div>
                      {c.c && <div style={{ fontSize: 12, color: 'var(--as-gray-500)', marginTop: 6 }}>{c.c}</div>}
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal>
                <div style={{ padding: 24, borderRadius: 20, background: 'var(--as-blu-dark)', color: '#fff' }}>
                  <div style={{ fontFamily: 'var(--display-font)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>Sede Legale</div>
                  <div style={{ fontSize: 14, opacity: 0.85, marginTop: 10, lineHeight: 1.6 }}>
                    Acqua&Sapone Italia S.p.A.<br />
                    Via del Commercio 42<br />
                    65129 Pescara (PE)
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function TextField({ label, value, onChange, type = 'text', textarea, required }) {
  const [focus, setFocus] = useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'Roboto Mono', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--as-gray-700)' }}>
        {label}{required && <span style={{ color: 'var(--palette-accent)', marginLeft: 4 }}>*</span>}
      </span>
      <Tag
        type={type}
        rows={textarea ? 5 : undefined}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          padding: textarea ? '16px 18px' : '14px 18px',
          borderRadius: 12,
          background: 'var(--as-gray-200)',
          border: 0,
          outline: focus ? '2px solid var(--as-blu)' : 'none',
          fontFamily: 'inherit', fontSize: 15,
          resize: textarea ? 'vertical' : 'none',
          transition: 'outline-color 160ms ease',
        }}
      />
    </label>
  );
}

Object.assign(window, {
  StoreLocatorPage, InitiativesPage, CareersPage, PressPage, ContactPage,
});
