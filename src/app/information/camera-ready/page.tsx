import Information from '@/components/Images/Information'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Camera-Ready Paper Preparation and Submission Instructions ',
  alternates: { canonical: '/information/camera-ready/' },
}

export default function CameraReadyInstructions() {
  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <Information className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Camera-Ready Paper Preparation and Submission Instructions{' '}
            </h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="border-accent bg-container mt-8 border-l-4 p-5 shadow-sm md:p-6">
          <h3 className="text-container-foreground text-xl font-extrabold md:text-2xl">
            Camera-ready deadline: 5 August 2026 (23:59 AoE)
          </h3>
          <p className="text-container-foreground mt-3 text-base leading-relaxed md:text-lg">
            Your camera-ready paper and the IEEE electronic Copyright Form (eCF) must both be submitted through the
            EUVIP 2026 submission system no later than 5 August 2026, 23:59 AoE.
          </p>
        </div>
        <p className="text-muted-foreground mt-4 text-base leading-relaxed md:text-lg">
          Please read these instructions carefully. Papers that are not IEEE Xplore®-compliant, do not carry the correct
          copyright notice, or are not accompanied by a completed eCF cannot be included in the proceedings or the IEEE
          Xplore® Digital Library.{' '}
        </p>
      </section>
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <section className="bg-background text-container-foreground mt-4 mb-8">
          <div className="space-y-4 text-2xl leading-relaxed">
            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">1. Before Creating Your Final PDF</h2>

                <p className="text-container-foreground mt-3 text-lg leading-relaxed">
                  Revise your paper carefully, taking into account all reviewer comments, and format it according to the
                  IEEE conference paper guidelines.
                </p>

                <div className="text-container-foreground mt-6 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Use the official IEEE conference templates (MS Word and LaTeX), available at{' '}
                      <a href="/information/paper-kit-guidelines" className="font-semibold hover:underline">
                        Paper Kit and Guidelines
                      </a>
                      .
                    </li>

                    <li>Include all author names and affiliations on the first page of your source document.</li>

                    <li>
                      Make sure your document contains no headers, no footers—except for the IEEE copyright notice
                      described below—and no page numbers.
                    </li>

                    <li>Proofread the source document thoroughly to confirm that it needs no further revision.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">2. Add the IEEE Copyright Notice</h2>

                <p className="text-container-foreground mt-3 text-lg leading-relaxed">
                  Add the IEEE copyright notice to the bottom of the first page of your source document, in place of the
                  placeholder footer <span className="font-mono">XXX-X-XXXX-XXXX-X/XX/$XX.00 ©20XX IEEE</span>. Select
                  the notice that matches your situation:
                </p>

                <div className="text-container-foreground mt-6 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      <span className="font-semibold">All authors employed by the U.S. government:</span> U.S.
                      Government work not protected by U.S. copyright
                    </li>

                    <li>
                      <span className="font-semibold">
                        All authors employed by a Crown government (UK, Canada, Australia):
                      </span>{' '}
                      979-8-3195-3697-6/26/$31.00 ©2026 Crown
                    </li>

                    <li>
                      <span className="font-semibold">All authors employed by the European Union:</span>{' '}
                      979-8-3195-3697-6/26/$31.00 ©2026 European Union
                    </li>

                    <li>
                      <span className="font-semibold">All other papers:</span> 979-8-3195-3697-6/26/$31.00 ©2026 IEEE
                    </li>
                  </ul>
                </div>

                <p className="text-container-foreground mt-6 text-lg leading-relaxed">
                  <span className="font-semibold">LaTeX users </span>can add the following lines just before{' '}
                  <code className="font-mono">{'\\begin{document}'}</code> so the copyright notice appears in the IEEE
                  template:
                </p>

                <pre className="text-container-foreground mt-6 overflow-x-auto rounded-md bg-black/5 p-4 text-sm leading-relaxed">
                  <code>
                    {String.raw`\makeatletter
\def\ps@IEEEtitlepagestyle{%
  \def\@oddfoot{\mycopyrightnotice}%
  \def\@evenfoot{}%
}
\def\mycopyrightnotice{%
  {\footnotesize 979-8-3195-3697-6/26/\$31.00~\copyright~2026 IEEE\hfill}
  \gdef\mycopyrightnotice{}%
}
\makeatother`}
                  </code>
                </pre>
                <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                  Replace the notice text above with the one that applies to your paper. Note: the exact footer macro
                  may vary slightly across template versions — use whichever mechanism your template provides, as long
                  as the correct notice appears at the bottom of the first page.{' '}
                </p>
              </div>
            </section>
            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">
                  3. Check IEEE Xplore® Compliance with PDF eXpress
                </h2>

                <p className="text-container-foreground mt-3 text-lg leading-relaxed">
                  All PDF submissions must be IEEE Xplore®-compliant. Non-compliant files cannot be published and will
                  be removed from the EUVIP 2026 proceedings. Before uploading your paper to the submission system,
                  verify or create a compliant PDF using the IEEE PDF eXpress® service.
                </p>

                <div className="text-container-foreground mt-6 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Go to{' '}
                      <a
                        href="https://ieee-pdf-express.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                      >
                        ieee-pdf-express.org
                      </a>
                      .
                    </li>

                    <li>
                      Use the EUVIP 2026 Conference ID: <span className="font-semibold">72486X</span>.
                    </li>

                    <li>
                      Use PDF eXpress to check your existing PDF or to convert your source files into an IEEE
                      Xplore®-compliant PDF.
                    </li>
                  </ul>
                </div>

                <h3 className="text-container-foreground mt-8 text-xl font-bold">First-time PDF eXpress users</h3>

                <div className="text-container-foreground mt-4 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Click <span className="font-semibold">"Create account"</span>.
                    </li>

                    <li>
                      Enter <span className="font-semibold">72486X</span> as the Conference ID, together with your email
                      address and a new password.
                    </li>

                    <li>
                      Continue entering the requested information. You will receive confirmation of your account setup
                      online and by email.
                    </li>
                  </ul>
                </div>

                <h3 className="text-container-foreground mt-8 text-xl font-bold">Previous PDF eXpress users</h3>

                <div className="text-container-foreground mt-4 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Log in at{' '}
                      <a
                        href="https://ieee-pdf-express.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                      >
                        ieee-pdf-express.org
                      </a>
                      .
                    </li>

                    <li>
                      Use Conference ID <span className="font-semibold">72486X</span> and the same email address and
                      password used for previous conferences.
                    </li>

                    <li>After logging in, verify that your contact information is correct.</li>
                  </ul>
                </div>

                <div className="border-container-foreground text-container-foreground mt-8 border-2 p-4 text-lg leading-relaxed">
                  <h3 className="text-lg font-bold text-[#F57327]">Important:</h3>

                  <p>
                    Any change made to a PDF after PDF eXpress conversion or checking—including inserting the copyright
                    notice, headers, page numbers, or watermarks—may invalidate IEEE Xplore® compatibility. Make all
                    such changes to your source document before creating the final PDF.
                  </p>
                </div>

                <p className="text-container-foreground mt-6 text-lg leading-relaxed">
                  Support for IEEE PDF eXpress is available at{' '}
                  <a href="mailto:PDFSupport@ieee.org" className="font-semibold hover:underline">
                    PDFSupport@ieee.org
                  </a>
                  .
                </p>
              </div>
            </section>
            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">4. Upload Your Camera-Ready Paper</h2>

                <p className="text-container-foreground mt-3 text-lg leading-relaxed">
                  Once you have an acceptable IEEE Xplore®-compliant PDF, return to the{' '}
                  <a
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FEUVIP2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline"
                  >
                    EUVIP 2026 submission system
                  </a>{' '}
                  and upload it by selecting <span className="font-semibold">“Create Camera Ready Submission”</span>{' '}
                  from the <span className="font-semibold">“Actions”</span> column.
                </p>

                <div className="border-container-foreground text-container-foreground mt-8 border-2 p-4 text-lg leading-relaxed">
                  <h3 className="text-lg font-bold text-[#F57327]">Important:</h3>

                  <p>
                    <strong>
                      Checking your PDF for compliance and submitting your final paper for publication are two separate
                      steps.{' '}
                    </strong>{' '}
                    After using PDF eXpress, you must return to the EUVIP 2026 submission system and upload your
                    compliant PDF there -- PDF eXpress alone does not submit your paper to the conference.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">
                  5. Complete and Upload the IEEE Copyright Form (eCF)
                </h2>

                <p className="text-container-foreground mt-3 text-lg leading-relaxed">
                  The IEEE electronic Copyright Form (eCF) must be completed and uploaded to the{' '}
                  <a
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FEUVIP2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline"
                  >
                    EUVIP 2026 submission system
                  </a>{' '}
                  for your accepted paper to be published in the EUVIP 2026 proceedings and the IEEE Xplore® Digital
                  Library.
                </p>

                <div className="text-container-foreground mt-6 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Go to the{' '}
                      <a
                        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FEUVIP2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline hover:no-underline"
                      >
                        EUVIP 2026 submission system
                      </a>{' '}
                      and select your paper.
                    </li>

                    <li>
                      From the <span className="font-semibold">“Actions”</span> column, select{' '}
                      <span className="font-semibold">“Submit IEEE Copyright Form”</span>.
                    </li>

                    <li>
                      Click <span className="font-semibold">“here”</span> to be redirected to the IEEE Copyright
                      website.
                    </li>

                    <li>Follow the instructions on the IEEE Copyright website.</li>

                    <li>
                      Press <span className="font-semibold">“Download the completed Agreement (PDF)”</span>, then press{' '}
                      <span className="font-semibold">“Done”</span>.
                    </li>

                    <li>
                      Upload the downloaded <span className="font-semibold">CopyrightReceipt.pdf</span> to the{' '}
                      <a
                        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FEUVIP2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline hover:no-underline"
                      >
                        EUVIP 2026 submission system
                      </a>
                      .
                    </li>
                  </ul>
                </div>

                <p className="text-container-foreground mt-6 text-lg leading-relaxed">
                  For more details, see the{' '}
                  <a
                    href="https://cmt3.research.microsoft.com/docs/help/author/camera-ready-submission.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline"
                  >
                    CMT camera-ready submission help page
                  </a>
                  .
                </p>
              </div>
            </section>
            <section className="bg-container mt-12 px-4 md:px-0">
              <div className="mx-auto max-w-7xl py-8 md:px-4">
                <h2 className="text-container-foreground text-2xl font-bold">Final Checklist</h2>

                <div className="text-container-foreground mt-6 text-lg">
                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Paper revised according to the reviewer comments and formatted using the official IEEE template.
                    </li>

                    <li>Author names and affiliations included on the first page.</li>

                    <li>Correct IEEE copyright notice added to the bottom of the first page.</li>

                    <li>No headers, footers—except for the copyright notice—or page numbers.</li>

                    <li>
                      PDF validated as IEEE Xplore®-compliant using PDF eXpress with Conference ID{' '}
                      <span className="font-semibold">72486X</span>.
                    </li>

                    <li>
                      IEEE Xplore®-compliant PDF uploaded to the{' '}
                      <a
                        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FEUVIP2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline hover:no-underline"
                      >
                        EUVIP 2026 submission system
                      </a>
                      .
                    </li>

                    <li>
                      IEEE eCF completed and <span className="font-semibold">CopyrightReceipt.pdf</span> uploaded to the
                      submission system.
                    </li>

                    <li>
                      Everything submitted by <span className="font-semibold">5 August 2026, 23:59 AoE</span>.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="border-muted mt-10 border-t pt-8">
            <h4 className="text-xl font-extrabold">Questions? </h4>
            <p className="text-container-foreground mt-6 text-lg leading-relaxed">
              For questions about the camera-ready submission, please contact the EUVIP 2026 organizing committee via
              the{' '}
              <a
                href="https://euvip2026.github.io/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:no-underline"
              >
                conference website
              </a>
              . For IEEE PDF eXpress technical support, email{' '}
              <a href="mailto:PDFSupport@ieee.org" className="font-semibold underline hover:no-underline">
                PDFSupport@ieee.org
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
