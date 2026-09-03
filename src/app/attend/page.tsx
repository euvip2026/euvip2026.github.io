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
          <img
            src={`${basePath}/attend.png`}
            alt="Attend Image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Attend
            </h2>
            <div
              className="mt-3 h-1 w-16 bg-white/90"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Registration
              </h2>
              <div
                className="bg-accent mt-3 h-1 w-16 rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="border-accent bg-container mt-8 border-l-4 p-5 shadow-sm md:p-6">
            <h3 className="text-xl font-extrabold md:text-2xl">
              Registrations open
            </h3>

            <p className="mt-3 text-base leading-relaxed md:text-lg">
              Registration to EUVIP 2026 is now open. Please register by{' '}
              <strong>
                {/* <s>25 August 2026 (23:59 Luxembourg time, UTC+2)</s>{' '} */}
                04 September 2026 (23:59 Luxembourg time, UTC+2)
              </strong>{' '}
              to benefit from the early-registration rate. Note that payments received
              from <strong>05 September 2026</strong> onward will be charged at the
              late-registration rate. Please register using the following{' '}
              <strong>
                <u>
                  <a
                    target="_blank"
                    href="https://sntevents.uni.lu/product/euvip-2026-registration/"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>
                </u>
              </strong>
              .
            </p>
          </div>

          <div className="border-muted mt-8 overflow-hidden border shadow-sm">
            <div className="bg-container px-5 py-4 md:px-6">
              <h3 className="text-xl font-extrabold md:text-2xl">
                Registration Fees
              </h3>
              <p className="mt-1 text-base opacity-75 md:text-lg">
                All fees are listed in euros.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="border-muted border-b">
                    <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                      Registration Category
                    </th>
                    <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                      Registration Type
                    </th>
                    <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                      Early Fee
                    </th>
                    <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                      Late Fee
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-muted border-b">
                    <td
                      rowSpan={3}
                      className="px-5 py-4 align-top text-base font-extrabold md:px-6 md:text-lg"
                    >
                      IEEE / EURASIP Members
                    </td>
                    <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                      Full
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €850
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €975
                    </td>
                  </tr>

                  <tr className="border-muted border-b">
                    <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                      Student or Life Member
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €500
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €575
                    </td>
                  </tr>

                  <tr className="border-muted border-b">
                    <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                      1-Day Pass
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €300
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €345
                    </td>
                  </tr>

                  <tr className="border-muted border-b">
                    <td
                      rowSpan={3}
                      className="px-5 py-4 align-top text-base font-extrabold md:px-6 md:text-lg"
                    >
                      Non-members
                    </td>
                    <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                      Full
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €1,025
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €1,175
                    </td>
                  </tr>

                  <tr className="border-muted border-b">
                    <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                      Student
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €600
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €690
                    </td>
                  </tr>

                  <tr className="border-muted border-b">
                    <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                      1-Day Pass
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €375
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €430
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">
                      Low Income Economy Countries Authors*
                    </td>
                    <td className="px-5 py-4 text-base opacity-70 md:px-6 md:text-lg"></td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €125
                    </td>
                    <td className="px-5 py-4 text-base md:px-6 md:text-lg">
                      €125
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm">
              <strong>
                *2026 low-income countries, as defined by the World Bank:
              </strong>
            </p>

            <ul className="mt-3 grid list-disc gap-x-8 gap-y-1 pl-5 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Afghanistan',
                'Burkina Faso',
                'Burundi',
                'Central African Republic',
                'Chad',
                'Congo, Dem. Rep.',
                'Eritrea',
                'Ethiopia',
                'Gambia, The',
                'Guinea-Bissau',
                "Korea, Dem. People's Rep.",
                'Liberia',
                'Madagascar',
                'Malawi',
                'Mali',
                'Mozambique',
                'Niger',
                'Rwanda',
                'Sierra Leone',
                'Somalia',
                'South Sudan',
                'Sudan',
                'Syrian Arab Republic',
                'Uganda',
                'Yemen, Rep.',
              ].map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>

            <a
              className="border-muted bg-background hover:bg-background/80 mt-6 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
              href="https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source: World Bank country and lending groups
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold">
                Registration fees include
              </h3>

              <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>
                  Admission to all keynotes and technical sessions, including
                  special sessions, oral sessions, poster sessions, and
                  tutorials, held in a dedicated conference room at the
                  conference hotel.
                </li>
                <li>Four sit-down lunches.</li>
                <li>Welcome reception.</li>
                <li>Gala dinner on a cruise.</li>
                <li>Guided tour of Luxembourg.</li>
                <li>Coffee breaks.</li>
                <li>
                  Dedicated transport to conference programme locations,
                  including the gala dinner venue and guided-tour locations.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold">Important notes</h3>

              <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>
                  Each regular or special-session paper must be covered by a
                  Full registration at either the IEEE / EURASIP Member or
                  Non-member rate.
                </li>
                <li>
                  One Full registration can cover up to two accepted papers.
                </li>
                <li>
                  A Student Session paper requires either a Student registration
                  or a Full registration.
                </li>
                <li>
                  A 1-Day Pass covers attendance on one selected conference day
                  and can be used to cover a dissemination paper.
                </li>
                <li>
                  Early and late fees are determined by the date payment is
                  received. Payments received after the early deadline are
                  charged at the late rate.
                </li>
                <li>
                  To receive the member rate, the registrant must be an IEEE or
                  EURASIP member at the time of registration.
                </li>
                <li>
                  Student registration must be supported by evidence of current
                  student status, such as a student ID, enrolment record, or
                  department letter.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-muted mt-10 grid gap-8 border-t pt-10 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-extrabold md:text-2xl">
                Registration Policy
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>Each attendee must register separately.</li>
                <li>
                  Registrants must be an IEEE or EURASIP member at the time of
                  registration to receive the respective member discount.
                  Membership numbers are requested on the registration form.
                </li>
                <li>
                  Accompanying persons may attend the gala dinner for an
                  additional fee.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold md:text-2xl">
                Author No-Show Policy
              </h3>

              <div className="mt-4 space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  IEEE reserves the right to exclude a paper from distribution
                  after the conference, including removal from IEEE Xplore, when
                  the paper is not presented at the conference.
                </p>

                <p>
                  EUVIP 2026 requires each accepted paper to be presented in
                  person by one of its authors or by a qualified substitute at
                  the conference site and according to the published technical
                  programme, unless special permission has been obtained. A
                  paper accepted into the technical programme but not presented
                  on site will be withdrawn from the proceedings published on
                  IEEE Xplore.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold md:text-2xl">
                Cancellation and Refund Policy
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>
                  Cancellations must be submitted in writing by email to{' '}
                  <a
                    className="font-bold underline"
                    href="mailto:euvip2026@uni.lu"
                  >
                    euvip2026@uni.lu
                  </a>
                  .
                </li>

                <li>
                  Cancellations received at least 30 days before the conference
                  start date will be refunded, subject to a €50 processing fee.
                </li>

                <li>
                  No refunds will be made for cancellations received within 30
                  days of the conference start date.
                </li>

                <li>
                  Refunds will be processed within 7 to 10 business days after
                  receipt of the cancellation request.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            {/* YouTube Video */}
      {/* <section className="mx-auto max-w-7xl px-4 pt-6">
        <div className="aspect-video w-full overflow-hidden shadow-sm">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Yds_drwxZVI"
            title="Programme Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section> */}

      {/* Visa and Travel Authorization */}
      <section className="bg-container text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Visa and Travel Authorization
              </h2>
              <div
                className="bg-accent mt-3 h-1 w-16 rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-base leading-relaxed md:text-lg">
              Before traveling to Luxembourg, please ensure that you have the
              appropriate visa or travel authorization, if required. Luxembourg
              is part of the Schengen Area, and entry requirements depend on
              your nationality and the passport or travel document you hold.
            </p>

            <div className="border-accent bg-background mt-8 border-l-4 p-5 shadow-sm md:p-6">
              <h3 className="text-xl font-extrabold md:text-2xl">
                Visa Support Letter
              </h3>

              <p className="mt-3 text-base leading-relaxed md:text-lg">
                Participants who require a visa support letter for EUVIP 2026
                should indicate this during the registration process by
                completing the Visa Support Request Form and adding it to their
                basket before checkout.
              </p>

              <p className="mt-4 text-base leading-relaxed md:text-lg">
                After completing the checkout and registration payment, please
                send an email to{' '}
                <a
                  href="mailto:Magali.Martin@uni.lu"
                  className="font-bold underline"
                >
                  Magali.Martin@uni.lu
                </a>{' '}
                to confirm your request. The visa support letter will be issued
                once the registration payment has been successfully completed
                and the confirmation email has been received.
              </p>

              <p className="mt-4 text-base font-semibold leading-relaxed md:text-lg">
                Please note that visa support letters can only be issued to
                participants whose EUVIP 2026 registration payment has been
                successfully completed.
              </p>

              <div className="border-muted mt-6 border-t pt-6">
                <h4 className="text-lg font-extrabold md:text-xl">
                  If you did not request a visa support letter during
                  registration
                </h4>

                <p className="mt-3 text-base leading-relaxed md:text-lg">
                  If you have already completed and paid for your EUVIP 2026
                  registration but did not submit the Visa Support Request Form
                  during registration, you may still request a letter by
                  emailing{' '}
                  <a
                    href="mailto:Magali.Martin@uni.lu"
                    className="font-bold underline"
                  >
                    Magali.Martin@uni.lu
                  </a>
                  . Please include the following information exactly as it
                  appears on your passport:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                  <li>Full name</li>
                  <li>Address</li>
                  <li>Nationality</li>
                  <li>Passport number</li>
                  <li>Date of issue</li>
                  <li>Date of expiration</li>
                  <li>Place of birth</li>
                  <li>Date of birth</li>
                </ul>

                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Once your registration payment has been verified and the
                  required information has been received, the visa support
                  letter will be sent to you.
                </p>
              </div>

              <p className="mt-6 text-base leading-relaxed md:text-lg">
                We strongly recommend submitting your request as early as
                possible and checking the applicable visa requirements well in
                advance of your planned travel date, as visa processing times
                may vary.
              </p>

              <p className="mt-4 text-sm leading-relaxed opacity-75 md:text-base">
                A visa support letter does not constitute a visa and does not
                guarantee that a visa application will be approved.
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
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Accommodation
              </h2>
              <div
                className="bg-accent mt-3 h-1 w-16 rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-extrabold md:text-2xl">
              Parc Alvisse Hotel Conference and Spa
            </h3>

            <p className="mt-1 text-base font-semibold md:text-lg">
              On-site accommodation
            </p>

            <p className="mt-6 w-full text-base leading-relaxed md:text-lg">
              The conference will take place at <strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Parc%20Alvisse%20Hotel%20Conference%20%26%20Spa%2C%20Luxembourg"
                target="_blank"
                rel="noreferrer"
              >
                Parc Alvisse Hotel Conference &amp; Spa, Luxembourg
              </a>
            </strong>. Conference participants can stay directly at the event venue and
              benefit from preferential EUVIP 2026 rates. The hotel offers
              comfortable rooms together with an on-site restaurant, bar,
              conference facilities, and wellness areas.
            </p>

            {/* Room rates */}
            <div className="border-muted mt-8 overflow-hidden border shadow-sm">
              <div className="bg-container px-5 py-4 md:px-6">
                <h4 className="text-lg font-extrabold md:text-xl">
                  Preferential EUVIP 2026 Room Rates
                </h4>
                <p className="mt-1 text-base opacity-75 md:text-lg">
                  Rates displayed per room, per night.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead>
                    <tr className="border-muted border-b">
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                        Occupancy
                      </th>
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                        Standard Rate
                      </th>
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                        Comfort Room
                      </th>
                      <th className="px-5 py-4 text-base font-bold md:px-6 md:text-lg">
                        Superior Room
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-muted border-b">
                      <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                        Single
                      </td>
                      <td className="px-5 py-4 text-base line-through opacity-70 md:px-6 md:text-lg">
                        €254.00
                      </td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">
                        €115.00
                      </td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">
                        €155.00
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-base font-semibold md:px-6 md:text-lg">
                        Double / Twin
                      </td>
                      <td className="px-5 py-4 text-base line-through opacity-70 md:px-6 md:text-lg">
                        €276.00
                      </td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">
                        €137.00
                      </td>
                      <td className="px-5 py-4 text-base font-extrabold md:px-6 md:text-lg">
                        €177.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-3 text-base leading-relaxed opacity-70 md:text-lg">
              The Comfort and Superior room prices shown above are preferential
              rates reserved for EUVIP 2026 participants (including breakfast).
            </p>

            {/* Booking instructions */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h4 className="text-xl font-extrabold">
                  How to Make a Reservation
                </h4>

                <ol className="mt-5 space-y-4 text-lg">
                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      1
                    </span>
                    <p className="pt-1 leading-relaxed">
                      Click &quot;Book your room&quot; to open the hotel&apos;s
                      online booking page.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      2
                    </span>
                    <p className="pt-1 leading-relaxed">
                      Enter your planned stay dates (
                      <u>availabilities between 27/09 and 01/10 only</u>).
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      3
                    </span>
                    <p className="pt-1 leading-relaxed">
                      Enter the EUVIP promotional code.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white">
                      4
                    </span>
                    <p className="pt-1 leading-relaxed">
                      Click the SEARCH AVAILABLE ROOMS button to show the
                      available room options.
                    </p>
                  </li>
                </ol>

                <a
                  href="https://reservations.cubilis.eu/alvisse-parc-hotel-luxembourg"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent mt-7 inline-flex items-center justify-center px-5 py-3 text-base font-bold text-white shadow-sm transition hover:opacity-90 md:text-lg"
                >
                  Book your room
                </a>
              </div>

              {/* Promotional code and deadline */}
              <aside className="border-accent bg-container border-l-4 p-6 shadow-sm">
                <p className="font-extrabold">Promotional code</p>

                <div className="mt-3">
                  <code className="border-muted bg-background inline-block border px-4 py-2 text-lg font-extrabold tracking-wider">
                    EUVIP-0926
                  </code>
                </div>

                <p className="mt-5 text-base leading-relaxed md:text-lg">
                  Both the stay dates and the promotional code must be entered
                  on the booking page. Otherwise, the preferential rates will
                  not be displayed.
                </p>

                <div className="border-muted mt-5 border-t pt-5">
                  <p className="font-extrabold">Booking deadline</p>
                  <p className="mt-1 text-lg font-extrabold">17 August 2026</p>

                  <p className="mt-2 text-base leading-relaxed opacity-75 md:text-lg">
                    Rooms not booked by this date will be released back into the
                    hotel&apos;s general inventory. Reservations may still be
                    possible afterwards, subject to availability.
                  </p>
                </div>
              </aside>
            </div>

            {/* Payment and cancellation */}
            <div className="border-muted mt-10 border-t pt-8">
              <h4 className="text-xl font-extrabold">
                Payment and Cancellation Policy
              </h4>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div className="border-muted border p-5">
                  <h5 className="font-extrabold">Payment</h5>
                  <p className="mt-2 text-base leading-relaxed md:text-lg">
                    Full payment is required at the time of booking.
                  </p>
                </div>

                <div className="border-muted border p-5">
                  <h5 className="font-extrabold">Cancellation</h5>
                  <p className="mt-2 text-base leading-relaxed md:text-lg">
                    Reservations may be cancelled free of charge up to one day
                    before arrival. Cancellations made within this period will
                    receive a full refund.
                  </p>
                </div>

                <div className="border-muted border p-5">
                  <h5 className="font-extrabold">No-show</h5>
                  <p className="mt-2 text-base leading-relaxed md:text-lg">
                    In the case of a no-show, 100% of the total booking value
                    will be charged.
                  </p>
                </div>
              </div>
            </div>

            {/* Notice */}
            <div className="border-muted mt-10 border-t pt-8">
              <h4 className="text-xl font-extrabold">
                Additional Information
              </h4>

              <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>
                  Please note that Parc Alvisse Hotel Conference and Spa is{' '}
                  <strong>
                    fully booked on the night of 01/10/2026 to 02/10/2026
                  </strong>
                  . For this reason,{' '}
                  <span className="text-base leading-relaxed text-[#be2222ff] md:text-lg">
                    booking at this hotel is only possible within the window of{' '}
                    <strong>27/09/2026</strong> to <strong>01/10/2026</strong>.
                  </span>
                </li>

                <li>
                  <p className="mt-2 text-base md:text-lg">
                    For those who wish to stay the night of 01/10/2026 to
                    02/10/2026, we have arranged two hotel options next to the
                    airport:
                  </p>

                  <ul className="mt-2 list-disc space-y-4 pl-6">
                    <li>
                      <p className="text-base md:text-lg">
                        <strong>Ibis & Ibis Budget Luxembourg Airport</strong> —
                        Route de Trèves, 2632 Findel, Luxembourg. The{' '}
                        <strong>preferential</strong> rate for EUVIP attendees is
                        120 euros, breakfast included.
                      </p>

                      <p className="text-base md:text-lg">
                        If you&apos;re interested, please download and complete
                        the{' '}
                        <strong>
                          <u>
                            <a
                              target="_blank"
                              href="/EUVIP2026-Booking form.pdf"
                              download
                              rel="noopener noreferrer"
                            >
                              hotel form here
                            </a>
                          </u>
                        </strong>{' '}
                        and send it to{' '}
                        <u>
                          <a href="mailto:Marat.APANESYAN@accor.com">
                            Marat.APANESYAN@accor.com
                          </a>
                        </u>
                        .
                      </p>
                    </li>

                    <li>
                      <p className="text-base md:text-lg">
                        <strong>Moxy Luxembourg Airport</strong> — 2632 Findel,
                        Luxembourg. The <strong>preferential</strong> rate for
                        EUVIP attendees is 174 euros, breakfast included.
                      </p>

                      <p className="text-base md:text-lg">
                        If you&apos;re interested, you can make your reservation
                        using the following link:{' '}
                        <a
                          href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1785495585115&key=GRP&app=resvlink&_branch_match_id=1611756269017482387&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi0uy0wtN7IHytiCODmZedlqmSm2huYWbiaWpqYWpoaGpmrZqZW27kEBanVFqWmpQO156fFJRfnlxalFtsGJaYlFmQC6Wyy4YQAAAA%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
                        >
                          <strong>
                            Book your group rate for EUVIP2026
                          </strong>
                        </a>
                        .
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Luxembourg */}
      <section className="bg-container text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Luxembourg at a Glance
              </h2>
              <div
                className="bg-accent mt-3 h-1 w-16 rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-8 space-y-6 text-base leading-relaxed md:text-lg">
            <p>
              EUVIP 2026 will be held in Luxembourg, a centrally located
              European country offering a stable, international, and
              research-driven environment.
            </p>

            <p>
              Luxembourg is situated at the crossroads of Europe and is easily
              reachable from major European cities. The country hosts a highly
              multicultural society, with more than 170 nationalities, and is
              home to several major European institutions, including the
              European Court of Justice and the European Investment Bank.
            </p>

            <p>
              With one of the highest GDPs per capita worldwide, Luxembourg
              has established itself as a strong hub for research, innovation,
              and technology, with strategic focus areas including artificial
              intelligence, space, cybersecurity, mobility, 6G, and FinTech.
            </p>

            <p>
              Luxembourg City is also known for its UNESCO-listed Old Town and
              historic fortifications, as well as for its cultural life,
              natural landscapes, and high quality of life.
            </p>

            <p>
              To get inspired about what you can do and discover during your
              trip to Luxembourg, take some time to explore{' '}
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

          <div className="mx-auto mt-10 max-w-4xl">
            <Slider />
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Getting There
              </h2>
              <div
                className="bg-accent mt-3 h-1 w-16 rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed md:text-lg">
            Luxembourg is centrally located in Europe and well connected by
            air, train, and road.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                By Air
              </h3>

              <p className="mb-4 text-base leading-relaxed md:text-lg">
                Luxembourg is well connected within Europe and
                internationally.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>
                  Direct flights from numerous European destinations.
                </li>
                <li>Direct flights to more than 100 destinations.</li>
                <li>
                  Airport is approximately 10 minutes from the city centre.
                </li>
                <li>
                  Less than a one-hour flight from major international hubs
                  such as Paris, Frankfurt, Amsterdam, and Geneva.
                </li>
              </ul>
            </div>

            <div className="border-muted border-l-2 pl-8">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                By Train or Car
              </h3>

              <p className="mb-4 text-base leading-relaxed md:text-lg">
                Bordered by Belgium, France, and Germany with excellent
                connections.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-muted border-b">
                      <th className="py-2 text-left font-medium">
                        City
                      </th>
                      <th className="py-2 text-left font-medium">
                        By Car
                      </th>
                      <th className="py-2 text-left font-medium">
                        By Train
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {travelTimes.map((item) => (
                      <tr
                        key={item.city}
                        className="border-muted border-b"
                      >
                        <td className="py-2">
                          {item.city}
                        </td>
                        <td className="py-2">
                          {item.byCar}
                        </td>
                        <td className="py-2">
                          {item.byTrain}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-muted border-l-2 pl-8">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                Local Mobility
              </h3>

              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed marker:text-[#2f566e] md:text-lg">
                <li>
                  Public transport is free of charge nationwide, including
                  buses, trams, and trains.
                </li>
                <li>
                  Taxi services are widely available, including app-based
                  services such as Uber and Webtaxi.
                </li>
                <li>
                  For public transport information in Luxembourg, consult
                  the{' '}
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
      </section>
    </div>
  )
}