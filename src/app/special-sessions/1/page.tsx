import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Sessions',
  alternates: { canonical: '/special-sessions/1/' },
}

export default function SpecialSessionsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const organizers: Array<{ name: string; affiliation: string }> = [
    { name: 'Stefano Berretti', affiliation: 'Univ. of Florence, Italy' },
    { name: 'Claudio Ferrari', affiliation: 'Univ. of Florence, Italy' },
  ]

  const schedule: Array<[string, string]> = [
    ['Paper submission deadline', '30 June 2026, 23:59'],
    ['Review period', '30 June 2026, 23:59 – 15 July 2026, 23:59'],
    ['Decision to authors', '18 July 2026, 23:59'],
    ['Camera Ready', '5 August 2026, 23:59'],
  ]

  const topics: string[] = [
    '3D talking heads and speech-driven facial animation',
    'Text-to-motion and text-to-animation generation',
    'Generative models for 3D human bodies and avatars',
    'Neural rendering and neural human representations',
    'Diffusion and transformer models for human animation',
    'Human motion synthesis and reenactment',
    'Audio-driven and multimodal animation',
    'Controllable and editable human generation',
    'Real-time digital humans and interactive avatars',
    'Human-centered generative AI and virtual agents',
    'Identity consistency and motion realism',
    'Ethical, trustworthy, and responsible generative human AI',
    'Applications in entertainment, telepresence, XR, gaming, and social media',
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
              Generative AI for 3D Face and Body Animation
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
                Recent advances in generative artificial intelligence are rapidly transforming the creation,
                animation, and interaction paradigms of digital humans. Foundation models, diffusion-based
                approaches, neural rendering, and multimodal generative architectures are enabling unprecedented
                realism and controllability in 3D face and body synthesis, including applications such as
                talking head generation, speech-driven facial animation, text-to-motion synthesis, avatar
                creation, human reenactment, and embodied virtual agents.
              </p>
              <p>
                This special session aims to bring together researchers and practitioners working on emerging
                methodologies for generative modeling of 3D humans and human-centric visual content. The session
                will provide a forum for discussing recent advances in neural representations, multimodal
                conditioning, motion generation, controllable animation, identity preservation, real-time
                rendering, and cross-modal interaction for digital humans.
              </p>
              <p>Topics of interest include, but are not limited to:</p>
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
                This session invites high-quality contributions presenting novel algorithms, architectures,
                datasets, evaluation methodologies, and applications related to generative AI for 3D human
                modeling and animation. As with EUVIP 2026 regular papers, prospective authors are invited to
                submit full-length papers of up to 6 pages of technical content, figures, and references through
                the submission system (page 6 should contain references only). Submitted papers will undergo a
                double-blind review process, and accepted papers will be presented in a lecture or poster
                session. Papers presented at the conference will be included in the proceedings and are
                expected to appear in IEEE Xplore.
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
              Submissions must be made through the official CMT system of EUVIP, by choosing the track <span className="font-bold">[Special Session] Generative AI for 3D Face and Body Animation @ EUVIP 2026</span>. The direct link is provided below: <br/>
              <a
                href="https://cmt3.research.microsoft.com/EUVIP2026/Track/4/Submission/Create"
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline"
              >
                https://cmt3.research.microsoft.com/EUVIP2026/Track/4/Submission/Create
              </a>
            </p>
            <div className="flex w-full justify-center">
              <a
                className="text-container-foreground border-muted bg-background hover:bg-background/80 mt-8 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold shadow-sm transition"
                href="https://cmt3.research.microsoft.com/EUVIP2026/Track/4/Submission/Create"
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
