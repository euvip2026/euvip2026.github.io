import Information from '@/components/Images/Information'

export default function ImportantDates() {
  const rows = [
    ['Tutorial Proposals', '30 April 2026'],
    ['Tutorial Notifications', '15 April 2026'],
    ['Paper Submissions', '30 May 2026'],
    ['Paper Notifications', '5 August 2026'],
    ['Demo Submissions', '7 August 2026'],
    ['Demo Notifications', '28 August 2026'],
    ['Camera Ready Paper Submissions', '15 August 2026'],
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
        <div className="bg-background mx-auto mt-4 mb-8 max-w-2xl shadow-md">
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
    </>
  )
}
