import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header, Footer } from '@/components'
import { getMetadataBase } from '@/lib/seo'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: 'EUVIP 2026 - Luxembourg',
    template: '%s | EUVIP 2026',
  },
  description: 'EUVIP 2026 conference in Luxembourg.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'EUVIP 2026',
    title: 'EUVIP 2026 - Luxembourg',
    description: 'EUVIP 2026 conference in Luxembourg.',
    images: [
      {
        url: '/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'EUVIP 2026 - Luxembourg',
    description: 'EUVIP 2026 conference in Luxembourg.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="mt-20 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
