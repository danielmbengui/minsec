'use client';

import { useLang } from '../LangContext';
import styles from './Hero.module.css';
import HexField from './HexField';
import LedgerStrip from './LedgerStrip';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className={styles.hero}>
      <HexField />
      <div className={styles.glow} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>{t.hero.eyebrow}</span>
        <h1 className={styles.title}>
          {t.hero.title.split('\n').map((line, i) => (
            <span key={i} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>

        <div className={styles.ctaRow}>
          <a href="#blockchain" className={styles.ctaPrimary}>
            {t.hero.cta1}
            <span className={styles.ctaArrow}>→</span>
          </a>
          <a href="#vision" className={styles.ctaSecondary}>
            {t.hero.cta2}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{t.hero.stat1Value}</span>
            <span className={styles.statLabel}>{t.hero.stat1Label}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>{t.hero.stat2Value}</span>
            <span className={styles.statLabel}>{t.hero.stat2Label}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>{t.hero.stat3Value}</span>
            <span className={styles.statLabel}>{t.hero.stat3Label}</span>
          </div>
        </div>
      </div>

      <LedgerStrip />
    </section>
  );
}
