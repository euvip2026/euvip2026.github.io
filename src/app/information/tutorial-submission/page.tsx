import Information from '@/components/Images/Information'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tutorial Submission',
  alternates: { canonical: '/information/tutorial-submission/' },
}

export default function TutorialSubmission() {
  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <Information className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Tutorial Submission</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <section className="bg-background text-container-foreground mt-4 mb-8">
          <div className="space-y-4 text-2xl leading-relaxed">
            <p>To be announced soon.</p>
          </div>
        </section>
      </div>
    </>
  )
}
