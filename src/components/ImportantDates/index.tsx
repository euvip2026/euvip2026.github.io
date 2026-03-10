'use client'

import { useEffect, useMemo, useState } from 'react'

function formatCountdown(target: Date, now: Date) {
  const diffMs = target.getTime() - now.getTime()
  if (diffMs <= 0) return 'FINISHED'

  const totalSeconds = Math.floor(diffMs / 1000)

  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)

  const minutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)

  const hours = totalHours % 24
  const totalDays = Math.floor(totalHours / 24)

  const weeks = Math.floor(totalDays / 7)
  const days = totalDays % 7

  const HH = String(hours).padStart(2, '0')
  const MM = String(minutes).padStart(2, '0')
  const SS = String(seconds).padStart(2, '0')

  return `${String(weeks).padStart(2, '0')} weeks ${String(days).padStart(2, '0')} days ${HH}:${MM}:${SS}`
}

function parseLocalEndOfDay(dateString: string) {
  const [dayStr, monthStr, yearStr] = dateString.split(' ')
  const day = Number(dayStr)
  const year = Number(yearStr)

  const monthMap: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  }

  const month = monthMap[monthStr]
  return new Date(year, month, day, 23, 59, 59)
}

export default function ImportantDates() {
  const rows: Array<[string, string]> = [
    ['Tutorial Proposals', '30 April 2026'],
    ['Tutorial Notifications', '15 May 2026'],
    ['Paper Submissions', '21 May 2026'],
    ['Paper Notifications', '18 July 2026'],
    ['Demo Submissions', '15 July 2026'],
    ['Demo Notifications', '18 July 2026'],
    ['Camera Ready Paper Submissions', '25 July 2026'],
  ]

  const [now, setNow] = useState<Date>(() => new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const interval = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const rowsWithCountdown = useMemo(() => {
    return rows.map(([event, dateString]) => {
      const targetDate = parseLocalEndOfDay(dateString)
      const countdownLabel = formatCountdown(targetDate, now)
      return { event, dateString, countdownLabel }
    })
  }, [rows, now])

  if (!mounted) return null

  return (
    <>
      <div className="mt-8 space-y-5 text-base leading-relaxed opacity-80 md:text-lg">
        <p>
          The call for papers and the call for tutorials will be published in early 2025. Follow us on LinkedIn, X, or
          Bluesky to stay updated on the latest news.
        </p>
      </div>

      <div className="border-container mt-10 overflow-hidden border shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-4 text-lg font-semibold">Event</th>
              <th className="px-6 py-4 text-right text-lg font-semibold">Date</th>
              <th className="px-6 py-4 text-right text-lg font-semibold">Countdown</th>
            </tr>
          </thead>

          <tbody>
            {rowsWithCountdown.map((row, idx) => (
              <tr key={row.event} className={idx % 2 === 0 ? 'bg-container/40' : ''}>
                <td className="px-6 py-4 text-lg">{row.event}</td>
                <td className="px-6 py-4 text-right text-lg whitespace-nowrap">{row.dateString}</td>
                <td className="text-accent px-6 py-4 text-right font-semibold whitespace-nowrap">
                  {row.countdownLabel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
