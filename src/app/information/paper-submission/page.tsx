import Information from '@/components/Images/Information'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paper Submission',
  alternates: { canonical: '/information/paper-submission/' },
}

export default function PaperSubmission() {
  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <Information className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Paper Submission</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <section className="bg-background text-container-foreground mt-4 mb-8">
          <div className="space-y-4 text-2xl leading-relaxed">
            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">Submission guidelines</h2>

                <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
                  Prospective authors are invited to submit full-length papers, with a maximum of 6 pages of technical content , figures, and references, through the submission system (page 6 should contain only references). Submitted papers will undergo a double-blind review process. Accepted papers will be presented in a lecture or poster session. Regular papers p resented at the conference will be included in the conference proceedings and are expected to be included in IEEE Xplore. EUVIP 2026 will recognize outstanding contributions with the Best Paper Award, as well as the Best Student Paper Award and the Student Demo Award.
                  
                  <p>All papers must be submitted electronically via the Microsoft CMT submission system (
                  <a
                    href="https://cmt3.research.microsoft.com/EUVIP2026"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold hover:underline"
                  >
                    https://cmt3.research.microsoft.com/EUVIP2026
                  </a>
                  ):
                </p>
                </p>
                <div className="flex w-full justify-center">
                  <a
                    className="text-container-foreground border-muted bg-background hover:bg-background/80 mt-8 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
                    href="https://cmt3.research.microsoft.com/EUVIP2026"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Submit in Microsoft CMT
                  </a>
                </div>
                <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
                  The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
                  This service was provided for free by Microsoft and they bore all expenses, including costs for
                  Azure cloud services as well as for software development and support.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
