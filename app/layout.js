import './globals.css'

export const metadata = {
  title: 'MINSEC — Digital Transformation & Blockchain',
  description: 'MINSEC accompagne la transformation numérique, blockchain, Web3, smart contracts et minage responsable au Gabon.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
