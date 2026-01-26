'use client'

import { useState } from 'react'
import schedule from '@/data/schedule.json'
import { Program } from '@/components/Images'

const sessionTypeColors: Record<string, string> = {
  keynote: 'bg-accent text-white',
  tutorial: 'bg-primary-light text-white',
  session: 'bg-primary text-white',
  poster: 'bg-primary/80 text-white',
  break: 'bg-gray-200 text-gray-700',
  social: 'bg-accent/80 text-white',
  ceremony: 'bg-accent text-white',
}

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden shadow-sm">
          <img src={`${basePath}/program.png`} alt="Program Image" className="w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Program Schedule</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="mt-4">
            <p className="text-container-foreground text-base leading-relaxed md:text-lg">
              Four days of cutting-edge research and networking (time schedule is not finalized yet).
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="bg-background py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Day Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {schedule.days.map((day, index) => (
              <button
                key={day.date}
                onClick={() => setActiveDay(index)}
                className={`text-md px-6 py-4 font-medium transition-all hover:cursor-pointer ${
                  activeDay === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-container-foreground hover:bg-muted'
                }`}
              >
                <span
                  className={`text-md block tracking-wider uppercase ${activeDay === index ? 'text-primary-foreground' : 'text-muted-500'}`}
                >
                  {day.label}
                </span>
                <span className="text-md block font-semibold">{day.title}</span>
              </button>
            ))}
          </div>

          {/* Active Day Schedule */}
          <div>
            <div className="mb-10 text-center">
              <h2 className="text-primary mb-2 text-2xl font-bold">{schedule.days[activeDay].title}</h2>
              <p className="text-container-foreground-600">
                {new Date(schedule.days[activeDay].date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>

            <div className="space-y-3">
              {schedule.days[activeDay].sessions.map((session, index) => (
                <div
                  key={index}
                  className={`overflow-hidden ${session.type === 'break' ? 'bg-[#FCECD8]' : 'text-container-foreground bg-container'}`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Time */}
                    <div
                      className={`shrink-0 p-4 sm:w-36 ${session.type === 'break' ? 'bg-[#E3CDC1]' : 'bg-primary/10'}`}
                    >
                      <span className="text-primary font-semibold">{session.time}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="mb-2 flex flex-wrap items-start gap-2"></div>
                      <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                      {session.description && <p className="mt-1 text-sm text-gray-600">{session.description}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
