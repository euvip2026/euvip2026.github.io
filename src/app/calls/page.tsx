'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

type Section = {
  id: string
  title: string
  lead?: string
  bullets?: string[]
  content?: React.ReactNode
  href?: string
}

type MainCard = {
  id: string
  title: string
  pdf?: string
  description: string
  sectionsTitle?: string
  sectionsVertical?: boolean
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
  const inner = (
    <>
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
    </>
  )

  if (section.href) {
    return (
      <a
        href={section.href}
        className="border-information bg-container text-container-foreground hover:bg-container/80 block border p-6 shadow-sm transition hover:cursor-pointer"
      >
        {inner}
      </a>
    )
  }

  return <div className="border-information bg-container text-container-foreground min-w-0 border p-6 shadow-sm">{inner}</div>
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
                  {/* <a className="font-bold opacity-50 cursor-not-allowed">
                    Download (PDF)
                  </a>
                  <span className="ml-2 italic">coming soon</span> */}
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
                  <th className="text-container-foreground px-6 py-4 text-right text-2xl font-semibold">
                    Date <span className="text-xs font-normal">(AoE)</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {card.daterows.map(([event, date], idx) => (
                  <tr key={`${event}-${idx}`} className={idx % 2 === 0 ? 'bg-container' : ''}>
                    <td className="text-container-foreground px-6 py-4 text-lg">{event}</td>
                    {/* <td className="text-container-foreground px-6 py-4 text-right text-lg whitespace-nowrap">{date}</td> */}
                     <td className="px-6 py-4 text-right text-lg whitespace-nowrap"><span dangerouslySetInnerHTML={{ __html: date }} /></td>
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
          <div className={card.sectionsVertical ? 'grid grid-cols-1 gap-6' : 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'}>
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
        id: 'papers',
        title: 'Call for Papers',
        pdf: '/C4P.pdf',
        description:
          'The 14th European Conference on Visual Information Processing will be held in Luxembourg. The first day will be dedicated to tutorials. The conference will bring together leading experts from academia and industry interested in visual information processing, applications and performance assessment for all types of visual modalities. The program will feature lecture, poster and plenary sessions, as well as tutorials and demo/industrial exhibitions.',
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
              proceedings and will be included in IEEE Xplore. EUVIP 2026 will recognize outstanding
              contributions with the Best Paper Award, as well as the Best Student Paper Award and the Student Demo
              Award.
            </p>
          </>
        ),
        daterows: [
          // ['Paper Submissions', '21 May 2026'],
          // ['Paper Notifications', '18 July 2026'],
          // ['Camera Ready Paper Submissions', '22 August 2026'],
          ['Paper Submissions', '15 June 2026, 23:59 (<s>5 June 2026</s>)'],
          ['Paper Notifications', '18 July 2026, 23:59'],
          ['Camera Ready Paper Submissions', '5 August 2026, 23:59'],
        ],
      },
      {
        id: 'project-dissemination',
        title: 'Call for Project Dissemination Papers',
        //pdf: '/C4project.pdf',
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
          ['Submission Deadline', '30 July 2026, 23:59'],
          ['Decision Notifications', '15 August 2026, 23:59'],
        ],
      },
      {
        id: 'tutorials',
        title: 'Call for Tutorials',
        //pdf: '/C4Tutorials.pdf',
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
          ['Deadline for Tutorial Proposals', '9 June 2026, 23:59 (<s>15 May 2026</s>)'],
          ['Notification of Tutorial Acceptance', '25 June 2026, 23:59 (<s>20 May 2026</s>)'],
        ],
      },
      {
        id: 'special-sessions',
        title: 'Special Sessions',
        description:
          'The following Special Sessions have been accepted for EUVIP 2026. Select a session to view its full details, topics, and submission instructions.',
        sectionsTitle: 'Accepted Special Sessions:',
        sectionsVertical: true,
        sections: [
          {
            id: 'ss-1',
            title: 'Generative AI for 3D Face and Body Animation',
            href: `${basePath}/special-sessions/1/`,
            content: <span className="font-semibold hover:underline">View session details</span>,
          },
          {
            id: 'ss-2',
            title: 'Multimodal Data Fusion and Visual Artificial Intelligence for Earth Observation',
            href: `${basePath}/special-sessions/2/`,
            content: <span className="font-semibold hover:underline">View session details</span>,
          },
          {
            id: 'ss-3',
            title: 'Trustworthy AI for Real and Synthetic Biomedical Imaging',
            href: `${basePath}/special-sessions/3/`,
            content: <span className="font-semibold hover:underline">View session details</span>,
          },
        ],
      },
      {
        id: 'demos',
        title: 'Call for Demos',
        //pdf: '/Call4Demos.pdf',
        description:
          'The EUVIP 2026 committee is hereby releasing a call for: <b>Demonstrations</b> of recent research outputs or innovations related to the topics covered by the conference, and <b>Exhibitions</b> of new equipment or technology related to the topics covered by the conference. <br /><br /> <b>Objective</b> The objective of the demo and exhibition session is to provide a lively forum for researchers in both industry and academia to present their work and to foster stimulating discussions and constructive feedback from leading experts in the field.',
        sections: [
          {
            id: 'demo-required-info',
            title: 'Submission Instructions',
            bullets: [
              'For Exhibitions: We ask interested participants to submit a short description of their proposed exhibition maximum 1 page, in PDF format. The exhibition could be, for example, showing new research equipment related to the topics covered by the conference, new tools or software that could be relevant to the conference attendees, etc.',
              'For Demos: We ask interested participants to submit a 1-2 page description (in PDF) of their proposed demonstration. The description should include the following:',
              'Demonstration title',
              'Name(s), affiliation(s), email(s) of the demo contributors',
              'Technical Description: A short description of the technology behind the demo and a brief introduction of the equipment used in the demo (which would be required at the conference).',
              'The demo could be, for example, an implemented algorithm of a new technology (related to the topics in the conference) that can run on a computer and generate visible output, or videos showing recent research outputs, etc. Note that the demos can relate to previously published work, or to ongoing research that the authors have the right to disclose publicly.',
            ],
          },
          {
            id: 'demo-evaluation',
            title: 'Evaluation Criteria',
            lead: 'For both the exhibition and demo proposals, submissions will be judged for acceptance based on:',
            bullets: [
              'Technical merit and innovation',
              'Relevance to the conference topics',
              'Potential to stimulate interesting discussions and exchange of ideas.',
            ],
          },
          {
            id: 'demo-presentation',
            title: 'Presentation Format',
            lead: 'At the conference, before the start of the Demo & Exhibition session, we will ask one representative for each of the accepted exhibitions and demos to present a 1-minute “advertisement” (with 1 PowerPoint or PDF slide) to the audience, to encourage them to come and see the demo/exhibition.',
          },
          {
            id: 'demo-submission',
            title: 'Submission',
            content: (
              <p className="leading-relaxed">
                Submissions (and any questions related to the industrial exhibitions and demos) should be emailed to the exhibition and demo session chairs at:
                <br />
                <br />
                <a href="mailto:arunkumar.rathinam@uni.lu" className="font-semibold hover:underline">
                arunkumar.rathinam@uni.lu
                </a>
                <br />
                <a href="mailto:mohib.ullah@ntnu.no" className="font-semibold hover:underline">
                  mohib.ullah@ntnu.no
                </a>
                <br />
                <a href="mailto:tiziana.cattai@uniroma1.it" className="font-semibold hover:underline">
                  tiziana.cattai@uniroma1.it
                </a>
              </p>
            ),
          },

          {
            id: 'demo-awards',
            title: 'Awards',
            lead: 'There will be a prize offered for the Best Demo at the EUVIP 2026 conference award ceremony.',
          },
        ],
        daterows: [
          ['Deadline for Industrial Exhibition and Demo Proposals', '15 July 2026, 23:59'],
          ['Notification of Acceptance', '18 July 2026, 23:59'],
        ],
      },
      {
        id: 'student-sessions',
        title: 'Call for Student Session',
        //pdf: '/C4Student_session.pdf',
        description:
          'We are thrilled to announce the expanded Student Session at EUVIP, designed specifically as an immersive conference experience for early-career researchers and PhD students. <br /><br /> This session provides a unique platform for junior researchers to showcase their work, experience a vibrant academic environment, and network alongside established, world-class researchers in the field. <br /><br /> To accommodate researchers at various stages of their academic journey, we have expanded our submission formats. We invite students to submit their work in one of the following 2-page formats:',
        sections: [
          {
            id: 'Student-session-Submission-Tracks',
            title: 'Submission Tracks',
            bullets: [
              'Track A: Technical Extended Abstract (2 Pages): Ideal for students presenting specific technical results, or preliminary findings. Accepted technical abstracts will be included in the IEEE Conference Proceedings.',
              'Track B: PhD Thesis Description (2 Pages): Ideal for students who wish to present the overarching vision, problem statement, and methodology of their ongoing PhD thesis.',
            ],
            content: (
              <p className="mt-4 leading-relaxed break-words">
                Please download the detailed submission guidelines for each track {' '}
                <a
                  href="/EUVIP2026_Guidelines_for_2-page_papers_ShGZ.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold whitespace-nowrap hover:underline"
                >
                  here
                </a>
                .
              </p>
            ),
          },
          {
            id: 'Student-session-Presentation-Formats',
            title: 'Presentation Formats',
            lead: 'To foster dynamic engagement, accepted students will present their work interactively via:',
            bullets: [
              'Poster Presentation: Engage in one-on-one discussions with attendees. ',
              'Live Demonstration (Demo): Showcase your algorithms, software, or hardware setups in real-time.',
            ],
          },
          {
            id: 'Student-session-Grants-Registration',
            title: 'Grants & Registration',
            bullets: [
              'PhD Grants: We highly encourage students to apply, as dedicated PhD grants are available to help support travel and participation. (Note: highlight specific link to grants if available). ',
              'Reduced Fees: Participating students will benefit from reduced registration fee rates.',
              'The submission of an extended abstract implies the intention of the student to register to EUVIP 2026 and present their work in the student poster session.'
            ],
          },
          {
            id: 'Student-session-submission-guidelines',
            title: 'Submission Guidelines',
            content: (
              <>
                <p className="leading-relaxed">
                  All submissions must be exactly 2 pages in length and formatted according to the standard IEEE
                  double-column conference template. Templates and specific structural guidelines for both the
                  Technical Abstract and the Thesis Description can be found on our website.
                </p>
                <p className="mt-4 leading-relaxed">
                  All contributions will be peer-reviewed, and evaluated according to their scientific rigour, and
                  originality.
                </p>
                <p className="mt-4 leading-relaxed break-words">
                  Submissions will be handled via{' '}
                  <a
                    href="https://cmt3.research.microsoft.com/EUVIP2026/Track/6/Submission/Create"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold whitespace-nowrap hover:underline"
                  >
                    Microsoft CMT
                  </a>
                  .
                </p>
              </>
            ),
          },

          {
            id: 'Studnet-session-submission',
            title: 'Questions and Contact',
            content: (
              <p className="leading-relaxed">
                Further questions regarding the Student Session may be directed to the chairs: Dr. Marouane Tliba and Dr. Shekoufeh GorgiZadeh via email: 
                <br />
                <br />
                <a href="mailto:tlibamaroine3@gmail.com" className="font-semibold hover:underline">
                tlibamaroine3@gmail.com
                </a>
                <br />
                <a href="mailto:shekoufeh.gorgizadeh@uni.lu" className="font-semibold hover:underline">
                shekoufeh.gorgizadeh@uni.lu
                </a>
               
              </p>
            ),
          },

         
          {
            id: 'Student-session-grants',
            title: 'Student Grants',
            lead: 'For EUVIP 2026, the organizing committee is working to help broaden participation at the conference. Specifically, we will support the following:',
            bullets: [
              '10 travel grants of €500 for PhD students, prioritizing those from lower-income regions;',
              'reduced registration fees for students;',
              'networking events designed to build connections across communities.',
            ],

      
              content: (
                <p className="leading-relaxed">

                  <br />If you would like to be considered for this support, please complete the{' '}
              <a href={`https://forms.gle/SuqN2dMZDuKKsoYRA`} target="_blank" className="font-bold underline">
                travel support application
              </a>
              .
              <br />
              <br /> If you have any questions, concerns, or feedback related to these efforts at EUVIP 2026, please{' '}
                <a href={`${basePath}/contact/`} className="font-bold underline">
                  contact us
                </a>
                .
            
                </p>
              ),
            },
        
        ],
        daterows: [
          ['Deadline for Student Session Submissions', '7 July 2026, 23:59 (<s>30 June 2026</s>)'],
          ['Notification of Acceptance', '21 July 2026, 23:59'],
        ],
      },
    ],
    [],
  )

  const [activeId, setActiveId] = useState<string | null>(null)
  const active = activeId ? cards.find((c) => c.id === activeId) : null

  useEffect(() => {
    const validIds = new Set(cards.map((c) => c.id))
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''))
      setActiveId(hash && validIds.has(hash) ? hash : null)
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    window.addEventListener('popstate', syncFromHash)
    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('popstate', syncFromHash)
    }
  }, [cards])

  const openCard = useCallback((id: string) => {
    window.history.pushState(null, '', `#${encodeURIComponent(id)}`)
    setActiveId(id)
  }, [])

  const closeCard = useCallback(() => {
    window.history.pushState(null, '', window.location.pathname + window.location.search)
    setActiveId(null)
  }, [])

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
          <FocusMainCard card={active} onBack={closeCard} />
        </div>
      ) : (
        <>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-6 md:px-4 lg:grid-cols-3">
            {cards.map((c) => (
              <CompactMainCard key={c.id} card={c} onOpen={() => openCard(c.id)} />
            ))}
          </div>
        </>
      )}

      {(active && active.id === 'papers') && (
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
      )}

      {(active && active.id === 'student-sessions') && (
      <section className="bg-container mt-12 px-4 md:px-0">
        <div className="mx-auto max-w-7xl py-8 md:px-4">
          <h2 className="text-container-foreground text-2xl font-bold">Submission</h2>
          <p className="text-container-foreground/80 mt-3 text-lg leading-relaxed">
            All student session submissions must be submitted electronically via the Microsoft CMT submission system (
            <a
              href="https://cmt3.research.microsoft.com/EUVIP2026/Track/6/Submission/Create"
              target="_blank"
              rel="noreferrer"
              className="font-bold whitespace-nowrap hover:underline"
            >
              Microsoft CMT
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
              href="https://cmt3.research.microsoft.com/EUVIP2026/Track/6/Submission/Create"
              target="_blank"
              rel="noreferrer"
            >
              Submit in Microsoft CMT
            </a>
          </div>
        </div>
      </section>
      )}
    </section>
  )
}
