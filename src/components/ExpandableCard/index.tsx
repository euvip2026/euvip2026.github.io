'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type ExpandableCardProps = {
  title: string
  description: string
  details: React.ReactNode
}

export function ExpandableCard({ title, description, details }: ExpandableCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-information bg-container text-container-foreground flex flex-col rounded-3xl border shadow-sm">
      {/* TITLE */}
      <div className="px-6 pt-6">
        <h3 className="text-lg leading-tight font-bold">{title}</h3>
      </div>

      {/* DESCRIPTION */}
      <div className="px-6 py-3 text-sm opacity-80">{description}</div>

      {/* DETAILS */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden px-6 pb-4 text-sm opacity-90">{details}</div>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="border-information hover:bg-container/80 mt-auto flex w-full items-center justify-center gap-2 rounded-b-3xl border-t px-6 py-4 text-sm font-semibold transition"
      >
        {open ? 'Hide details' : 'More details'}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
    </div>
  )
}
