'use client';

import Image from 'next/image';
import { useLang } from '../LangContext';
import styles from './Footer.module.css';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t } = useLang();
  const [year,setYear] = useState(null);
  useEffect(() => {
    console.log('Footer mounted');
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image src="/logo-minsec.jpeg" alt="MinSec" width={28} height={28} className={styles.logo} />
          <span className={styles.brandName}>MinSec</span>
        </div>
        <p className={styles.tagline}>{t.footer.tagline}</p>
        <p className={styles.rights}>
          © {year} MinSec. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
