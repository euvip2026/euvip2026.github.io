import type { Metadata } from 'next'
import ImportantDates from '@/components/ImportantDates'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const pdfHref = `${basePath}/C4P.pdf`
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-20 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 pb-16">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={`${basePath}/hero.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative w-full text-center text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-left">
          <h1 className="ml-0 text-4xl leading-[1.15] font-extrabold sm:ml-10 sm:text-5xl sm:leading-[1.2] lg:ml-24 lg:text-6xl lg:leading-[1.3]">
            14th European Conference on <br /> Visual Information Processing <br /> EUVIP 2026 <br />
          </h1>
          <p className="mt-8 ml-0 text-lg font-bold sm:mt-10 sm:ml-10 sm:text-xl lg:mt-16 lg:ml-24 lg:text-2xl">
            28th September-1st October 2026, Luxembourg
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:ml-10 sm:flex-row sm:items-start lg:ml-24">
            <a
              href="https://www.linkedin.com/company/euvip-2026/about/"
              target="_blank"
              className="border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
            >
              Follow us on LinkedIn
            </a>

            <a
              href="https://x.com/Euvip2026"
              target="_blank"
              className="border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
            >
              Follow us on X
            </a>

            <a
              href="https://bsky.app/profile/euvip2026.bsky.social"
              target="_blank"
              className="border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
            >
              Follow us on Bluesky
            </a>
          </div>
        </div>

        <a
          href="https://lmih.lu/en/tools/videos/economy/luxembourg-our-common-ground-en/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-[30px] bottom-[20px] z-10 cursor-pointer text-xl font-medium text-white/80 transition-colors hover:text-white md:text-2xl"
          title="Video source: LuXembourg - Our Common Ground | Fête Nationale 2023 VO ST FR"
          aria-label="Video source: LuXembourg - Our Common Ground | Fête Nationale 2023 VO ST FR"
        >
          ©LMIH
        </a>
      </section>

      {/* About */}
      <section className="bg-container text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">About EUVIP 2026</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed opacity-80 md:text-lg">
            <p>
              The 14th European Conference on Visual Information Processing (EUVIP 2026) will take place in Luxembourg
              from the 28th of September to the 1st of October 2026.
            </p>
            <p>
              EUVIP 2026 will bring together researchers and practitioners from academia and industry working in the
              field of visual information processing, an important branch of Artificial Intelligence (AI). EUVIP covers
              a broad range of visual modalities, processing tasks, performance assessment methodologies, and
              applications.
            </p>
            <p>
              The first day of the conference will be dedicated to one-day tutorials. The main Conference Programme will
              include keynote talks, oral and poster sessions, special sessions, panel discussions, and
              industry-oriented activities, providing a forum for presenting recent advances and discussing emerging
              challenges in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-background text-container-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Announcements
            </h2>

            <div
              className="bg-accent mt-3 h-1 w-16 rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="border-muted/60 bg-primary border p-6 text-white shadow-sm inset-shadow-sm">
            <ul className="space-y-4">
              {/* Incode */}
              <li className="rounded-xl border border-white/20 bg-white/5 p-5 shadow-sm">
                <div className="flex flex-col items-start gap-5 sm:flex-row">
                  <a
                    href="https://www.incode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm transition hover:scale-[1.02]"
                    aria-label="Visit Incode website"
                  >
                    <img
                      src={`${basePath}/partners/incode.png`}
                      alt="Incode logo"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <div className="flex min-w-0 flex-1 gap-3 text-lg">
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white"
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <p>
                        <strong className="text-xl">July 20:</strong>{' '}
                        Sponsorship Announcement — We are pleased to welcome{' '}
                        <a
                          href="https://www.incode.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
                        >
                          Incode
                        </a>{' '}
                        as a sponsor.
                      </p>

                      <div className="mt-4 border-l-4 border-white/50 pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                          About Incode
                        </p>

                        <p className="mt-2 w-full leading-relaxed text-white/90">
                          Incode Technologies is a global leader in AI-powered
                          identity verification and biometric authentication.
                          Powered by in-house developed technology in machine
                          learning and liveness detection, Incode develops secure,
                          privacy-conscious identity solutions for governments and
                          enterprises. Its end-to-end identity orchestration
                          platform enables automated verification, authentication,
                          and fraud prevention across digital and in-person
                          interactions while meeting rigorous security and
                          compliance standards. By advancing biometric innovation
                          for high-assurance identity, Incode helps organizations
                          build trusted digital experiences at scale. Headquartered
                          in San Francisco, Incode operates globally across North
                          America, Europe, Latin America, and other international
                          markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* July 18 */}
              <li className="flex gap-3 text-lg">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white"
                  aria-hidden="true"
                />

                <div>
                  <strong className="text-xl">July 18:</strong>{' '}
                  Regular paper and demo acceptance notifications rescheduled to
                  July 23, 2026, at 23:59 AoE.
                </div>
              </li>

              {/* The Dots Luxembourg */}
              <li className="rounded-xl border border-white/20 bg-white/5 p-5 shadow-sm">
                <div className="flex flex-col items-start gap-5 sm:flex-row">
                  <a
                    href="https://thedots.lu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm transition hover:scale-[1.02]"
                    aria-label="Visit The Dots Luxembourg website"
                  >
                    <img
                      src={`${basePath}/partners/the_dots_luxembourg.png`}
                      alt="The Dots Luxembourg logo"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <div className="flex min-w-0 flex-1 gap-3 text-lg">
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white"
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <p>
                        <strong className="text-xl">July 17:</strong>{' '}
                        Sponsorship Announcement — We are pleased to welcome{' '}
                        <a
                          href="https://thedots.lu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
                        >
                          The Dots Luxembourg
                        </a>{' '}
                        as a sponsor.
                      </p>

                      <div className="mt-4 border-l-4 border-white/50 pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                          About The Dots Luxembourg
                        </p>

                        <p className="mt-2 w-full leading-relaxed text-white/90">
                          Based in Luxembourg, The Dots is a marketing and events
                          agency dedicated to the technology ecosystem. It supports
                          companies, institutions, startups, and innovative
                          organizations in building meaningful brands,
                          strengthening market presence, and engaging key
                          audiences. Combining strategic communication, branding,
                          content and media production, community building, lead
                          generation, and event management, The Dots delivers
                          tailored, end-to-end solutions that increase visibility,
                          create lasting impact, foster valuable connections, and
                          transform ideas into experiences that support sustainable
                          business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* June 30 */}
              <li className="text-lg">
                <strong className="text-xl">June 30:</strong>{' '}
                All special sessions and the student session submission deadlines
                extended to 7 July 2026, 23:59 AoE.
              </li>

              {/* June 5 */}
              <li className="text-lg">
                <strong className="text-xl">June 5:</strong>{' '}
                Paper submission deadline extended to 15 June 2026, 23:59 AoE.
              </li>

              {/* May 28 */}
              <li className="text-lg">
                <strong className="text-xl">May 28:</strong>{' '}
                Tutorial submission deadline extended to 9 June 2026, 23:59 AoE.
              </li>

              {/* May 20 */}
              <li className="text-lg">
                <strong className="text-xl">May 20:</strong>{' '}
                Paper submission deadline extended to 5 June 2026, 23:59 AoE.
              </li>

              {/* May 19 */}
              <li className="text-lg">
                <strong className="text-xl">May 19:</strong>{' '}
                Community and Society Announcement — supported by{' '}
                <strong>IEEE Signal Processing Society</strong>
              </li>

              {/* May 4 */}
              <li className="text-lg">
                <strong className="text-xl">May 04:</strong>{' '}
                Community and Society Announcement — supported by{' '}
                <strong>IEEE Students</strong>
              </li>

              {/* Google */}
              <li className="rounded-xl border border-white/20 bg-white/5 p-5 shadow-sm">
                <div className="flex flex-col items-start gap-5 sm:flex-row">
                  <a
                    href="https://about.google/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm transition hover:scale-[1.02]"
                    aria-label="Visit Google website"
                  >
                    <img
                      src={`${basePath}/partners/google.png`}
                      alt="Google logo"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <div className="flex min-w-0 flex-1 gap-3 text-lg">
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white"
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <p>
                        <strong className="text-xl">Apr 30:</strong>{' '}
                        Sponsorship Announcement — We are pleased to welcome{' '}
                        <a
                          href="https://about.google/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
                        >
                          Google
                        </a>{' '}
                        as a sponsor.
                      </p>

                      <div className="mt-4 border-l-4 border-white/50 pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                          About Google
                        </p>

                        <p className="mt-2 w-full leading-relaxed text-white/90">
                          Google is a global technology company whose mission is to
                          organize the world’s information and make it universally
                          accessible and useful. Its products and platforms help
                          billions of people search for information, communicate,
                          navigate, learn, work, create, and grow their businesses.
                          Google’s portfolio includes Search, YouTube, Maps, Gmail,
                          Chrome, Android, Google Workspace, Google Cloud, Pixel
                          devices, and advertising solutions. The company also
                          advances artificial intelligence through Google DeepMind,
                          Google Research, and AI-powered features integrated across
                          its services. Guided by a focus on users, Google develops
                          accessible, secure, and helpful technologies for
                          individuals, businesses, developers, institutions, and
                          communities worldwide. Its advertising business funds
                          many widely available products, while subscriptions,
                          devices, applications, and enterprise services provide
                          additional revenue. Google further supports digital
                          skills, sustainability, scientific research, social
                          impact, and economic opportunity through partnerships,
                          training initiatives, responsible innovation, and
                          philanthropic work, aiming to make technology beneficial
                          and practical for everyone across the globe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* March 20 */}
              <li className="text-lg">
                <strong className="text-xl">Mar 20:</strong>{' '}
                Community and Society Announcement — supported by{' '}
                <strong>IEEE Benelux</strong>
              </li>

              {/* March 6 */}
              <li className="text-lg">
                <strong className="text-xl">Mar 06:</strong>{' '}
                Community and Society Announcement — supported by{' '}
                <strong>EURASIP</strong>
              </li>

              {/* Luxembourg Convention Bureau */}
              <li className="rounded-xl border border-white/20 bg-white/5 p-5 shadow-sm">
                <div className="flex flex-col items-start gap-5 sm:flex-row">
                  <a
                    href="https://luxembourg-convention-bureau.lu/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm transition hover:scale-[1.02]"
                    aria-label="Visit Luxembourg Convention Bureau website"
                  >
                    <img
                      src={`${basePath}/partners/luxembourg_convention_bureau.png`}
                      alt="Luxembourg Convention Bureau logo"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <div className="flex min-w-0 flex-1 gap-3 text-lg">
                    <span
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white"
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <p>
                        <strong className="text-xl">Feb 26:</strong>{' '}
                        Sponsorship Announcement — We are thrilled to welcome{' '}
                        <a
                          href="https://luxembourg-convention-bureau.lu/en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
                        >
                          Luxembourg Convention Bureau
                        </a>{' '}
                        as a sponsor.
                      </p>

                      <div className="mt-4 border-l-4 border-white/50 pl-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                          About Luxembourg Convention Bureau
                        </p>

                        <p className="mt-2 w-full leading-relaxed text-white/90">
                          Created by Luxembourg City and the Ministry of the
                          Economy, the Luxembourg Convention Bureau is the official
                          body promoting the Grand Duchy as a leading destination
                          for professional events. It provides event organisers
                          with free, impartial, and tailored support for meetings,
                          conferences, congresses, and corporate gatherings.
                          Through expert advice, venue selection, supplier
                          connections, site visits, and familiarisation trips, the
                          Bureau simplifies event planning while showcasing
                          Luxembourg’s accessibility, multilingual expertise,
                          innovative ecosystem, high-quality infrastructure, and
                          hospitality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* February 16 */}
              <li className="text-lg">
                <strong className="text-xl">Feb 16:</strong>{' '}
                <a href={pdfHref} download className="underline">
                  Call for Papers
                </a>{' '}
                is posted and can be downloaded.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

      {/* Important dates */}
      <section className="bg-container text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Important Dates</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>

          <ImportantDates />
        </div>
      </section>

      {/* Broadening Participation (BP) */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Broadening Participation (BP)</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed opacity-80 md:text-lg">
            <p>
              The EUVIP community is committed to fostering a diverse, equitable, and inclusive conference. This year,
              over 40% of the scientific committee and all four keynote speakers are women.
            </p>
            <p>
              For EUVIP 2026, the organizing committee is working to help broaden participation at the conference.
              Specifically, we will support the following:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>10 travel grants of €500 for PhD students, prioritizing those from lower-income regions;</li>
              <li>reduced registration fees for students;</li>
              <li>networking events designed to build connections across communities.</li>
            </ul>
            <p>
              EUVIP 2026 is proud to collaborate with the IEEE Student Branch of the University of Luxembourg, who will
              actively contribute to the conference organization and benefit from dedicated mentorship and networking
              opportunities with senior researchers and industry professionals.
            </p>
            <p>
              If you would like to be considered for this support, please complete the{' '}
              <a href={`https://forms.gle/SuqN2dMZDuKKsoYRA`} target="_blank" className="font-bold underline">
                travel support application
              </a>
              . If you have any questions, concerns, or feedback related to these efforts at EUVIP 2026, please{' '}
              <a href={`${basePath}/contact/`} className="font-bold underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-container text-container-foreground">
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
              <p className="mt-4 text-xl font-extrabold md:text-2xl">Parc Alvisse Hotel Conference and Spa</p>
              <p className="mt-1 text-base font-semibold opacity-80 md:text-lg">Luxembourg</p>

              <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
                The Parc Alvisse Hotel Conference and Spa is a modern conference venue located in a green and quiet
                area, while remaining well connected to the city centre. The venue offers dedicated conference
                facilities, on-site accommodation, restaurant services, and wellness areas, providing a convenient
                setting for all conference activities.
              </p>

              <a
                className="border-muted bg-background hover:bg-background/80 rounded-x mt-6 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
                href="https://www.google.com/maps/search/?api=1&query=Parc%20Alvisse%20Hotel%20Conference%20%26%20Spa%2C%20Luxembourg"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="border-muted bg-background overflow-hidden rounded-xs border shadow-sm">
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

      {/* Partners */}
      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Sponsors</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>
          <img src={`${basePath}/partners/sponsors.png`} alt="Sponsors Image" className="w-full object-cover" />
        </div>
      </section>
    </>
  )
}
