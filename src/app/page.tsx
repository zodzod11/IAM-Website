export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Homepage sections will be built here — Nav → Hero → Services → etc. */}
      <section className="flex flex-1 items-center justify-center min-h-[60vh] bg-base px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Audio. Video. Media.
            <span className="text-accent"> Done With Impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Event production, AV systems, and technical training for
            churches, nonprofits, and organizations across New England.
          </p>
        </div>
      </section>
    </main>
  );
}
