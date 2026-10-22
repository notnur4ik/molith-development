import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], display: 'swap', variable: '--font-manrope' })
const cormorant = Cormorant_Garamond({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-cormorant' })

export const metadata: Metadata = {
  title: {
    default: 'MONOLITH DEVELOPMENT — архитектура и реализация',
    template: '%s — MONOLITH DEVELOPMENT',
  },
  description: 'Концептуальный сайт MONOLITH DEVELOPMENT: архитектура, инженерия и реализация современных пространств.',
  generator: 'Noven Digital',
  openGraph: {
    title: 'MONOLITH DEVELOPMENT — архитектура и реализация',
    description: 'Архитектура, проектирование и строительство современных пространств.',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f3f0e9',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <a className="skip-link" href="#main-content">Перейти к содержанию</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
