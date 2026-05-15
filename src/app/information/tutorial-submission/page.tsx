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
            <section className="bg-container mt-12 px-4 md:px-0">
            <div className="mx-auto max-w-7xl py-8 md:px-4">
              <h2 className="text-container-foreground text-2xl font-bold">
                Submission Instructions
              </h2>

              <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
                Prospective tutorial proposers are welcome to submit their proposals to the
                Tutorials Chairs, who would be happy to also answer questions and provide
                preliminary feedback:
              </p>

              <div className="text-container-foreground/80 mt-6 space-y-3 text-lg">
                <p>
                  <a
                    href="mailto:stefania.colonnese@uniroma1.it"
                    className="font-semibold hover:underline"
                  >
                    stefania.colonnese@uniroma1.it
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:rachid.jennane@univ-orleans.fr"
                    className="font-semibold hover:underline"
                  >
                    rachid.jennane@univ-orleans.fr
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:Habib.Zaidi@hcuge.ch"
                    className="font-semibold hover:underline"
                  >
                    Habib.Zaidi@hcuge.ch
                  </a>
                </p>
              </div>
            </div>
          </section>
          </div>
        </section>
      </div>
    </>
  )
}
