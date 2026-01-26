export default function AnnouncedSoon() {
  return (
    <section className="bg-background text-container-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Will be announced soon</h2>
            <div className="bg-accent mt-3 h-1 w-16 rounded-full" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-6 max-w-7xl rounded-2xl px-6 py-5">
          <p className="text-base text-lg leading-relaxed">The details will be announced soon.</p>
          <p className="mt-2 text-lg opacity-75">Please check back later to see the announcements.</p>
        </div>
      </div>
    </section>
  )
}
