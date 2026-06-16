'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Audit.module.css';

export default function Audit() {
  const { t } = useLang();

  return (
    <section id="audit" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{t.audit.eyebrow}</span>
          <h2 className={styles.title}>{t.audit.title}</h2>
          <p className={styles.body}>{t.audit.body}</p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={0.1}>
            <div className={styles.table}>
              {t.audit.types.map((type) => (
                <div key={type.name} className={styles.row}>
                  <span className={styles.rowName}>{type.name}</span>
                  <span className={styles.rowFreq}>{type.freq}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className={styles.standards}>
              <h3 className={styles.standardsTitle}>Référentiels</h3>
              <div className={styles.standardsList}>
                {t.audit.standards.map((s) => (
                  <span key={s} className={styles.standardChip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
