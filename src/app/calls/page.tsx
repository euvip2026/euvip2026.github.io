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
  sections?: Section[]
}

function isTBC(desc: string) {
  return desc.trim().toUpperCase() === 'TBC'
}

function tbcDisplayText(desc: string) {
  return isTBC(desc) ? 'To be continued' : desc
}

function CompactMainCard({ card, onOpen }: { card: MainCard; onOpen: () => void }) {
  const tbc = isTBC(card.description)
  const displayDesc = tbcDisplayText(card.description)

  return (
    <div className="border-information bg-container text-container-foreground flex w-full flex-col rounded-3xl border shadow-sm">
      <div className="px-6 pt-6">
        <h2 className="text-xl leading-tight font-bold">{card.title}</h2>
      </div>
      <div className="px-6 py-4 text-sm opacity-80">
        <p className={`whitespace-pre-line ${tbc ? '' : 'line-clamp-6'}`}>{displayDesc}</p>
      </div>

      {(tbc || (card.sections && card.sections.length > 0)) && (
        <button
          type="button"
          onClick={onOpen}
          className="border-information hover:bg-container/80 mt-auto flex w-full items-center justify-center gap-2 rounded-b-3xl border-t px-6 py-4 text-sm font-semibold transition"
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
    <div className="border-information bg-container text-container-foreground rounded-3xl border p-6 shadow-sm">
      <h3 className="text-lg leading-tight font-bold">{section.title}</h3>

      {section.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm opacity-90">
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {section.content ? <div className="mt-4 text-sm opacity-90">{section.content}</div> : null}
    </div>
  )
}

function FocusMainCard({ card, onBack }: { card: MainCard; onBack: () => void }) {
  const tbc = isTBC(card.description)
  const displayDesc = tbcDisplayText(card.description)

  return (
    <div className="border-information bg-container text-container-foreground w-full rounded-3xl border shadow-sm">
      <div className="px-6 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="border-information bg-container hover:bg-container/80 inline-flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mt-6">
          <h2 className="text-2xl leading-tight font-bold">{card.title}</h2>

          {tbc ? (
            <>
              <p className="mt-3 text-sm opacity-80">{displayDesc}</p>
              <p className="mt-2 text-sm opacity-80">More details will be announced shortly.</p>
            </>
          ) : (
            <p className="mt-3 text-sm whitespace-pre-line opacity-80">{displayDesc}</p>
          )}
        </div>
      </div>

      {!tbc && card.sections?.length ? (
        <div className="px-6 pt-6 pb-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {card.sections.map((s) => (
              <SectionCard key={s.id} section={s} />
            ))}
          </div>
        </div>
      ) : (
        // Keep spacing nice for TBC focus
        <div className="px-6 pt-2 pb-6" />
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
          'The 14th European Conference on Visual Information Processing will be held on, in Luxembourg; the first day will be dedicated to (one-day) tutorials. The conference will bring together leading experts from academia and industry interested in visual information processing, applications and performance assessment for all types of visual modalities. The program will feature lecture, poster and plenary sessions, as well as special sessions and tutorials.\n\nTopics of interest include, but are not limited to:',
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
          {
            id: 'submission-awards',
            title: 'Submission & Awards',
            content: (
              <p className="leading-relaxed">
                Prospective authors are invited to submit full-length papers, with a maximum of 6 pages of technical
                content, figures, and references, through the submission system (page 6 should contain only references).
                Submitted papers will undergo a double-blind review process. Accepted papers will be presented in a
                lecture or poster session. Regular papers presented at the conference will be included in the conference
                proceedings. As for the previous EUVIP editions, all accepted regular papers are expected to be included
                in IEEE Xplore. EUVIP 2026 will recognize outstanding contributions with the Best Paper Award, for the
                most distinguished regular paper, as well as the Best Student Paper Award and the Student Demo Award.
              </p>
            ),
          },
        ],
      },

      { id: 'special-sessions', title: 'Call for Special Sessions', description: 'TBC' },
      { id: 'project-dissemination', title: 'Call for Project Dissemination Papers', description: 'TBC' },
      { id: 'industrial-demo', title: 'Call for Industrial Exhibition and Demo Papers', description: 'TBC' },
      { id: 'student-session', title: 'Call for Student Session', description: 'TBC' },
      { id: 'tutorials', title: 'Call for Tutorials', description: 'TBC' },
    ],
    [],
  )

  const [activeId, setActiveId] = useState<string | null>(null)
  const active = activeId ? cards.find((c) => c.id === activeId) : null

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-container-foreground mb-8 text-3xl font-bold">Calls</h1>

      {active ? (
        <FocusMainCard card={active} onBack={() => setActiveId(null)} />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <CompactMainCard key={c.id} card={c} onOpen={() => setActiveId(c.id)} />
          ))}
        </div>
      )}
    </section>
  )
}
