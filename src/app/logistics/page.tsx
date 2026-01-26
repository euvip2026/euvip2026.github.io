'use client'

import Logistics from '@/components/Images/Logistics'

const travelTimes = [
  { city: 'Brussels', byCar: '2h', byTrain: '3h20' },
  { city: 'Cologne', byCar: '2h30', byTrain: '4h' },
  { city: 'Paris', byCar: '4h', byTrain: '2h10' },
  { city: 'Strasbourg', byCar: '2h10', byTrain: '1h40' },
]

export default function LogisticsPage() {
  return (
    <div className="">
      <Logistics className="mx-auto w-full px-6 md:px-8" />

      {/* Location */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Conference Venue</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="max-w-2xl">
              <p className="text-base leading-relaxed opacity-80 md:text-lg">The conference will take place at:</p>
              <p className="mt-4 text-xl font-extrabold md:text-2xl">Parc Alvisse Hotel Conference &amp; Spa</p>
              <p className="mt-1 text-base font-semibold opacity-80 md:text-lg">Luxembourg</p>

              <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
                The Parc Alvisse Hotel Conference &amp; Spa is a modern conference venue located in a green and quiet
                area, while remaining well connected to the city centre. The venue offers dedicated conference
                facilities, on-site accommodation, restaurant services, and wellness areas, providing a convenient
                setting for all conference activities.
              </p>

              <a
                className="border-muted bg-background hover:bg-background/80 mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
                href="https://www.google.com/maps/search/?api=1&query=Parc%20Alvisse%20Hotel%20Conference%20%26%20Spa%2C%20Luxembourg"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="border-muted bg-background overflow-hidden rounded-md border shadow-sm">
              <div className="aspect-4/3 w-full">
                <iframe
                  title="Parc Alvisse Hotel Conference & Spa (Luxembourg) map"
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
      <section className="bg-container text-container-foreground">
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
              <p className="text-container-foreground text-lg leading-relaxed">
                Luxembourg City is also known for its UNESCO-listed Old Town and historic fortifications, as well as for
                its cultural life, natural landscapes, and high quality of life.
              </p>
            </div>
          </div>
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

          <div className="max-w-7xl">
            <div className="bg-background mt-8 overflow-hidden">
              <h3 className="text-xl font-extrabold md:text-2xl">Parc Alvisse Hotel Conference &amp; Spa</h3>
              <p className="mt-1 text-base font-semibold opacity-80 md:text-lg">On-site Accommodation</p>

              <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
                The Parc Alvisse Hotel offers comfortable hotel rooms with on-site restaurant, bar, conference
                facilities, and wellness areas, providing a convenient and integrated experience for conference
                attendees.
              </p>

              <p className="mt-4 text-base leading-relaxed opacity-80 md:text-lg">
                Further details on room availability, special conference rates, and booking procedures will be provided
                closer to the conference dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-container text-container-foreground">
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
              <p className="text-container-foreground mb-6 text-lg leading-relaxed">
                Luxembourg is centrally located in Europe and well connected by air, train, and road.
              </p>

              <div className="grid gap-8 lg:grid-cols-3">
                <div>
                  <h3 className="text-container-foreground mb-4 flex items-center gap-3 text-xl font-bold">By Air</h3>
                  <p className="text-container-foreground mb-4 text-lg leading-relaxed">
                    Luxembourg is well connected within Europe and internationally.
                  </p>
                  <ul className="text-container-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-accent mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                      Direct flights from numerous European destinations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-accent mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                      Direct flights to more than 100 destinations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-accent mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                      Less than one hour flight from major international hubs such as Paris, Frankfurt, Amsterdam, and
                      Geneva
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-accent mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                      Airport is ~10 minutes from city centre
                    </li>
                  </ul>
                </div>

                <div className="border-container-foreground border-l-2 pl-8">
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

                <div className="border-container-foreground border-l-2 pl-8">
                  <h3 className="text-container-foreground mb-4 flex items-center gap-3 text-xl font-bold">
                    Local Mobility
                  </h3>
                  <ul className="text-container-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-accent mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                      Public transport is free of charge nationwide, including buses, trams, and trains
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-accent mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                      Taxi services are widely available, including app-based services such as Uber and Webtaxi
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
