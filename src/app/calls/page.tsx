'use client'

import React, { useMemo, useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

type Section = {
  id: string
  title: string
  lead?: string
  bullets?: string[]
  content?: React.ReactNode
}

type MainCard = {
  id: string
  title: string
  pdf?: string
  description: string
  sectionsTitle?: string
  sections?: Section[]
  additional?: React.ReactNode
  daterows?: [string, string][]
}

function isTBC(desc: string) {
  return desc.trim().toUpperCase() === 'TBC'
}

function tbcDisplayText(desc: string) {
  return isTBC(desc) ? 'To be announced soon.' : desc
}

function CompactMainCard({ card, onOpen }: { card: MainCard; onOpen: () => void }) {
  const tbc = isTBC(card.description)
  const displayDesc = tbcDisplayText(card.description)

  return (
    <div className="bg-container text-container-foreground flex h-[340px] w-full flex-col shadow-sm">
      <div className="px-6 pt-6">
        <h2 className="text-2xl leading-tight font-bold">{card.title}</h2>
      </div>
      <div className="text-md relative flex-1 overflow-hidden px-6 py-4 opacity-80">
        <div className={`whitespace-pre-line ${tbc ? 'line-clamp-5' : 'line-clamp-6'}`} dangerouslySetInnerHTML={{ __html: displayDesc }} />
        <div
          className="from-container via-container/80 pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t to-transparent"
          aria-hidden="true"
        />
      </div>

      {(tbc || (card.sections && card.sections.length > 0)) && (
        <button
          type="button"
          onClick={onOpen}
          className="border-information hover:bg-container/80 text-md mt-auto flex w-full items-center justify-center gap-2 border-t px-6 py-4 font-semibold transition hover:cursor-pointer"
        >
          More details
          <ChevronDown className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

function SectionCard({ section }: { section: Section }) {
  return (
    <div className="border-information bg-container text-container-foreground border p-6 shadow-sm">
      <h3 className="text-xl leading-tight font-bold">{section.title}</h3>

      {section.lead ? <p className="mt-4 text-lg opacity-90">{section.lead}</p> : null}

      {section.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-lg opacity-90">
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {section.content ? <div className="mt-4 text-lg opacity-90">{section.content}</div> : null}
    </div>
  )
}

function FocusMainCard({ card, onBack }: { card: MainCard; onBack: () => void }) {
  const tbc = isTBC(card.description)
  const displayDesc = tbcDisplayText(card.description)
  const pdfHref = card.pdf ? (card.pdf.startsWith('http') ? card.pdf : `${basePath}${card.pdf}`) : null

  return (
    <div className="bg-container text-container-foreground w-full shadow-sm">
      <div className="px-6 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="border-information bg-container hover:bg-container/80 inline-flex shrink-0 items-center gap-2 border px-4 py-2 text-sm font-semibold transition hover:cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mt-6">
          <h2 className="text-2xl leading-tight font-bold">{card.title}</h2>

          {tbc ? (
            <>
              <p className="text-md mt-3 opacity-80">{displayDesc}</p>
              {/* <p className="mt-2 text-lg opacity-80">More details will be announced shortly.</p> */}
            </>
          ) : (
            <>
              <div className="mt-3 text-lg whitespace-pre-line opacity-80" dangerouslySetInnerHTML={{ __html: displayDesc }} />
              {pdfHref && (
                <p className="mt-3 text-lg opacity-90">
                  <a href={pdfHref} download className="font-bold hover:underline">
                    Download (PDF)
                  </a>
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {card.daterows && card.daterows.length > 0 && (
        <div className="px-6 pb-6">
          <div className="bg-background mx-auto mt-8 max-w-2xl shadow-md">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-container-foreground border-b">
                  <th className="text-container-foreground px-6 py-4 text-2xl font-semibold">Event</th>
                  <th className="text-container-foreground px-6 py-4 text-right text-2xl font-semibold">Date</th>
                </tr>
              </thead>

              <tbody>
                {card.daterows.map(([event, date], idx) => (
                  <tr key={`${event}-${idx}`} className={idx % 2 === 0 ? 'bg-container' : ''}>
                    <td className="text-container-foreground px-6 py-4 text-lg">{event}</td>
                    <td className="text-container-foreground px-6 py-4 text-right text-lg whitespace-nowrap">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {!tbc && card.sections?.length ? (
        <div className="px-6 pt-6 pb-6">
          {card.sectionsTitle && <p className="mt-3 mb-6 text-lg opacity-80">{card.sectionsTitle}</p>}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {card.sections.map((s) => (
              <SectionCard key={s.id} section={s} />
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 pt-2 pb-6" />
      )}

      {card.additional && (
        <div className="px-6 pb-6">
          <div className="text-lg opacity-80">{card.additional}</div>
        </div>
      )}
    </div>
  )
}

export default function CallsPage() {
  const cards = useMemo<MainCard[]>(
    () => [
      {
        id: 'cfp',
        title: 'Call for Papers',
        pdf: '/C4P.pdf',
        description:
          'The 14 th European Conference on Visual Information Processing will be held, in Luxembourg; the first day will be dedicated to (one-day) tutorials. The conference will bring together leading experts from academia and industry interested in visual information processing, applications and performance assessment for all types of visual modalities. The program will feature lecture, poster and plenary sessions, as well as tutorials and demo/industrial exhibitions.',
        sectionsTitle: 'Topics of interest include, but are not limited to:',
        sections: [
          {
            id: 'modalities',
            title: 'Modalities',
            bullets: [
              'Conventional image and video',
              'Stereoscopic, multi-view and 360º image and video',
              'Light fields, point clouds, meshes and holography',
              'Medical imaging',
              'Multimodal perception (vision, language, audio, depth)',
              'Multi-spectral and hyper-spectral imaging',
              'Synthetic / simulated vision',
              'Thermal, event-based and other unconventional sensing modalities',
            ],
          },
          {
            id: 'vip-tasks',
            title: 'Visual Information Processing Tasks',
            bullets: [
              'Sensing, representation, modelling and registration',
              'Computational vision modelling and processing',
              'Vision language modelling',
              '3D vision from sensors',
              'Visual anomaly detection',
              'Multimodal learning and cross-modal fusion',
              'Restoration, denoising and enhancement',
              'Detection, recognition, retrieval and classification',
              'Coding and transmission',
              'Analysis and understanding',
              'Efficient, scalable and distributed vision',
              'Synthesis, rendering and visualization',
            ],
          },
          {
            id: 'performance-assessment',
            title: 'Performance Assessment',
            bullets: [
              'Subjective and objective quality',
              'Multimodal quality',
              'Quality of experience',
              'Emerging performance assessment methods',
              'Benchmarking for various visual tasks',
              'Robustness, generalization and bias analysis',
              'Explainability and transparency of visual systems',
            ],
          },
          {
            id: 'applications',
            title: 'Applications, Services, Architectures and Systems',
            bullets: [
              'Biometrics, forensics, trust and security',
              'Humans: face, body, pose, gesture, movement',
              'Augmented and virtual reality',
              'Gaming and broadcasting',
              'Medical, education, cultural and industry',
              'Drones and autonomous vehicles',
              'Autonomous navigation and perception in space systems',
              'Emerging applications, services, architectures and systems',
            ],
          },
          // {
          //   id: 'submission-awards',
          //   title: 'Submission & Awards',
          //   content: (
          //     <p className="leading-relaxed">
          //       Prospective authors are invited to submit full-length papers, with a maximum of 6 pages of technical
          //       content, figures, and references, through the submission system (page 6 should contain only references).
          //       Submitted papers will undergo a double-blind review process. Accepted papers will be presented in a
          //       lecture or poster session. Regular papers presented at the conference will be included in the conference
          //       proceedings. As for the previous EUVIP editions, all accepted regular papers are expected to be included
          //       in IEEE Xplore. EUVIP 2026 will recognize outstanding contributions with the Best Paper Award, for the
          //       most distinguished regular paper, as well as the Best Student Paper Award and the Student Demo Award.
          //     </p>
          //   ),
          // },
        ],
        additional: (
          <>
            <h2 className="mb-4 text-2xl leading-tight font-bold opacity-100">Submission & Awards</h2>
            <p className="leading-relaxed">
              Prospective authors are invited to submit full-length papers, with a maximum of 6 pages of technical
              content , figures, and references, through the submission system (page 6 should contain only references).
              Submitted papers will undergo a double-blind review process. Accepted papers will be presented in a
              lecture or poster session. Regular papers p resented at the conference will be included in the conference
              proceedings and are expected to be included in IEEE Xplore. EUVIP 2026 will recognize outstanding
              contributions with the Best Paper Award, as well as the Best Student Paper Award and the Student Demo
              Award.
            </p>
          </>
        ),
        daterows: [
          ['Paper Submissions', '21 May 2026'],
          ['Camera Ready Paper Submissions', '25 July 2026'],
          ['Paper Notifications', '18 July 2026'],
        ],
      },
      {
        id: 'project-dissemination',
        title: 'Call for Project Dissemination Papers',
        pdf: '/C4project.pdf',
        description:
          'Following the success of previous editions, the EUVIP 2026 Project Dissemination Session is an opportunity for project leaders and/or partners to present their objectives and achievements and interact with colleagues from academia and industry working in similar or complementary research areas, contributing to the dissemination of results and the sharing of good practices.',
        sections: [
          {
            id: 'pd-submission-guidelines',
            title: 'Submission Guidelines',
            content: (
              <p className="leading-relaxed">
                Potential authors are invited to submit a two-page project paper using the official EUVIP 2026
                full-paper template, available at{' '}
                <a
                  href="https://euvip2026.github.io"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline"
                >
                  https://euvip2026.github.io
                </a>
                . Accepted project papers will be included in the conference booklet.
              </p>
            ),
          },
          {
            id: 'pd-assessment',
            title: 'Assessment Criteria',
            bullets: [
              'Relevance of the project topic to EUVIP 2026 themes',
              "Novelty of the project's technical objectives",
              'Excellence of results already achieved',
              'Editorial quality of the project paper',
            ],
          },
          {
            id: 'pd-regular-authors',
            title: 'Regular Paper Authors',
            lead: 'Authors of regular papers accepted through the EUVIP 2026 double-blind peer review process may be invited to present their work in the Project Dissemination Session, notably when the paper describes work developed within a funded research project.',
          },
          {
            id: 'pd-submission-instructions',
            title: 'Submission Instructions',
            content: (
              <p className="leading-relaxed">
                Project papers should be submitted by email to{' '}
                <a href="mailto:euvip2026@uni.lu" className="font-semibold hover:underline">
                  euvip2026@uni.lu
                </a>
                . Authors will be informed of decisions by email.
              </p>
            ),
          },
        ],
        daterows: [
          ['Submission Deadline', '30 July 2026'],
          ['Decision Notifications', '15 August 2026'],
        ],
      },
      {
        id: 'tutorials',
        title: 'Call for Tutorials',
        pdf: '/C4Tutorials.pdf',
        description:
          'The EUVIP 2026 organizing committee invites proposals for tutorials on established or emerging topics of interest for the computer vision, visual information processing, biomedical imaging, and pattern recognition communities. Half-day (about 3 hours each), in person tutorials on topics related to the conference themes are welcome. Tutorial sessions will be held on 28th September 2026. A EUVIP tutorial should aim to give a comprehensive overview of a specific topic related to computer vision, visual information processing, biomedical imaging or pattern recognition. Tutorials are intended to be educational rather than just a cursory survey of techniques. The topic should be of sufficient relevance and importance to attract significant interest from the EUVIP community. Typical tutorial audiences consist of Master and PhD students, as well as researchers and practitioners from both academia and industry.',
        sections: [
          {
            id: 'tutorial-required-info',
            title: 'Required Proposal Information',
            bullets: [
              'Title: A short descriptive title.',
              'Presenters: Names, affiliation, contact information (email and mailing address), and short bio for each presenter.',
              'Description: A description of the tutorial topic, providing a sense of both the scope and depth of the tutorial, along with a tutorial outline.',
              'Expected audience: Include the background of the expected audience.',
              'Recent publications: List of recent publications related to the tutorial topic from the speakers in the past 3 years.',
              'Relevance: Address the importance and timeliness of the proposal, and its relevance to researchers and engineers.',
              'Previous editions: If the tutorial was given before, describe when and where it was given, and explain how it will be modified for EUVIP 2026. If possible, provide a link to slides of the previous tutorial presentation.',
              'Presentation material: If a draft of the tutorial material (to be distributed to tutorial participants) is available that can aid in assessing the proposal and enable the committee to provide more constructive suggestions for the content.',
            ],
          },
          {
            id: 'tutorial-evaluation',
            title: 'Evaluation Criteria',
            lead: 'Proposals will be reviewed by the Tutorial Committee using the following criteria:',
            bullets: [
              'Timeliness of the proposal: Importance of the topic in 2026 and relevance to EUVIP.',
              'Quality of the proposal: State-of-the art coverage of the topic, coherence, and experience of the speakers.',
              'Spectrum of the proposal: Topic is of broad interest to academia and/or industry, researchers and/or engineers.',
              'Accessibility of presentation material: Presentation can be understood by the broad EUVIP audience, including graduate students, practicing engineers, researchers, and professors.',
            ],
          },
          {
            id: 'tutorial-submission',
            title: 'Submission Instructions',
            content: (
              <p className="leading-relaxed">
                Prospective tutorial proposers are welcome to submit their proposals to the Tutorials Chairs, who would
                be happy to also answer questions and provide preliminary feedback:
                <br />
                <br />
                <a href="mailto:stefania.colonnese@uniroma1.it" className="font-semibold hover:underline">
                  stefania.colonnese@uniroma1.it
                </a>
                <br />
                <a href="mailto:rachid.jennane@univ-orleans.fr" className="font-semibold hover:underline">
                  rachid.jennane@univ-orleans.fr
                </a>
                <br />
                <a href="mailto:Habib.Zaidi@hcuge.ch" className="font-semibold hover:underline">
                  Habib.Zaidi@hcuge.ch
                </a>
              </p>
            ),
          },
        ],
        daterows: [
          ['Deadline for Tutorial Proposals', '15 May 2026'],
          ['Notification of Tutorial Acceptance', '20 May 2026'],
        ],
      },

      {
        id: 'Special Sessions ',
        title: 'Call for Special Sessions ',
        pdf: '/C4Special_Sessions.pdf',
        description:
          'The Organizing Committee of EUVIP 2026 (European Workshop on Visual Information Processing) invites proposals for Special Sessions to complement the conference technical program.  Special Sessions aim to highlight emerging, high-impact, and focused research topics within the broad field of visual information processing. Proposals should address cutting-edge scientific challenges, novel methodologies, or rapidly evolving application domains that are of strong interest to the EUVIP community.  <br /><br /> In addition to focussed sessions, cross-disciplinary and forward-looking topics—especially those bridging visual processing with fields such as machine learning, multimodal systems, computational imaging, or applied domains—are particularly encouraged.  <br /><br />  Each Special Session is expected to: <ul class="mt-4 list-disc space-y-2 pl-5 text-lg opacity-90"><li>Provide a coherent and clearly defined theme</li><li>Attract high-quality contributions from leading researchers</li><li>Stimulate discussion and future research directions</li></ul> <br/>Broad or generic topics already covered by regular EUVIP tracks should be avoided.',
        sections: [
          {
            id: 'Special-session-required-info',
            title: 'Required Proposal Information',
            lead: 'Each Special Session is expected to:',
            bullets: [
              'Provide a coherent and clearly defined theme ',
              'Attract high-quality contributions from leading researchers ',
              'Stimulate discussion and future research directions ',
              'Broad or generic topics already covered by regular EUVIP tracks should be avoided.',
            ],
          },
          {
            id: 'Special-session-evaluation',
            title: 'Evaluation Criteria',
            lead: 'Special Session proposals will be evaluated based on:',
            bullets: [
              'Scientific relevance to the core themes of EUVIP ',
              'Timeliness and novelty of the topic ',
              'Potential to attract high-quality submissions',
              'Track record and expertise of the organizers ',
            ],
          },
          {
            id: 'Special-session-submission',
            title: 'Submission Instructions',
            content: (
              <div className="leading-relaxed">
                <p>Proposals should include:</p>
                <ol className="mt-4 list-decimal space-y-4 pl-5 text-lg opacity-90">
                  <li>
                    <b>Session Title and Description</b>
                    <p className="mt-1">A clear and engaging description (less than 1 page) covering:</p>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      <li>Motivation and rationale</li>
                      <li>Relevance to EUVIP</li>
                      <li>Key topics and scope</li>
                      <li>Expected scientific and/or application impact</li>
                    </ul>
                  </li>
                  <li>
                    <b>Organizers</b>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      <li>Names, affiliations, and contact details</li>
                      <li>Short biographies highlighting expertise and relevance to the topic</li>
                    </ul>
                  </li>
                  <li>
                    <b>Tentative Contributions</b>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      <li>A preliminary list of potential contributing authors and papers (if available), demonstrating the session’s attractiveness and viability</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-6">Special Session proposals should be submitted by email to <a href="mailto:euvip2026@uni.lu" target="_blank" rel="noreferrer" className="font-bold hover:underline">euvip2026@uni.lu</a>. Papers for the Special Session must then be submitted through the official Microsoft CMT system and will follow the standard EUVIP peer-review process.</p>
              </div>
            ),
          },
        ],
        additional: (
          <>
            <h2 className="mb-4 text-2xl leading-tight font-bold opacity-100">Session Format</h2>
            <p className="leading-relaxed">
             Each Special Session will include 4–5 accepted papers <br /> All submissions will undergo the standard peer-review process of EUVIP <br /> Accepted papers will be published in the official conference proceedings 

            </p>
          </>
        ),


        daterows: [
          ['Special Sessions Submissions', '30 April 2026'],
          ['Special Sessions Notifications', '08 May 2026'],
        ],
      },
    ],
    [],
  )

  const [activeId, setActiveId] = useState<string | null>(null)
  const active = activeId ? cards.find((c) => c.id === activeId) : null

  return (
    <section className="mx-auto">
      <div className="mx-auto max-w-7xl md:px-4">
        <div className="relative h-56 overflow-hidden shadow-sm sm:h-[208px]">
          <img src={`${basePath}/calls.png`} alt="Calls Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Calls</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="py-6" />
      {active ? (
        <div className="mx-auto max-w-7xl px-0 md:px-4">
          <FocusMainCard card={active} onBack={() => setActiveId(null)} />
        </div>
      ) : (
        <>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-6 md:px-4 lg:grid-cols-3">
            {cards.map((c) => (
              <CompactMainCard key={c.id} card={c} onOpen={() => setActiveId(c.id)} />
            ))}
          </div>
        </>
      )}

      <section className="bg-container mt-12 px-4 md:px-0">
        <div className="mx-auto max-w-7xl py-8 md:px-4">
          <h2 className="text-container-foreground text-2xl font-bold">Submission</h2>
          <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
            All papers must be submitted electronically via the Microsoft CMT submission system (
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
          <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service
            was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as
            well as for software development and support.
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
        </div>
      </section>
    </section>
  )
}
