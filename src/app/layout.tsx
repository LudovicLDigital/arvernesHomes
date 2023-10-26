import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arvernes Homes',
  description: 'Conciergerie en Auvergne, Vichy et Clermont-Ferrand',
  keywords: ['Conciergerie', 'Auvergne', 'Puy-de-Dôme', 'Vichy', 'Clermont-Ferrand', 'Arvernes Homes', 'Arvernes', 'Homes', 'Allier' ],
  authors: [ { name: 'Ludovic', url: 'https://github.com/LudovicLDigital' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
