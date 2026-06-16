'use client';

import { useLang } from '../LangContext';
import Reveal from './Reveal';
import styles from './Comparison.module.css';

export default function Comparison() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>{t.comparison.title}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.table}>
            <div className={styles.headRow}>
              <span />
              <span className={styles.headWithout}>{t.comparison.without}</span>
              <span className={styles.headWith}>{t.comparison.with}</span>
            </div>
            {t.comparison.rows.map((row) => (
              <div key={row.key} className={styles.bodyRow}>
                <span className={styles.rowKey}>{row.key}</span>
                <span className={styles.cellWithout}>{row.without}</span>
                <span className={styles.cellWith}>{row.with}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
