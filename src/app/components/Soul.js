'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Soul.module.css';

export default function Soul() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.sealCol}>
          <div className={styles.seal}>
            <svg viewBox="0 0 200 200" className={styles.sealSvg}>
              <circle cx="100" cy="100" r="92" className={styles.sealRingOuter} />
              <circle cx="100" cy="100" r="78" className={styles.sealRingInner} />
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * 2 * Math.PI;
                const x1 = 100 + 84 * Math.cos(angle);
                const y1 = 100 + 84 * Math.sin(angle);
                const x2 = 100 + 92 * Math.cos(angle);
                const y2 = 100 + 92 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={styles.tick}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                );
              })}
              <g className={styles.lock}>
                <rect x="72" y="96" width="56" height="46" rx="6" className={styles.lockBody} />
                <path
                  d="M82 96 V78 a18 18 0 0 1 36 0 V96"
                  className={styles.lockShackle}
                  fill="none"
                />
                <circle cx="100" cy="118" r="6" className={styles.lockKeyhole} />
              </g>
            </svg>
          </div>
        </Reveal>

        <Reveal className={styles.textCol} delay={0.1}>
          <span className={styles.eyebrow}>{t.soul.eyebrow}</span>
          <h2 className={styles.title}>{t.soul.title}</h2>
          <p className={styles.body}>{t.soul.body}</p>

          <div className={styles.points}>
            {t.soul.points.map((p, i) => (
              <div key={i} className={styles.point}>
                <span className={styles.pointLabel}>{p.label}</span>
                <span className={styles.pointArrow}>→</span>
                <span className={styles.pointValue}>{p.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
