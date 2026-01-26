import type { Metadata } from 'next'
import { Header } from '@/components'
import './globals.css'

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
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
