'use client'

import React, { useMemo } from 'react'
import Marquee from 'react-fast-marquee'

import { EURASIP, Google, IEEE, LuxembourgConventionBureau, SnTLogo, IEEEStudents } from '@/components/SponsorLogos'

type LogoComp = React.ComponentType<{ className?: string }>

export default function SponsorsSection({ speed = 100 }: { speed?: number }) {
  const logos = useMemo<LogoComp[]>(
    () => [EURASIP, Google, IEEE, LuxembourgConventionBureau, SnTLogo],
    [],
  )

  return (
    <section className="bg-background text-container-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8">
        <div className="mt-4 w-full overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l to-transparent" />

            <Marquee speed={speed} pauseOnHover gradient={false} autoFill>
              <div className="flex items-center">
                {logos.map((Logo, i) => (
                  <div
                    key={i}
                    className="mx-14 flex h-22 min-w-[180px] items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <Logo className="h-20 w-auto" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
