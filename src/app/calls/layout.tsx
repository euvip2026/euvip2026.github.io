import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calls',
  alternates: { canonical: '/calls/' },
}

export default function CallsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

