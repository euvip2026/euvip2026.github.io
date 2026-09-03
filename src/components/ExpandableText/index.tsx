'use client'

import { useState } from 'react'

type ExpandableTextProps = {
  label: string
  children: React.ReactNode
  maxLines?: number
}

export function ExpandableText({ label, children, maxLines = 3 }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mt-4 border-l-4 border-white/50 pl-4">
      <p className="text-sm font-semibold tracking-wider text-white/70 uppercase">{label}</p>

      <p
        className={`mt-2 w-full leading-relaxed text-white/90 ${expanded ? '' : 'line-clamp-3'}`}
      >
        {children}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-1 text-sm font-medium text-white/70 underline underline-offset-2 transition hover:text-white"
      >
        {expanded ? 'See less' : 'See more'}
      </button>
    </div>
  )
}
