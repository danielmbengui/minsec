'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Mining.module.css';

export default function Mining() {
  const { t } = useLang();

  return (
    <section id="mining" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{t.mining.eyebrow}</span>
          <h2 className={styles.title}>{t.mining.title}</h2>
          <p className={styles.intro}>{t.mining.intro}</p>
        </Reveal>

        <div className={styles.cases}>
          {t.mining.cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.tag}>{c.tag}</span>
                  <RigIcon />
                </div>
                <h3 className={styles.cardName}>{c.name}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <div className={styles.metrics}>
                  {c.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className={styles.impact}>
            <h3 className={styles.impactTitle}>{t.mining.impact.title}</h3>
            <div className={styles.impactItems}>
              {t.mining.impact.items.map((item) => (
                <span key={item} className={styles.impactChip}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RigIcon() {
  return (
    <svg viewBox="0 0 32 32" className={styles.rig} aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="3" className={styles.rigBody} />
      <circle cx="12" cy="16" r="5" className={styles.rigFan} />
      <circle cx="22" cy="16" r="5" className={styles.rigFan} style={{ animationDelay: '0.4s' }} />
    </svg>
  );
}
