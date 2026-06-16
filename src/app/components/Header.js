'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLang } from '../LangContext';
import styles from './Header.module.css';

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#vision', label: t.nav.vision },
    { href: '#blockchain', label: t.nav.blockchain },
    { href: '#mining', label: t.nav.mining },
    { href: '#defi', label: t.nav.defi },
    { href: '#audit', label: t.nav.audit },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <Image src="/logo-minsec.jpeg" alt="MinSec" width={34} height={34} className={styles.logo} />
          <span className={styles.brandName}>MinSec</span>
        </a>

        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggle} aria-label="Toggle language">
            <span className={lang === 'fr' ? styles.langActive : ''}>FR</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          </button>
          <a href="#contact" className={styles.cta}>
            {t.nav.contact}
          </a>
          <button className={styles.burger} onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileLink} onClick={() => setOpen(false)}>
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
