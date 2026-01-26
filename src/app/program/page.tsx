'use client'

import { useState } from 'react'
import schedule from '@/data/schedule.json'

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

  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Program Schedule</h1>
          <p className="mx-auto max-w-2xl text-xl text-white/80">Four days of cutting-edge research and networking</p>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Day Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {schedule.days.map((day, index) => (
              <button
                key={day.date}
                onClick={() => setActiveDay(index)}
                className={`rounded-lg px-6 py-4 font-medium transition-all ${
                  activeDay === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-container-bg text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span
                  className={`block text-xs tracking-wider uppercase ${activeDay === index ? 'text-white/70' : 'text-gray-500'}`}
                >
                  {day.label}
                </span>
                <span className="block font-semibold">{day.title}</span>
              </button>
            ))}
          </div>

          {/* Active Day Schedule */}
          <div>
            <div className="mb-10 text-center">
              <h2 className="text-primary mb-2 text-2xl font-bold">{schedule.days[activeDay].title}</h2>
              <p className="text-gray-600">
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
                  className={`overflow-hidden rounded-lg ${
                    session.type === 'break' ? 'bg-gray-100' : 'bg-container-bg'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Time */}
                    <div
                      className={`flex-shrink-0 p-4 sm:w-36 ${session.type === 'break' ? 'bg-gray-200' : 'bg-primary/10'}`}
                    >
                      <span className="text-primary font-semibold">{session.time}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="mb-2 flex flex-wrap items-start gap-2">
                        <span
                          className={`inline-block rounded px-3 py-1 text-xs font-medium ${
                            sessionTypeColors[session.type] || 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                      {session.description && <p className="mt-1 text-sm text-gray-600">{session.description}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-container-bg mt-12 rounded-lg p-6">
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">Session Types</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(sessionTypeColors).map(([type, color]) => (
                <div key={type} className="flex items-center">
                  <span className={`h-4 w-4 rounded ${color} mr-2`} />
                  <span className="text-sm text-gray-600 capitalize">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Schedule CTA */}
      <section className="bg-container-bg py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-gray-700">
            The detailed program will be available after paper acceptance notifications.
          </p>
          <p className="text-sm text-gray-500">Check back for updates or subscribe to our newsletter.</p>
        </div>
      </section>
    </>
  )
}
