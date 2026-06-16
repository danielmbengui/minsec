'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './HexField.module.css';

// Génère une grille hexagonale légèrement irrégulière, avec des liens
// entre hexagones voisins — référence directe au logo MinSec et au
// motif "blockchain" des supports institutionnels.
function buildHexGrid(cols, rows, size) {
  const hexW = size * 1.75;
  const hexH = size * 1.5;
  const nodes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * hexW + (r % 2 === 1 ? hexW / 2 : 0);
      const y = r * hexH;
      nodes.push({ x, y, id: `${r}-${c}`, r, c });
    }
  }
  const links = [];
  nodes.forEach((n) => {
    const right = nodes.find((m) => m.r === n.r && m.c === n.c + 1);
    const downSame = nodes.find((m) => m.r === n.r + 1 && m.c === n.c);
    const downAdj = nodes.find(
      (m) => m.r === n.r + 1 && m.c === n.c + (n.r % 2 === 1 ? 1 : -1)
    );
    if (right && Math.random() > 0.35) links.push([n, right]);
    if (downSame && Math.random() > 0.55) links.push([n, downSame]);
    if (downAdj && Math.random() > 0.45) links.push([n, downAdj]);
  });
  return { nodes, links, width: cols * hexW + hexW, height: rows * hexH + hexH };
}

function hexPoints(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

export default function HexField() {
  const [mounted, setMounted] = useState(false);
  // Le random n'est calculé qu'après le montage côté client, donc le
  // serveur et le client rendent d'abord la même chose (rien), évitant
  // tout mismatch d'hydratation.
  const grid = useMemo(() => (mounted ? buildHexGrid(9, 7, 64) : null), [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!grid) {
    return <div className={styles.wrap} aria-hidden="true" />;
  }

  const { nodes, links, width, height } = grid;

  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hexFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(61,220,151,0.55)" />
            <stop offset="100%" stopColor="rgba(232,199,102,0.25)" />
          </linearGradient>
        </defs>

        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            className={styles.link}
            style={{ animationDelay: `${(i % 12) * 0.18}s` }}
          />
        ))}

        {nodes.map((n, i) => (
          <polygon
            key={n.id}
            points={hexPoints(n.x, n.y, 22)}
            className={styles.hex}
            style={{ animationDelay: `${(i % 14) * 0.22}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
