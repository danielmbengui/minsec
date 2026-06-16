'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  const { t } = useLang();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow} />
      <Reveal className={styles.inner}>
        <h2 className={styles.title}>{t.cta.title}</h2>
        <p className={styles.subtitle}>{t.cta.subtitle}</p>
        <a href="mailto:contact@minsec.ga" className={styles.button}>
          {t.cta.button}
          <span className={styles.arrow}>→</span>
        </a>
      </Reveal>
    </section>
  );
}
