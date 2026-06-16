'use client';

import { createContext, useContext, useState, useMemo } from 'react';
import { content } from './content';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: content[lang],
      toggle: () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
