'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

const copy = {
  fr: {
    nav: ['Vision', 'Solutions', 'Impact', 'Contact'],
    badge: 'Partenaire de la Transformation Numérique et Blockchain',
    heroTitle: 'Sécuriser la confiance. Tokeniser la valeur. Accélérer le Gabon numérique.',
    heroText: 'MINSEC accompagne les institutions publiques et privées dans la blockchain, les smart contracts, le Web 3.0, l’audit digital et le minage responsable d’actifs numériques.',
    cta: 'Démarrer un projet',
    cta2: 'Explorer les solutions',
    stats: ['Blockchain souveraine', 'Minage responsable', 'Smart contracts', 'Audit digital'],
    visionTitle: 'Une architecture numérique pour l’État, l’économie et les citoyens.',
    visionText: 'Notre vision : renforcer la transparence publique, valoriser les excédents énergétiques, sécuriser les opérations et soutenir la transition technologique des organisations.',
    solutionsTitle: 'Solutions MINSEC',
    solutions: [
      ['Blockchain intégrée', 'Registres immuables, traçabilité financière, certification de documents et interopérabilité avec les systèmes existants.'],
      ['Smart contracts', 'Automatisation des processus critiques : appels d’offres, paiements, contrats, PPP et suivi des engagements.'],
      ['Mining responsable', 'Valorisation d’énergie excédentaire et d’actifs numériques avec une approche stratégique, locale et mesurable.'],
      ['Audit & sécurité digitale', 'Diagnostic, conformité, protection des données sensibles, gouvernance et réduction des risques opérationnels.'],
    ],
    useCasesTitle: 'Cas d’usage à fort impact',
    useCases: ['Finances publiques', 'Santé & dossiers sécurisés', 'Mines et hydrocarbures', 'Logistique & supply chain', 'Cadastre numérique', 'ONG & bailleurs'],
    roadmapTitle: 'De la vision à l’impact',
    phases: ['Sensibilisation & diagnostic', 'Pilotes blockchain', 'Industrialisation souveraine', 'Extension régionale'],
    finalTitle: 'MINSEC transforme le potentiel numérique en infrastructure de confiance.',
    finalText: 'Construisons des systèmes plus transparents, plus sûrs et plus efficaces pour les institutions, les entreprises et les citoyens.',
    contact: 'Contactez MINSEC',
  },
  en: {
    nav: ['Vision', 'Solutions', 'Impact', 'Contact'],
    badge: 'Digital Transformation & Blockchain Partner',
    heroTitle: 'Secure trust. Tokenize value. Accelerate Gabon’s digital future.',
    heroText: 'MINSEC supports public and private organizations with blockchain, smart contracts, Web 3.0, digital audit and responsible digital asset mining.',
    cta: 'Start a project',
    cta2: 'Explore solutions',
    stats: ['Sovereign blockchain', 'Responsible mining', 'Smart contracts', 'Digital audit'],
    visionTitle: 'A digital architecture for the State, the economy and citizens.',
    visionText: 'Our vision: strengthen public transparency, leverage energy surplus, secure operations and support organizations in their technological transition.',
    solutionsTitle: 'MINSEC Solutions',
    solutions: [
      ['Integrated blockchain', 'Immutable ledgers, financial traceability, document certification and interoperability with existing systems.'],
      ['Smart contracts', 'Automation of critical processes: tenders, payments, contracts, PPPs and commitment tracking.'],
      ['Responsible mining', 'Turning surplus energy and digital assets into strategic, local and measurable value.'],
      ['Digital audit & security', 'Assessment, compliance, sensitive data protection, governance and operational risk reduction.'],
    ],
    useCasesTitle: 'High-impact use cases',
    useCases: ['Public finance', 'Healthcare & secure records', 'Mining and hydrocarbons', 'Logistics & supply chain', 'Digital land registry', 'NGOs & donors'],
    roadmapTitle: 'From vision to impact',
    phases: ['Awareness & diagnosis', 'Blockchain pilots', 'Sovereign industrialization', 'Regional expansion'],
    finalTitle: 'MINSEC turns digital potential into trust infrastructure.',
    finalText: 'Let’s build more transparent, secure and efficient systems for institutions, businesses and citizens.',
    contact: 'Contact MINSEC',
  },
}

function ChainAnimation() {
  return (
    <div className="chain-scene" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => <span key={i} className={`node node-${i}`} />)}
      <div className="cube cube-a" />
      <div className="cube cube-b" />
      <div className="cube cube-c" />
      <div className="hash-card">SHA-256<br /><b>0x7F...A91</b></div>
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState('fr')
  const t = useMemo(() => copy[lang], [lang])

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#top" aria-label="MINSEC">
          <Image src="/minsec-logo.jpeg" alt="MINSEC" width={160} height={96} priority />
        </a>
        <nav>
          {t.nav.map((item, index) => <a key={item} href={`#${['vision', 'solutions', 'impact', 'contact'][index]}`}>{item}</a>)}
        </nav>
        <button className="lang" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>{lang === 'fr' ? 'EN' : 'FR'}</button>
      </header>

      <section id="top" className="hero section">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="hero-copy reveal">
          <p className="eyebrow">{t.badge}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lead">{t.heroText}</p>
          <div className="actions">
            <a className="btn primary" href="#contact">{t.cta}</a>
            <a className="btn ghost" href="#solutions">{t.cta2}</a>
          </div>
          <div className="ticker">
            {t.stats.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
        <ChainAnimation />
      </section>

      <section id="vision" className="section split">
        <div className="panel reveal">
          <p className="eyebrow">MINSEC / VISION</p>
          <h2>{t.visionTitle}</h2>
          <p>{t.visionText}</p>
        </div>
        <div className="security-card reveal">
          <div className="lock">⌬</div>
          <p>BLOCKCHAIN LEDGER</p>
          <code>block_001 → block_002 → block_003</code>
        </div>
      </section>

      <section id="solutions" className="section">
        <div className="section-head reveal">
          <p className="eyebrow">WEB3 / SECURITY / MINING</p>
          <h2>{t.solutionsTitle}</h2>
        </div>
        <div className="grid">
          {t.solutions.map(([title, text], index) => (
            <article className="card reveal" key={title} style={{ '--delay': `${index * 80}ms` }}>
              <span className="card-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="section impact">
        <div className="section-head reveal">
          <p className="eyebrow">USE CASES</p>
          <h2>{t.useCasesTitle}</h2>
        </div>
        <div className="chips reveal">
          {t.useCases.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="roadmap reveal">
          <h2>{t.roadmapTitle}</h2>
          {t.phases.map((p, i) => <div className="phase" key={p}><b>0{i + 1}</b><span>{p}</span></div>)}
        </div>
      </section>

      <section id="contact" className="section final reveal">
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
        <a className="btn primary" href="mailto:contact@minsec.ga">{t.contact}</a>
      </section>
    </main>
  )
}
