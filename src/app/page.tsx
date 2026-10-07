export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="flex items-center justify-center min-h-[85vh] bg-base px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Audio. Video. Media.
            <br />
            <span className="text-accent">Done With Impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            Event production, AV systems, and technical training for
            churches, nonprofits, and organizations across New England.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded border border-white/20 text-zinc-300 bg-transparent hover:bg-white/10 transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
