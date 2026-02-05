import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program',
  alternates: { canonical: '/program/' },
}

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

