'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Vision.module.css';

export default function Vision() {
  const { t } = useLang();

  return (
    <section id="vision" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>{t.vision.eyebrow}</span>
          <h2 className={styles.title}>{t.vision.title}</h2>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.items}>
            {t.vision.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={styles.item}>
                  <span className={styles.itemMark} />
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <blockquote className={styles.quote}>
              <span className={styles.quoteMark}>“</span>
              <p>{t.vision.quote}</p>
              <cite>{t.vision.quoteAuthor}</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
