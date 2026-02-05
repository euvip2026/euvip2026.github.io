import Speaker from '@/components/Speaker'
import { speakers } from '@/data/speakers'

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

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
      <section className="bg-background text-container-foreground">
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
              from 28th of September to 1st of October 2026.
            </p>
            <p>
              EUVIP 2026 will bring together researchers and practitioners from academia and industry working in the
              field of visual information processing, an important branch of Artificial Intelligence (AI). EUVIP covers
              a broad range of visual modalities, processing tasks, performance assessment methodologies, and
              applications.
            </p>
            <p>
              The first day of the conference will be dedicated to one-day tutorials. The main conference programme will
              include keynote talks, oral and poster sessions, special sessions, panel discussions, and
              industry-oriented activities, providing a forum for presenting recent advances and discussing emerging
              challenges in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-container text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Speakers</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {speakers.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-500 italic">To be announced soon.</p>
              </div>
            ) : (
              speakers.map((speaker, index) => (
                <Speaker
                  key={`speaker-${index}`}
                  name={speaker.name}
                  affiliation={speaker.affiliation}
                  description={speaker.description}
                  country={speaker.country}
                  imageUrl={speaker.imageUrl}
                  talkTitle={speaker.talkTitle}
                  profileUrl={speaker.profileUrl}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Partners */}
      {/* <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Partners</h2>
              <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
            </div>
            <div className="text-sm font-medium opacity-70">Interested in partnering? Contact us.</div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border-muted bg-container flex h-20 items-center justify-center rounded-2xl border"
              >
                <div className="text-sm font-semibold opacity-70">Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
    </>
  )
}
