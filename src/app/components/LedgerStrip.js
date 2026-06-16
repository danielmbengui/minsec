'use client';

import { useEffect, useState } from 'react';
import { useLang } from '../LangContext';
import styles from './LedgerStrip.module.css';

function randomHash() {
  const chars = '0123456789abcdef';
  let h = '0x';
  for (let i = 0; i < 10; i++) h += chars[Math.floor(Math.random() * chars.length)];
  return h;
}

const SOURCES = ['Poubara', 'Ayémé', 'Assala', 'Audit ESG', 'Smart Contract', 'Cadastre', 'Subvention'];

function makeBlock(index) {
  return {
    id: index,
    height: 482_910 + index,
    hash: randomHash(),
    source: SOURCES[index % SOURCES.length],
  };
}

export default function LedgerStrip() {
  const { t } = useLang();
  // Les blocs ne sont générés qu'après le montage côté client : le
  // serveur rend une frise vide, évitant tout mismatch d'hydratation
  // dû aux hash aléatoires.
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(Array.from({ length: 10 }, (_, i) => makeBlock(i)));
  }, []);

  useEffect(() => {
    if (blocks.length === 0) return;
    const interval = setInterval(() => {
      setBlocks((prev) => {
        const next = makeBlock(prev[prev.length - 1].height - 482_910 + 1);
        return [...prev.slice(1), next];
      });
    }, 2600);
    return () => clearInterval(interval);
  }, [blocks.length]);

  return (
    <div className={styles.strip}>
      <div className={styles.label}>
        <span className={styles.dot} />
        {t.ledger.label}
      </div>
      <div className={styles.track}>
        {blocks.map((b, i) => (
          <div key={b.id} className={`${styles.block} ${i === blocks.length - 1 ? styles.blockNew : ''}`}>
            <span className={styles.blockHeight}>#{b.height.toLocaleString('en-US')}</span>
            <span className={styles.blockHash}>{b.hash}</span>
            <span className={styles.blockSource}>{b.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
