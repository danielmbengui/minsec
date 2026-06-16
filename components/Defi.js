'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Defi.module.css';

export default function Defi() {
  const { t } = useLang();

  return (
    <section id="defi" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.intro}>
          <span className={styles.eyebrow}>{t.defi.eyebrow}</span>
          <h2 className={styles.title}>{t.defi.title}</h2>
          <p className={styles.body}>{t.defi.body}</p>

          <div className={styles.pillars}>
            {t.defi.pillars.map((p) => (
              <span key={p} className={styles.pillar}>
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <div className={styles.useGrid}>
          <Reveal delay={0.1}>
            <div className={styles.useCard}>
              <h3 className={styles.useTitle}>{t.defi.usePublic.title}</h3>
              <ul className={styles.useList}>
                {t.defi.usePublic.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className={styles.useCard}>
              <h3 className={styles.useTitle}>{t.defi.usePrivate.title}</h3>
              <ul className={styles.useList}>
                {t.defi.usePrivate.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
