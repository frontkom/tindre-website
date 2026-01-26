"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

type SolutionsDropdownProps = {
  label: string;
  items: readonly { href: string; label: string }[];
};

export function SolutionsDropdown({ label, items }: SolutionsDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    function onPointerDown(e: MouseEvent | PointerEvent) {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      setOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1 text-sm font-semibold tracking-tight text-black"
      >
        <span>{label}</span>
        <motion.span
          className="translate-y-px text-black/70"
          animate={{ rotate: open ? -180 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <CaretDown size={14} weight="bold" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <>
            {/* Hover-bridge to prevent closing when moving cursor down to the menu. */}
            <div aria-hidden="true" className="absolute left-0 top-full z-40 h-4 w-72" />

            <motion.div
              role="menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute left-0 top-full z-50 mt-4 w-72 rounded-2xl border border-zinc-200 bg-white p-2 shadow-[0_18px_60px_rgba(0,0,0,0.10)]"
            >
              <div className="flex flex-col gap-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="rounded-xl px-3 py-2 text-sm font-semibold tracking-tight text-black transition-colors hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

