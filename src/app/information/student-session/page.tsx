import Information from '@/components/Images/Information'

export default function StudentSession() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
      <Information className="mb-6" />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-container-foreground text-3xl font-extrabold tracking-tight md:text-4xl">
            Student Session
          </h2>
          <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
        </div>
      </div>
      <section className="bg-background text-container-foreground mt-4 mb-8">
        <div className="space-y-4 text-2xl leading-relaxed">
          <p>Will be announced soon.</p>
        </div>
      </section>
    </div>
  )
}
