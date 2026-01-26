export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-20 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 pb-16">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative w-full text-white">
          <h1 className="ml-24 text-6xl leading-[1.3] font-extrabold">
            14th European Conference on <br /> Visual Information Processing <br /> EUVIP 2026 <br />
          </h1>
          <p className="mt-16 ml-24 text-2xl font-bold">28th September-1st October 2026, Luxembourg</p>
        </div>
      </section>
      {/* About */}
      <section>hello</section>
    </>
  )
}
