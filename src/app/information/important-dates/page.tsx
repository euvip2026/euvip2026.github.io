import Information from '@/components/Images/Information'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Important Dates',
  alternates: { canonical: '/information/important-dates/' },
}

export default function ImportantDates() {
  const rows: Array<[string, string]> = [
    ['Tutorial Proposals', '9 June 2026, 23:59 (<s>15 May 2026</s>)'],
    ['Tutorial Notifications', '25 June 2026, 23:59 (<s>20 May 2026</s>)'],
    ['Paper Submissions', '15 June 2026, 23:59 (<s>5 June 2026</s>)'],
    ['Paper Notifications', '23 July 2026, 23:59 (<s>18 July 2026</s>)'],
    ['Demo Submissions', '15 July 2026, 23:59'],
    ['Demo Notifications', '23 July 2026, 23:59 (<s>18 July 2026</s>)'],
    ['Camera Ready Paper Submissions', '5 August 2026, 23:59'],
    ['Project Dissemination Papers Submission', '30 July 2026, 23:59'],
    ['Project Dissemination Papers Notifications', '15 August 2026, 23:59'],
    ['Special Sessions Submissions', '15 May 2026, 23:59 (<s>30 April 2026</s>)'],
    ['Special Sessions Notifications', '23 May 2026, 23:59 (<s>8 May 2026</s>)'],
    ['Student Sessions Submissions', '7 July 2026, 23:59 (<s>30 June 2026</s>)'],
    ['Student Sessions Notifications', '22 July 2026, 23:59'],
  ]

  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <Information className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Important Dates</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="bg-background mx-auto mt-4 mb-8 max-w-3xl shadow-md">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-container-foreground border-b">
                <th className="text-container-foreground px-6 py-4 text-2xl font-semibold">Event</th>
                <th className="text-container-foreground flex flex-col px-6 py-4 text-right text-2xl font-semibold">
                  Date <span className="text-xs font-normal">(AoE)</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map(([event, date], idx) => (
                <tr key={event} className={idx % 2 === 0 ? 'bg-container' : ''}>
                  <td className="text-container-foreground px-6 py-4 text-lg">{event}</td>
                  <td className="text-container-foreground px-6 py-4 text-right text-lg whitespace-nowrap">
                    <span dangerouslySetInnerHTML={{ __html: date }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
