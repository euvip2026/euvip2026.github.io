import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Attend',
  alternates: { canonical: '/attend/' },
}

export default function AttendLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

