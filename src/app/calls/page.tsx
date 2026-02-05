'use client'

import React, { useMemo, useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'

type Section = {
  id: string
  title: string
  bullets?: string[]
  content?: React.ReactNode
}

type MainCard = {
  id: string
  title: string
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
        <p className={`whitespace-pre-line ${tbc ? 'line-clamp-5' : 'line-clamp-6'}`}>{displayDesc}</p>
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
            <p className="mt-3 text-lg whitespace-pre-line opacity-80">{displayDesc}</p>
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
        description:
          'The 14th European Conference on Visual Information Processing will be held on, in Luxembourg; the first day will be dedicated to (one-day) tutorials. The conference will bring together leading experts from academia and industry interested in visual information processing, applications and performance assessment for all types of visual modalities. The program will feature lecture, poster and plenary sessions, as well as tutorials and demo/industrial exhibitions.',
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
              content, figures, and references, through the submission system (page 6 should contain only references).
              Submitted papers will undergo a double-blind review process. Accepted papers will be presented in a
              lecture or poster session. Regular papers presented at the conference will be included in the conference
              proceedings. As for the previous EUVIP editions, all accepted regular papers are expected to be included
              in IEEE Xplore. EUVIP 2026 will recognize outstanding contributions with the Best Paper Award, for the
              most distinguished regular paper, as well as the Best Student Paper Award and the Student Demo Award.
            </p>
          </>
        ),
        daterows: [
          ['Paper Submissions', '30 May 2026'],
          ['Camera Ready Paper Submissions', '15 August 2026'],
        ],
      },

      // { id: 'special-sessions', title: 'Call for Special Sessions', description: 'TBC' },
      // { id: 'project-dissemination', title: 'Call for Project Dissemination Papers', description: 'TBC' },
      {
        id: 'industrial-demo',
        title: 'Call for Industrial Exhibition and Demo Papers',
        description: 'TBC',
        daterows: [
          ['Demo Submissions', '7 August 2026'],
          ['Demo Notifications', '28 August 2026'],
        ],
      },
      // { id: 'student-grants', title: 'Call for Student Grants', description: 'TBC' },
      {
        id: 'tutorials',
        title: 'Call for Tutorials',
        description: 'TBC',
        daterows: [
          ['Tutorial Proposals', '30 April 2026'],
          ['Tutorial Notifications', '15 May 2026'],
        ],
      },
    ],
    [],
  )

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

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
