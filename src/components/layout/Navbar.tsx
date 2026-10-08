"use client";

import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const NAV_LINKS: readonly NavLink[] = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const DROPDOWN_ITEMS = [
  { label: "Event Production", href: "/services/events" },
  { label: "AV Systems", href: "/services/systems" },
  { label: "Church AV Training", href: "/services/church-av" },
] as const;

/**
 * IAM Navbar — sticky, responsive, with mobile slide-in overlay.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggle() {
    setMobileOpen(!mobileOpen);
  }

  function close() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark/50 bg-base/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-4">
        {/* ── Logo ──────────────────────────────────── */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:text-accent transition-colors"
          onClick={close}
        >
          IAM
        </a>

        {/* ── Desktop Nav ───────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    type="button"
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                    <span className="ml-1 text-xs opacity-60">&dtrif;</span>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    <div className="bg-surface rounded border border-border-dark p-3 w-56 shadow-lg">
                      <a
                        href={link.href}
                        className="block px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider border-b border-border-dark/30"
                      >
                        All Services
                      </a>
                      {DROPDOWN_ITEMS.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-accent/10 rounded transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ──────────────────────────── */}
        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded bg-accent text-white hover:bg-accent-hover transition-all duration-200"
        >
          Request a Quote
        </a>

        {/* ── Hamburger (mobile) ───────────────────── */}
        <button
          type="button"
          className="flex md:hidden flex-col gap-1.5 w-6 cursor-pointer"
          onClick={toggle}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 rounded bg-white transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block h-0.5 rounded bg-white transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 rounded bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>

      {/* ── Mobile Overlay ─────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-base/98 backdrop-blur-md"
          role="dialog"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            <a href="/" className="text-xl font-bold text-white" onClick={close}>
              IAM
            </a>
            <button
              type="button"
              onClick={close}
              className="text-2xl leading-none text-zinc-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-8 pb-12 gap-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <span className="block py-3 text-lg font-medium text-zinc-300 border-b border-border-dark/30">
                      {link.label}
                    </span>
                    <div className="flex flex-col gap-2 pl-4 pb-3">
                      <a
                        href={link.href}
                        onClick={close}
                        className="block py-2 text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        All Services &rarr;
                      </a>
                      {DROPDOWN_ITEMS.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={close}
                          className="block py-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={close}
                    className="block py-3 text-lg font-medium text-zinc-300 hover:text-white hover:pl-4 transition-all border-b border-border-dark/30"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}

            <div className="mt-8 pt-4">
              <a
                href="/contact"
                onClick={close}
                className="flex w-full items-center justify-center py-4 text-base font-medium rounded bg-accent text-white"
              >
                Request a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
