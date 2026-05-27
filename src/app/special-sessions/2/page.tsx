import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Sessions',
  alternates: { canonical: '/special-sessions/2/' },
}

export default function SpecialSessionsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const organizers: Array<{ name: string; email: string; affiliation: string }> = [
    {
      name: 'Nicla M. Notarangelo',
      email: 'nicla.notarangelo@uni.lu',
      affiliation: 'SnT, University of Luxembourg, Luxembourg',
    },
    {
      name: 'Miguel-Ángel Fernández-Torres',
      email: 'migferna@ing.uc3m.es',
      affiliation: 'Signal Theory and Communications Department, Universidad Carlos III de Madrid, Spain',
    },
  ]

  const schedule: Array<[string, string]> = [
    ['Paper submission deadline', '30 June 2026'],
    ['Review period', '30 June – 15 July 2026'],
    ['Decision to authors', '18 July 2026'],
    ['Camera Ready', '5 August 2026'],
  ]

  const topics: Array<{ label: string; children?: string[] }> = [
    { label: 'Visual AI for weather, climate, satellite, aerial, UAV, street-view, and other geo-referenced data' },
    { label: 'Multimodal data fusion for Earth observation and geospatial analysis' },
    { label: 'Development, adaptation, and application of geospatial foundation models' },
    { label: 'Uncertainty-aware, explainable, robust, and scalable AI for operational geospatial systems' },
    {
      label: 'Applied visual AI across diverse domains, specifically:',
      children: [
        'Environmental monitoring, ecosystem assessment, and agricultural classification',
        'Urban analytics, regeneration, and built-environment monitoring',
        'Cultural and architectural heritage observation and change analysis',
        'Disaster mapping, impact assessment, and sustainability resilience',
      ],
    },
  ]

  return (
    <>
      <section className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img src={`${basePath}/special-session.png`} alt="Special Sessions Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Special Sessions</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-background text-container-foreground">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <div className="bg-container text-container-foreground mt-4 p-6 shadow-sm md:p-8">
            <h1 className="text-2xl leading-tight font-bold md:text-3xl">
              Multimodal Data Fusion and Visual Artificial Intelligence for Earth Observation
            </h1>

            <div className="mt-6">
              <h2 className="text-xl font-bold">Organizers</h2>
              <ul className="mt-4 space-y-2 text-lg opacity-90">
                {organizers.map((o) => (
                  <li key={o.email}>
                    <span className="font-semibold">{o.name}</span>{' '}
                    (<a href={`mailto:${o.email}`} className="font-semibold hover:underline">{o.email}</a>)
                    {' — '}
                    <span>{o.affiliation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-container-foreground text-2xl font-bold">Schedule</h2>
            <div className="bg-background mx-auto mt-4 max-w-3xl shadow-md">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-container-foreground border-b">
                    <th className="text-container-foreground px-6 py-4 text-2xl font-semibold">Event</th>
                    <th className="text-container-foreground px-6 py-4 text-right text-2xl font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map(([event, date], idx) => (
                    <tr key={event} className={idx % 2 === 0 ? 'bg-container' : ''}>
                      <td className="text-container-foreground px-6 py-4 text-lg">{event}</td>
                      <td className="text-container-foreground px-6 py-4 text-right text-lg whitespace-nowrap">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-container text-container-foreground mt-8 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">Abstract</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed opacity-90">
              <p>
                This special session addresses recent advances in multimodal data fusion and visual artificial
                intelligence (AI) for Earth observation (EO) and diverse geo-referenced visual data, including
                weather, climate, satellite, aerial, UAV, and street-view imagery. It focuses on methods and
                applications for environmental, agricultural, urban, and territorial domains, with particular
                relevance to sustainability assessment, disaster resilience, and cultural-architectural heritage
                monitoring.
              </p>
              <p>
                Visual AI for EO is evolving from single-sensor, task-specific analysis to comprehensive
                multimodal and multi-task pipelines that combine complementary observables of the built and
                natural environment. This direction is reinforced by major international initiatives, including
                ESA Φ-lab&rsquo;s AI4EO activities and challenges, as well as the ITU-led AI for Good platform
                and broader United Nations efforts on the use of AI and EO for sustainability, standards, and
                societal impact.
              </p>
              <p>
                The proposed session aims to address visual processing challenges that arise when remote sensing
                and geo-referenced imagery are deployed across these diverse applications. Relevant
                methodological themes include multimodal fusion, domain adaptation, limited supervision,
                explainability, uncertainty awareness, robustness, and scalable deployment. The session
                therefore defines a clear methodological and application-oriented niche, while remaining broad
                enough to attract contributions from complementary research communities.
              </p>
              <p>
                The session welcomes contributions spanning methodological advancements and applied research.
                Topics of interest include, but are not limited to:
              </p>
            </div>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-lg opacity-90">
              {topics.map((t) => (
                <li key={t.label}>
                  {t.label}
                  {t.children && (
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {t.children.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 text-lg leading-relaxed opacity-90">
              <p>
                The session targets a multidisciplinary audience of researchers and practitioners, bridging
                methodological innovation and applied sciences. It is specifically designed for technical
                experts in visual information processing, computer vision, multimodal learning, and geospatial
                AI, alongside domain specialists in remote sensing, environmental intelligence, urban analytics,
                digital heritage, and sustainability.
              </p>
              <p>
                As with EUVIP 2026 regular papers, prospective authors are invited to submit full-length papers
                of up to 6 pages of technical content, figures, and references through the submission system
                (page 6 should contain references only). Submitted papers will undergo a double-blind review
                process, and accepted papers will be presented in a lecture or poster session. Papers presented
                at the conference will be included in the proceedings and are expected to appear in IEEE Xplore.
              </p>
              <p>
                The session also welcomes &ldquo;presentation papers&rdquo; accepted at major conferences or
                journals within the past year. To avoid issues of double submission, these papers will not be
                included in the conference proceedings, but their authors will have the opportunity to present
                their work to the EUVIP audience. Presentation papers are subject to the standard conference
                registration.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-container mt-4 px-4 md:px-0">
          <div className="mx-auto max-w-7xl py-8 md:px-4">
            <h2 className="text-container-foreground text-2xl font-bold">Submission</h2>
            <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
              Submissions must be made through the official CMT system of EUVIP, by choosing the track <span className="font-bold">[Special Session] Multimodal Data Fusion and Visual Artificial Intelligence for Earth Observation @ EUVIP 2026</span>. The direct link is provided below: <br/>
              <a
                href="https://cmt3.research.microsoft.com/EUVIP2026/Track/3/Submission/Create"
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline"
              >
                https://cmt3.research.microsoft.com/EUVIP2026/Track/3/Submission/Create
              </a>
            </p>
            <div className="flex w-full justify-center">
              <a
                className="text-container-foreground border-muted bg-background hover:bg-background/80 mt-8 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
                href="https://cmt3.research.microsoft.com/EUVIP2026/Track/3/Submission/Create"
                target="_blank"
                rel="noreferrer"
              >
                Submit in Microsoft CMT
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
