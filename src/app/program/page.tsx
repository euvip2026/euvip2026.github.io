'use client'

import scheduleData from '@/data/schedule.json'

type SessionItem = {
  title: string
  subtitle?: string
  speaker?: string
  meta?: string
  ids?: string
}

type BlockType =
  | 'welcome'
  | 'keynote'
  | 'tutorial'
  | 'tour'
  | 'coffee'
  | 'oral'
  | 'lunch'
  | 'poster'
  | 'panel'
  | 'social'
  | 'closing'
  | 'free'
  | 'student'

type ScheduleBlock = {
  time: string
  type: BlockType
  heading?: string
  items: SessionItem[]
  layout?: 'split'
}

type ScheduleDay = {
  date: string
  label: string
  title: string
  blocks: ScheduleBlock[]
}

type Schedule = {
  days: ScheduleDay[]
}

const schedule = scheduleData as Schedule

const TYPE_STYLES: Record<
  BlockType,
  { row: string; accent: string; label: string }
> = {
  welcome: { row: 'bg-white', accent: 'text-gray-700', label: 'General' },
  keynote: { row: 'bg-[#EDE7F6]', accent: 'text-[#6A3FA0]', label: 'Keynote' },
  tutorial: { row: 'bg-[#DCEEFB]', accent: 'text-[#1D6FA5]', label: 'Tutorial' },
  tour: { row: 'bg-[#FDE9D9]', accent: 'text-[#C1670B]', label: 'Demo / Exhibition' },
  coffee: { row: 'bg-[#F2F2F2]', accent: 'text-gray-600', label: 'Break' },
  oral: { row: 'bg-[#E3F3E1]', accent: 'text-[#2F7A3B]', label: 'Paper Session' },
  lunch: { row: 'bg-[#F2F2F2]', accent: 'text-gray-600', label: 'Break' },
  poster: { row: 'bg-[#FDF3D0]', accent: 'text-[#9C7A0A]', label: 'Poster Session' },
  panel: { row: 'bg-[#FBE1E4]', accent: 'text-[#B23A4E]', label: 'Panel Discussion' },
  social: { row: 'bg-[#D6F0ED]', accent: 'text-[#0F766E]', label: 'Social Activity' },
  closing: { row: 'bg-[#F2F2F2]', accent: 'text-gray-600', label: 'Closing' },
  free: { row: 'bg-white', accent: 'text-gray-400', label: 'Free Time' },
  student: { row: 'bg-[#F1E7D6]', accent: 'text-[#8B5E34]', label: 'Student Session' },
}

const LEGEND_TYPES: BlockType[] = [
  'keynote',
  'tutorial',
  'oral',
  'tour',
  'poster',
  'panel',
  'social',
  'student',
]

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

function parseBlockTimes(time: string): { start: number; end: number } {
  const matches = time.match(/\d{1,2}:\d{2}/g) ?? ['00:00']
  const start = toMinutes(matches[0])
  const end = toMinutes(matches[matches.length - 1])
  return { start, end: end > start ? end : start + 30 }
}

// Build one shared timeline (grid-row boundaries) across all days, so that
// identical clock times line up in the same row across every day column —
// exactly like the merged-cell table in the printed programme.
function buildTimeline(days: ScheduleDay[]) {
  const boundaryMinutes = new Set<number>()
  for (const day of days) {
    for (const block of day.blocks) {
      const { start, end } = parseBlockTimes(block.time)
      boundaryMinutes.add(start)
      boundaryMinutes.add(end)
    }
  }
  const boundaries = Array.from(boundaryMinutes).sort((a, b) => a - b)
  const lineOf = new Map(boundaries.map((minute, index) => [minute, index + 2]))

  const rows = days.map((day) =>
    day.blocks.map((block, index) => {
      const { start, end } = parseBlockTimes(block.time)
      const nextStart =
        index < day.blocks.length - 1 ? parseBlockTimes(day.blocks[index + 1].time).start : null
      // A block ends at its own stated end time, unless the next block on that
      // day starts earlier than that (e.g. an all-day "badge retrieval" block
      // whose column moves on as soon as the next session begins) — whichever
      // comes first is where the cell actually stops.
      const cappedEnd = nextStart !== null ? Math.min(end, nextStart) : end
      return {
        block,
        rowStart: lineOf.get(start)!,
        rowEnd: lineOf.get(cappedEnd)!,
      }
    })
  )

  return { rowCount: boundaries.length - 1, rows }
}

export default function SchedulePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const pdfUrl = `${basePath}/EUVIP2026_Program_summary_final_version.pdf`
  const timeline = buildTimeline(schedule.days)

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
              The conference programme is available below. All times are shown in local time (Luxembourg).
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

      {/* Schedule Content */}
      <section className="bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Legend */}
          <div className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {LEGEND_TYPES.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`h-3 w-3 shrink-0 ${TYPE_STYLES[type].row} border border-black/10`} />
                <span className="text-xs text-gray-600">{TYPE_STYLES[type].label}</span>
              </div>
            ))}
          </div>

          {/* Full week grid, days side by side with a shared timeline — identical clock
              times land on the same row across all four columns, like the printed programme. */}
          <div className="overflow-x-auto border border-black/10 shadow-sm">
            <div
              className="grid min-w-[1000px] grid-cols-4"
              style={{ gridTemplateRows: `auto repeat(${timeline.rowCount}, auto)` }}
            >
              {schedule.days.map((day, dayIndex) => (
                <div
                  key={day.date}
                  className={`bg-primary text-primary-foreground px-3 py-3 text-center ${
                    dayIndex > 0 ? 'border-l border-white/20' : ''
                  }`}
                  style={{ gridColumn: dayIndex + 1, gridRow: '1 / 2' }}
                >
                  <p className="text-sm font-bold tracking-wide uppercase">{day.title}</p>
                  <p className="text-primary-foreground/80 text-xs">
                    {new Date(day.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              ))}

              {timeline.rows.map((dayRows, dayIndex) =>
                dayRows.map(({ block, rowStart, rowEnd }, index) => {
                  const style = TYPE_STYLES[block.type]
                  const isEmbedded = Boolean(block.heading) && block.layout !== 'split'
                  const embeddedBorder = style.accent.replace('text-', 'border-l-')
                  return (
                    <div
                      key={index}
                      className={`${style.row} border-t border-black/10 px-3 py-3 ${
                        dayIndex > 0 ? 'border-l' : ''
                      }`}
                      style={{ gridColumn: dayIndex + 1, gridRow: `${rowStart} / ${rowEnd}` }}
                    >
                      <p
                        className={`mb-1 text-xs whitespace-nowrap ${
                          block.type === 'free' ? 'font-normal text-gray-400' : 'font-semibold text-gray-800'
                        }`}
                      >
                        {block.time}
                      </p>
                      {block.heading && (
                        <p className={`mb-2 text-sm font-bold sm:text-base ${style.accent}`}>
                          {block.heading}
                        </p>
                      )}
                      <div
                        className={
                          block.layout === 'split'
                            ? 'flex h-full items-stretch divide-x divide-black/10'
                            : isEmbedded
                              ? 'space-y-2'
                              : 'space-y-3'
                        }
                      >
                        {block.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={
                              block.layout === 'split'
                                ? 'flex-1 pr-3 first:pl-0 [&:not(:first-child)]:pl-3'
                                : isEmbedded
                                  ? `${embeddedBorder} rounded-r-md border-l-4 bg-white/60 px-2 py-2 shadow-sm`
                                  : itemIndex > 0
                                    ? 'border-t border-black/10 pt-2'
                                    : undefined
                            }
                          >
                            <p
                              className={`text-xs sm:text-sm ${style.accent} ${
                                block.type === 'free' ? 'italic' : 'font-bold'
                              }`}
                            >
                              {item.title}
                            </p>
                            {item.subtitle && (
                              <p className="mt-1 text-xs text-gray-700 italic">&ldquo;{item.subtitle}&rdquo;</p>
                            )}
                            {item.speaker && (
                              <p className="mt-1 text-xs font-medium text-gray-800">{item.speaker}</p>
                            )}
                            {item.meta && <p className="mt-1 text-[11px] text-gray-500">{item.meta}</p>}
                            {item.ids && (
                              <p className="mt-1 text-[11px] text-gray-500">
                                <span className="font-medium">IDs:</span> {item.ids}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-gray-500 lg:hidden">
            Scroll horizontally to see all four days.
          </p>


        </div>
      </section>

      {/* Social Program */}
      <section className="bg-container py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary text-3xl font-extrabold tracking-tight md:text-4xl">
            Social Programme
          </h2>
          <div className="bg-primary mt-3 h-1 w-16" aria-hidden="true" />

          <div className="mt-10 space-y-12">
            {/* Guided Tour */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="shrink-0 md:w-[38%]">
                <img
                  src={`${basePath}/social-tour.png`}
                  alt="Luxembourg City at night — Grund district and Bock Casemates"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold tracking-wide text-[#2a6e5e] uppercase">
                  <span>Monday 28 September 2026</span>
                  <span className="text-muted-foreground">|</span>
                  <span>14:00 – 16:30</span>
                  <span className="text-muted-foreground">|</span>
                  <span>Luxembourg City</span>
                </div>
                <h3 className="text-primary mt-3 text-2xl font-bold md:text-3xl">Guided Tour in Luxembourg City</h3>
                <p className="text-container-foreground mt-4 leading-relaxed">
                  Before the conference sessions begin, attendees are invited to discover the charm of
                  Luxembourg City through a guided walking tour. Explore the historic Grund district,
                  the Bock Casemates, and the Corniche, known as &ldquo;Europe&rsquo;s most beautiful
                  balcony.&rdquo;
                </p>
              </div>
            </div>

            {/* Welcome Drink */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="shrink-0 md:w-[38%]">
                <img
                  src={`${basePath}/social-abbaye.png`}
                  alt="Abbaye de Neumünster at night"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold tracking-wide text-[#2a6e5e] uppercase">
                  <span>Monday 28 September 2026</span>
                  <span className="text-muted-foreground">|</span>
                  <span>18:00 – 20:00</span>
                  <span className="text-muted-foreground">|</span>
                  <span>Abbaye de Neumünster</span>
                </div>
                <h3 className="text-primary mt-3 text-2xl font-bold md:text-3xl">Welcome Drink &amp; Researchers Matching</h3>
                <p className="text-container-foreground mt-4 leading-relaxed">
                  Join fellow attendees for the opening social event at the historic Abbaye de
                  Neumünster, located in Luxembourg City&rsquo;s picturesque Grund district. The evening
                  will begin with the Opening Keynote by Dima Damen, followed by a welcome drink and an
                  opportunity to connect with researchers, colleagues, and friends from around the world
                  while enjoying a first taste of Luxembourgish hospitality.
                </p>
              </div>
            </div>

            {/* Gala Dinner */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="shrink-0 md:w-[38%]">
                <img
                  src={`${basePath}/social-cruise.png`}
                  alt="Gala Dinner river cruise on the Moselle at sunset"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold tracking-wide text-[#2a6e5e] uppercase">
                  <span>Wednesday 30 September 2026</span>
                  <span className="text-muted-foreground">|</span>
                  <span>18:15 – 23:45</span>
                  <span className="text-muted-foreground">|</span>
                  <span>Grevenmacher (River Cruise)</span>
                </div>
                <h3 className="text-primary mt-3 text-2xl font-bold md:text-3xl">Gala Dinner — River Cruise</h3>
                <p className="text-container-foreground mt-4 leading-relaxed">
                  The conference gala dinner will take place aboard a river cruise on the Moselle,
                  departing from Grevenmacher. Enjoy an evening of fine dining, live entertainment,
                  and scenic views along the wine-growing region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
