import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from '@/components'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EUVIP 2026 - Luxembourg',
  description: 'EUVIP 2026 conference in Luxembourg.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  )
}
