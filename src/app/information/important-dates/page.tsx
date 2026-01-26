import Information from '@/components/Images/Information'

export default function ImportantDates() {
  const rows = [
    ['Tutorial Proposals', '18 April 2026'],
    ['Tutorial Notifications', '28 April 2026'],
    ['Paper Submissions', '23 May 2026'],
    ['Paper Notifications', '21 July 2026'],
    ['Demo Submissions', '23 July 2026'],
    ['Camera Ready Paper Submissions', '30 July 2026'],
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
      <Information className="mb-6" />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-container-foreground text-3xl font-extrabold tracking-tight md:text-4xl">
            Important Dates
          </h2>
          <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
        </div>
      </div>
      <div className="bg-background mx-auto mt-4 mb-8 max-w-2xl rounded-3xl shadow-md">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-container-foreground border-b">
              <th className="text-container-foreground px-6 py-4 text-2xl font-semibold">Event</th>
              <th className="text-container-foreground px-6 py-4 text-right text-2xl font-semibold">Date</th>
            </tr>
          </thead>

          <tbody>
            {rows.map(([event, date], idx) => (
              <tr key={event} className={idx % 2 === 0 ? 'bg-container' : ''}>
                <td className="text-container-foreground px-6 py-4 text-lg">{event}</td>
                <td className="text-container-foreground px-6 py-4 text-right text-lg whitespace-nowrap">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
