import Information from '@/components/Images/Information'

export default function PaperKitGuidelines() {
  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <Information className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Paper Kit &amp; Guidelines
            </h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <section className="bg-background text-container-foreground mt-4 mb-8">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Templates for LaTeX and Word are available for download:{' '}
              <a
                href="https://www.ieee.org/conferences/publishing/templates"
                target="_blank"
                rel="noreferrer"
                className="text-container-foreground hover:decoration-container-foreground font-bold underline underline-offset-4"
              >
                Download Template
              </a>
            </p>

            <p className="font-semibold">
              The paper submitted must not contain the names of the authors or their affiliations or any information or
              details that could enable the reviewer to identify the authors.
            </p>

            <p>
              Full Papers may be no longer than <span className="font-semibold">six (6) pages</span>{' '}
              <span className="opacity-80">(4 minimum)</span>, including figures, tables and references. Project
              Dissemination Papers may be no longer than <span className="font-semibold">two (2) pages</span>, including
              figures, tables and references. All submissions must be in{' '}
              <span className="font-semibold">A4-sized PDF</span>. All fonts and subsets must be embedded in the PDF
              file. We recommend that you use the Word or LaTeX IEEE conference templates to produce your document,
              since they have been set up to meet the formatting guidelines required. When using these files, please
              double-check the paper size in your page setup to make sure you are using the A4-size paper layout. The
              papers that do not conform to the formatting guidelines will not be considered.
            </p>

            <p>
              Given the double-blind review process, applicable to Full Papers only, authors should not know the names
              of the reviewers of their papers, and reviewers should not know the names of the authors. Please prepare
              your paper in a way that preserves the anonymity of the authors.
            </p>

            <ul className="ml-6 list-disc space-y-2">
              <li>Do not put the authors’ names or affiliations under the title.</li>
              <li>
                Avoid using phrases such as “our previous work” when referring to earlier publications by the authors.
              </li>
              <li>
                Remove information that may identify the authors in the acknowledgments (e.g., co-workers and grants).
              </li>
              <li>Avoid providing links to websites that identify the authors.</li>
            </ul>

            <p>
              EUVIP 2026 requires each accepted paper to be presented by one of the authors{' '}
              <span className="font-semibold">in-person</span> at the conference site according to the schedule
              published. One of the authors must register for the conference at one of the{' '}
              <span className="font-semibold">non-student rates</span> offered, and must register before the deadline
              given for author registration. Any paper accepted into the technical program, but not presented on-site
              will be withdrawn from the official proceedings archived on IEEE Xplore.
            </p>

            <p>
              By submitting a manuscript, the authors guarantee that it is not previously published or under review
              elsewhere in substantially similar form. Furthermore, no paper which contains significant overlap with the
              contributions of the submission should be submitted during the review period to either a journal or a
              conference. If there are papers that may appear to violate any of these conditions, then it is the
              authors’ responsibility to (a) cite these papers (preserving anonymity), (b) argue in the body of your
              paper why your paper is nontrivially different from these concurrent submissions, and (c) include
              anonymized versions of those papers with the submission.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
