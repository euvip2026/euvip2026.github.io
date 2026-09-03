'use client'

export default function SchedulePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const pdfUrl = `${basePath}/EUVIP2026_Program_summary_final_version.pdf`

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img
            src={`${basePath}/program.png`}
            alt="Program Image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Programme Schedule
            </h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-container-foreground text-base leading-relaxed md:text-lg">
              The full conference programme is available below. The schedule is preliminary and may change.
            </p>
            <a
              href={pdfUrl}
              download="EUVIP2026_Program_summary_final_version.pdf"
              className="bg-primary text-primary-foreground inline-flex shrink-0 items-center justify-center px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Download programme (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Program PDF */}
      <section className="bg-background pb-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="h-[85vh] w-full overflow-hidden border border-black/10 shadow-sm">
            <object data={pdfUrl} type="application/pdf" className="h-full w-full">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="text-container-foreground text-base">
                  Your browser can&apos;t display the PDF preview here.
                </p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
                >
                  Download the programme (PDF)
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
    </>
  )
}