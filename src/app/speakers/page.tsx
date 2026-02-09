import Speaker from '@/components/Speaker'
import { speakers } from '@/data/speakers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speakers',
  alternates: { canonical: '/speakers/' },
}

export default function SpeakersPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img src={`${basePath}/speakers.png`} alt="Contact Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Plenary Speakers</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="text-container-foreground mx-auto max-w-7xl px-4">
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
                // description={speaker.description}
                country={speaker.country}
                imageUrl={speaker.imageUrl}
                talkTitle={speaker.talkTitle}
                talkAbstract={speaker.talkAbstract}
                profileUrl={speaker.profileUrl}
                bio={speaker.bio}
              />
            ))
          )}
        </div>
      </section>
    </>
  )
}
