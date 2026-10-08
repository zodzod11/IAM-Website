import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[70vh] bg-base px-4">
      <div className="max-w-2xl text-center">
        <div className="text-8xl font-bold text-accent md:text-9xl">404</div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded bg-accent text-white hover:bg-accent-hover transition-all duration-200"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded border border-white/20 text-zinc-300 bg-transparent hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
