'use client'

import Slider from '@/components/Slider'

const travelTimes = [
  { city: 'Brussels', byCar: '2 h', byTrain: '3 h 20 min' },
  { city: 'Cologne', byCar: '2 h 30 min', byTrain: '4 h' },
  { city: 'Paris', byCar: '4 h', byTrain: '2 h 10 min' },
  { city: 'Strasbourg', byCar: '2 h 10 min', byTrain: '1 h 40 min' },
]

export default function AttendPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <div className="">
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img src={`${basePath}/attend.png`} alt="Attend Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Attend</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="max-w-2xl">
              <p className="text-base leading-relaxed opacity-80 md:text-lg">The conference will take place at:</p>
              <p className="mt-4 text-xl font-extrabold md:text-2xl">Parc Alvisse Hotel Conference and Spa</p>
              <p className="mt-1 text-base font-semibold opacity-80 md:text-lg">Luxembourg</p>

              <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
                The Parc Alvisse Hotel Conference and Spa is a modern conference venue located in a green and quiet
                area, while remaining well connected to the city centre. The venue offers dedicated conference
                facilities, on-site accommodation, restaurant services, and wellness areas, providing a convenient
                setting for all conference activities.
              </p>

              <a
                className="border-muted bg-background hover:bg-background/80 mt-6 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
                href="https://www.google.com/maps/search/?api=1&query=Parc%20Alvisse%20Hotel%20Conference%20%26%20Spa%2C%20Luxembourg"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="border-muted bg-background overflow-hidden border shadow-sm">
              <div className="aspect-4/3 w-full">
                <iframe
                  title="Parc Alvisse Hotel Conference and Spa (Luxembourg) map"
                  src="https://www.google.com/maps?q=Parc+Alvisse+Hotel+Conference+%26+Spa,+Luxembourg&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Luxembourg */}
      <section className="bg-container text-container-foreground py-8">
        <div className="bg-container mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 p-4 px-6 md:px-8">
          <div>
            <h2 className="text-container-foreground text-3xl font-extrabold tracking-tight md:text-4xl">
              Luxembourg at a Glance
            </h2>
            <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
          </div>
        </div>

        <div className="bg-container mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 p-4 px-6 md:px-8">
          <div className="bg-container rounded-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-container-foreground mb-6 text-lg leading-relaxed">
                EUVIP 2026 will be held in Luxembourg, a centrally located European country offering a stable,
                international, and research-driven environment.
              </p>

              <p className="text-container-foreground mb-6 text-lg leading-relaxed">
                Luxembourg is situated at the crossroads of Europe and is easily reachable from major European cities.
                The country hosts a highly multicultural society, with more than 170 nationalities, and is home to
                several major European institutions, including the European Court of Justice and the European Investment
                Bank.
              </p>

              <p className="text-container-foreground mb-6 text-lg leading-relaxed">
                With one of the highest GDPs per capita worldwide, Luxembourg has established itself as a strong hub for
                research, innovation, and technology, with strategic focus areas including artificial intelligence,
                space, cybersecurity, mobility, 6G, and FinTech.
              </p>

              <p className="text-container-foreground mb-6 text-lg leading-relaxed">
                Luxembourg City is also known for its UNESCO-listed Old Town and historic fortifications, as well as for
                its cultural life, natural landscapes, and high quality of life.
              </p>

              <p className="text-container-foreground text-lg leading-relaxed">
                To get inspired about what you can do and discover during your trip to Luxembourg, take some time to
                explore{' '}
                <a
                  href="https://www.visitluxembourg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline"
                >
                  visitluxembourg.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-4 max-w-4xl">
          <Slider />
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Accommodation</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-extrabold md:text-2xl">Parc Alvisse Hotel Conference and Spa</h3>
            <p className="mt-1 text-base font-semibold opacity-80 md:text-lg">On-site accommodation</p>

            <p className="mt-6 max-w-4xl text-base leading-relaxed opacity-80 md:text-lg">
              Conference participants can stay directly at the event venue and benefit from preferential EUVIP 2026
              rates. The hotel offers comfortable rooms together with an on-site restaurant, bar, conference
              facilities, and wellness areas.
            </p>

            {/* Room rates */}
            <div className="border-muted mt-8 overflow-hidden border shadow-sm">
              <div className="bg-container px-5 py-4 md:px-6">
                <h4 className="text-lg font-extrabold md:text-xl">Preferential EUVIP 2026 Room Rates</h4>
                <p className="mt-1 text-base opacity-75 md:text-lg">Rates displayed per room, per night.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead>
                    <tr className="border-muted border-b">
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">Occupancy</th>
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">Standard Rate</th>
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">Comfort Room</th>
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">Superior Room</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-muted border-b">
                      <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">Single</td>
                      <td className="px-5 py-4 text-base opacity-70 line-through md:px-6 md:text-lg">€254.00</td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">€115.00</td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">€155.00</td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">Double / Twin</td>
                      <td className="px-5 py-4 text-base opacity-70 line-through md:px-6 md:text-lg">€276.00</td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">€137.00</td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">€177.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-3 text-base leading-relaxed opacity-70 md:text-lg">
              The Comfort and Superior room prices shown above are preferential rates reserved for EUVIP 2026
              participants.
            </p>

            {/* Booking instructions */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h4 className="text-2xl font-extrabold">How to Make a Reservation</h4>

                <ol className="mt-5 space-y-4 text-lg">
                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      1
                    </span>
                    <p className="pt-1 leading-relaxed opacity-80">
                      Click "Book Your Room" to open the hotel's online booking page.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      2
                    </span>
                    <p className="pt-1 leading-relaxed opacity-80">
                      Enter your planned check-in and check-out dates.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      3
                    </span>
                    <p className="pt-1 leading-relaxed opacity-80">
                      Enter the EUVIP promotional code.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      4
                    </span>
                    <p className="pt-1 leading-relaxed opacity-80">
                      Click the SEARCH AVAILABLE ROOMS button to show the available room options.
                    </p>
                  </li>
                </ol>

                <a
                  href="https://reservations.cubilis.eu/alvisse-parc-hotel-luxembourg"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent mt-7 inline-flex items-center justify-center px-5 py-3 text-base font-bold text-white shadow-sm transition hover:opacity-90 md:text-lg"
                >
                  Book Your Room
                </a>
              </div>

              {/* Promotional code and deadline */}
              <aside className="border-accent bg-container border-l-4 p-6 shadow-sm">
                <p className="text-base font-bold uppercase tracking-wide opacity-70 md:text-lg">Promotional code</p>

                <div className="mt-3">
                  <code className="border-muted bg-background inline-block border px-4 py-2 text-lg font-extrabold tracking-wider">
                    EUVIP-0926
                  </code>
                </div>

                <p className="mt-5 text-base leading-relaxed opacity-80 md:text-lg">
                  Both the stay dates and the promotional code must be entered on the booking page. Otherwise, the
                  preferential rates will not be displayed.
                </p>

                <div className="border-muted mt-5 border-t pt-5">
                  <p className="font-extrabold">Booking deadline</p>
                  <p className="mt-1 text-lg font-extrabold">17 August 2026</p>
                  <p className="mt-2 text-base leading-relaxed opacity-75 md:text-lg">
                    Rooms not booked by this date will be released back into the hotel&apos;s general inventory.
                    Reservations may still be possible afterwards, subject to availability.
                  </p>
                </div>
              </aside>
            </div>

            {/* Payment and cancellation */}
            <div className="border-muted mt-10 border-t pt-8">
              <h4 className="text-xl font-extrabold">Payment and Cancellation Policy</h4>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div className="border-muted border p-5">
                  <h5 className="font-extrabold">Payment</h5>
                  <p className="mt-2 text-base leading-relaxed opacity-80 md:text-lg">
                    Full payment is required at the time of booking.
                  </p>
                </div>

                <div className="border-muted border p-5">
                  <h5 className="font-extrabold">Cancellation</h5>
                  <p className="mt-2 text-base leading-relaxed opacity-80 md:text-lg">
                    Reservations may be cancelled free of charge up to one day before arrival. Cancellations made
                    within this period will receive a full refund.
                  </p>
                </div>

                <div className="border-muted border p-5">
                  <h5 className="font-extrabold">No-show</h5>
                  <p className="mt-2 text-base leading-relaxed opacity-80 md:text-lg">
                    In the case of a no-show, 100% of the total booking value will be charged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-container text-container-foreground py-8">
        <div className="bg-container mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 p-4 px-6 md:px-8">
          <div>
            <h2 className="text-container-foreground text-3xl font-extrabold tracking-tight md:text-4xl">
              Getting There
            </h2>
            <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
          </div>
        </div>

        <div className="bg-container mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 p-4 px-6 md:px-8">
          <div className="bg-container rounded-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-container-foreground mb-10 text-lg leading-relaxed">
                Luxembourg is centrally located in Europe and well connected by air, train, and road.
              </p>

              <div className="grid gap-8 lg:grid-cols-3">
                <div>
                  <h3 className="text-container-foreground mb-4 flex items-center gap-3 text-xl font-bold">By Air</h3>
                  <p className="text-container-foreground mb-4 text-lg leading-relaxed">
                    Luxembourg is well connected within Europe and internationally.
                  </p>

                  <ul className="text-container-foreground list-disc space-y-2 pl-6 marker:text-[#2f566e]">
                    <li>Direct flights from numerous European destinations.</li>
                    <li>Direct flights to more than 100 destinations.</li>
                    <li>Airport is approximately 10 minutes from the city centre.</li>
                    <li>
                      Less than a one-hour flight from major international hubs such as Paris, Frankfurt, Amsterdam, and
                      Geneva.
                    </li>
                  </ul>
                </div>

                <div className="border-container-foreground/60 border-l-2 pl-8">
                  <h3 className="text-container-foreground mb-4 flex items-center gap-3 text-xl font-bold">
                    By Train or Car
                  </h3>

                  <p className="text-container-foreground mb-4 text-lg leading-relaxed">
                    Bordered by Belgium, France, and Germany with excellent connections.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-container-foreground py-2 text-left font-medium">City</th>
                          <th className="text-container-foreground py-2 text-left font-medium">By Car</th>
                          <th className="text-container-foreground py-2 text-left font-medium">By Train</th>
                        </tr>
                      </thead>

                      <tbody>
                        {travelTimes.map((item) => (
                          <tr key={item.city} className="border-muted border-b">
                            <td className="text-container-foreground py-2">{item.city}</td>
                            <td className="text-container-foreground py-2">{item.byCar}</td>
                            <td className="text-container-foreground py-2">{item.byTrain}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border-container-foreground/60 border-l-2 pl-8">
                  <h3 className="text-container-foreground mb-4 flex items-center gap-3 text-xl font-bold">
                    Local Mobility
                  </h3>

                  <ul className="text-container-foreground list-disc space-y-2 pl-6 marker:text-[#2f566e]">
                    <li>Public transport is free of charge nationwide, including buses, trams, and trains.</li>
                    <li>Taxi services are widely available, including app-based services such as Uber and Webtaxi.</li>
                    <li>
                      For public transport information in Luxembourg, consult the{' '}
                      <a
                        href="https://www.mobiliteit.lu/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold hover:underline"
                      >
                        Mobiliteit journey planner
                      </a>{' '}
                      for routes and schedules.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}