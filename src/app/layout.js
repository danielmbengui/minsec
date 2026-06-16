import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LangProvider } from './LangContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'MinSec — Blockchain & Digital Sovereignty for Gabon',
  description:
    'MinSec accompagne les institutions et entreprises gabonaises dans leur transformation numérique par la blockchain, le minage responsable et la finance décentralisée.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${mono.variable}`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
