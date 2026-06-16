'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Blockchain.module.css';

export default function Blockchain() {
  const { t } = useLang();

  return (
    <section id="blockchain" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{t.blockchain.eyebrow}</span>
          <h2 className={styles.title}>{t.blockchain.title}</h2>
        </Reveal>

        <div className={styles.reasons}>
          {t.blockchain.reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.06}>
              <div className={styles.reason}>
                <span className={styles.reasonNum}>{r.n}</span>
                <div>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p className={styles.reasonBody}>{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className={styles.sectorsHead}>
            <h3 className={styles.sectorsTitle}>{t.blockchain.sectors.title}</h3>
          </div>
        </Reveal>

        <div className={styles.sectorGrid}>
          {t.blockchain.sectors.items.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className={styles.sectorCard}>
                <span className={styles.sectorHex} />
                <h4 className={styles.sectorName}>{s.name}</h4>
                <p className={styles.sectorDesc}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
