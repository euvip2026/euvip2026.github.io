import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Sessions',
  alternates: { canonical: '/special-sessions/3/' },
}

export default function SpecialSessionsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const organizers: Array<{ name: string; affiliation: string }> = [
    { name: 'Alessandro Bruno', affiliation: 'IULM University, Milan, and CNR Lecce, Italy' },
    { name: 'Marouane Tliba', affiliation: 'Sorbonne Paris Nord and INSERM, France' },
    { name: 'Nour Aburaed', affiliation: 'University of Dubai, UAE' },
    { name: 'Aladine Chetouani', affiliation: 'L2TI Laboratory, Sorbonne Paris Nord University, France' },
  ]

  const schedule: Array<[string, React.ReactNode]> = [
    [
      'Paper submission deadline',
      <>
        7 July 2026, 23:59 <s>25 June 2026</s>
      </>
    ],
    ['Review period', '9 June 2026 – 20 July 2026, 23:59'],
    ['Decision to authors', '21 July 2026, 23:59'],
    ['Camera Ready', '5 August 2026, 23:59'],
  ];
  

  const topics: string[] = [
    'Synthetic and AI-generated biomedical imaging',
    'Generative models for radiology, pathology, microscopy, and healthcare applications',
    'Trustworthy, explainable, and interpretable AI for medical imaging',
    'Foundation models and vision-language models for biomedical applications',
    'Multimodal learning for clinical image understanding and decision support',
    'Quality assessment and benchmarking of synthetic biomedical data',
    'Visual perception, realism evaluation, and spatial exploration of generated images',
    'Human-centered evaluation and clinically validated AI systems',
    'Bias, robustness, uncertainty, fairness, and generalization in medical AI',
    'AI hallucination detection and reliability assessment in biomedical imaging',
    'Perception-driven validation and observer studies for AI-generated medical content',
    'Privacy-preserving and ethically reliable generative biomedical AI',
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
              Trustworthy AI for Real and Synthetic Biomedical Imaging
            </h1>

            <div className="mt-6">
              <h2 className="text-xl font-bold">Organizers</h2>
              <ul className="mt-4 space-y-2 text-lg opacity-90">
                {organizers.map((o) => (
                  <li key={o.name}>
                    <span className="font-semibold">{o.name}</span>
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
                    <th className="text-container-foreground px-6 py-4 text-right text-2xl font-semibold">
                      Date <span className="text-xs font-normal">(AoE)</span>
                    </th>
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
                Generative AI, foundation models, and multimodal learning are rapidly transforming biomedical
                imaging, enabling major advances in image synthesis, enhancement, reconstruction, diagnosis
                support, and clinical decision-making. From radiology and pathology to microscopy and digital
                health, AI-generated and AI-enhanced biomedical data are becoming increasingly integrated into
                research and clinical workflows. However, these advances also raise critical scientific and
                clinical questions: How reliable and clinically faithful are synthetic biomedical images? How can
                perceptual realism, diagnostic utility, and anatomical consistency be rigorously evaluated? Can
                generative models improve robustness, generalization, and data availability without introducing
                hallucinations, hidden biases, or misleading visual patterns?
              </p>
              <p>
                This special session aims to bring together researchers working on trustworthy AI for real,
                synthetic, and AI-enhanced biomedical imaging. The session will focus not only on image
                generation itself but also on broader challenges such as validation, explainability, perception,
                benchmarking, robustness, uncertainty estimation, and safe clinical deployment. We particularly
                encourage interdisciplinary contributions connecting computer vision, machine learning, medical
                imaging, perception science, and clinical practice. Topics of interest include, but are not
                limited to:
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
              <ul className="list-disc space-y-2 pl-5 text-lg opacity-90">
                {topics.slice(0, Math.ceil(topics.length / 2)).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="list-disc space-y-2 pl-5 text-lg opacity-90">
                {topics.slice(Math.ceil(topics.length / 2)).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-4 text-lg leading-relaxed opacity-90">
              <p>
                We especially encourage submissions that go beyond image generation alone and investigate how
                biomedical AI systems can be evaluated, trusted, interpreted, and safely translated into
                real-world clinical and healthcare applications. As with EUVIP 2026 regular papers, prospective
                authors are invited to submit full-length papers of up to 6 pages of technical content, figures,
                and references through the submission system (page 6 should contain references only). Submitted
                papers will undergo a double-blind review process, and accepted papers will be presented in a
                lecture or poster session. Papers presented at the conference will be included in the
                proceedings and are expected to appear in IEEE Xplore.
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
              Submissions must be made through the official CMT system of EUVIP, by choosing the track <span className="font-bold">[Special Session] Trustworthy AI for Real and Synthetic Biomedical Imaging @ EUVIP 2026</span>. The direct link is provided below: <br/>
              <a
                href="https://cmt3.research.microsoft.com/EUVIP2026/Track/5/Submission/Create"
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline"
              >
                https://cmt3.research.microsoft.com/EUVIP2026/Track/5/Submission/Create
              </a>
            </p>
            <div className="flex w-full justify-center">
              <a
                className="text-container-foreground border-muted bg-background hover:bg-background/80 mt-8 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
                href="https://cmt3.research.microsoft.com/EUVIP2026/Track/5/Submission/Create"
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
