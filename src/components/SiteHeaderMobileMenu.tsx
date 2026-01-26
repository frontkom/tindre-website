"use client";

import * as React from "react";
import Link from "next/link";

type MobileMenuLink = { href: string; label: string };

type SiteHeaderMobileMenuProps = {
  buttonLabel: string;
  brandLabel: string;
  homeHref: string;
  solutionsLabel: string;
  linksLabel: string;
  solutions: readonly MobileMenuLink[];
  links: readonly MobileMenuLink[];
};

export function SiteHeaderMobileMenu({
  buttonLabel,
  brandLabel,
  homeHref,
  solutionsLabel,
  linksLabel,
  solutions,
  links,
}: SiteHeaderMobileMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (!open) return;

    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-black/80"
        aria-label={buttonLabel}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M5 7h14M5 12h14M5 17h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open ? (
        <>
          <div
            id="mobile-nav-panel"
            className="fixed inset-0 z-60 bg-white"
          >
            <div className="flex h-full flex-col">
              <div className="border-b border-black/10">
                <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-16">
                  <div className="grid h-20 grid-cols-[1fr_auto] items-center">
                    <Link
                      href={homeHref}
                      className="justify-self-start text-[30px] font-medium tracking-[-0.04em] text-black"
                      onClick={() => setOpen(false)}
                    >
                      {brandLabel}
                    </Link>

                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center justify-self-end text-black/80"
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-screen-2xl flex-1 px-6 py-10 sm:px-10 lg:px-16">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-end gap-2 text-right text-xl font-semibold tracking-tight text-black"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((v) => !v)}
                >
                  <span>{solutionsLabel}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className={[
                      "h-4 w-4 transition-transform",
                      solutionsOpen ? "-rotate-180" : "rotate-0",
                    ].join(" ")}
                    fill="none"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {solutionsOpen ? (
                  <div className="mt-3 flex flex-col items-end gap-3 text-right">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-base font-semibold tracking-tight text-black/80 hover:text-black"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}

                <div className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  {linksLabel}
                </div>
                <nav className="mt-4 flex flex-col items-end gap-3 text-right">
                  {links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xl font-semibold tracking-tight text-black"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

