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

function parseDeadlineInstant(dateString: string) {
  // Read the leading active date, ignoring any appended time or struck-out date.
  const match = dateString.match(/^(\d+)\s+([A-Za-z]+)\s+(\d{4})/)
  if (!match) return new Date(NaN)

  const day = Number(match[1])
  const monthStr = match[2]
  const year = Number(match[3])

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
  // Deadlines are 23:59 Anywhere on Earth (AoE = UTC-12). That instant is
  // 23:59 + 12h = 11:59 UTC on the following calendar day.
  return new Date(Date.UTC(year, month, day + 1, 11, 59, 59))
}

export default function ImportantDates() {
  const rows: Array<[string, string]> = [
    ['Tutorial Proposals', '9 June 2026, 23:59 (<s>15 May 2026</s>)'],
    ['Tutorial Notifications', '25 June 2026, 23:59 (<s>20 May 2026</s>)'],
    ['Paper Submissions', '15 June 2026, 23:59 (<s>5 June 2026</s>)'],
    ['Paper Notifications', '18 July 2026, 23:59'],
    ['Demo Submissions', '15 July 2026, 23:59'],
    ['Demo Notifications', '18 July 2026, 23:59'],
    ['Camera Ready Paper Submissions', '5 August 2026, 23:59'],
    ['Project Dissemination Papers Submission', '30 July 2026, 23:59'],
    ['Project Dissemination Papers Notifications', '15 August 2026, 23:59'],
    ['Special Sessions Submissions', '15 May 2026, 23:59 (<s>30 April 2026</s>)'],
    ['Special Sessions Notifications', '23 May 2026, 23:59 (<s>8 May 2026</s>)'],
    ['Student Sessions Submissions', '30 June 2026, 23:59'],
    ['Student Sessions Notifications', '22 July 2026, 23:59'],
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
      const targetDate = parseDeadlineInstant(dateString)
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
              <th className="px-6 py-4 text-right text-lg font-semibold">
                Date <span className="text-xs font-normal">(AoE)</span>
              </th>
              <th className="px-6 py-4 text-right text-lg font-semibold">Countdown</th>
            </tr>
          </thead>

          <tbody>
            {rowsWithCountdown.map((row, idx) => (
              <tr key={row.event} className={idx % 2 === 0 ? 'bg-container/40' : ''}>
                <td className="px-6 py-4 text-lg">{row.event}</td>
                <td className="px-6 py-4 text-right text-lg whitespace-nowrap"><span dangerouslySetInnerHTML={{ __html: row.dateString }} /></td>
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
