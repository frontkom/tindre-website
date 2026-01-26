"use client";

import {
  Clock,
  Coins,
  Cpu,
  MagnifyingGlassPlus,
  TrendUp,
  UsersThree,
} from "@phosphor-icons/react";

// Icon order matches `home.value.items` order (6 cards).
const icons = [Clock, TrendUp, UsersThree, Coins, MagnifyingGlassPlus, Cpu] as const;

type ValuePropsGridProps = {
  items: readonly string[];
};

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const desktopPatterns: readonly (readonly boolean[])[] = [
  // 3x3 slots, true = card, false = empty
  [true, true, false, true, false, true, false, true, true],
  [true, false, true, true, true, false, false, true, true],
  [true, true, false, false, true, true, true, false, true],
] as const;

export function ValuePropsGrid({ items }: ValuePropsGridProps) {
  const pattern = desktopPatterns[hashString(items.join("|")) % desktopPatterns.length]!;
  const cardCount = pattern.filter(Boolean).length;
  const shouldUsePattern = items.length > 0 && items.length <= cardCount;

  return (
    <>
      {/* Mobile/tablet: regular grid (no empty slots) */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        {items.map((text, idx) => {
          const Icon = icons[idx] ?? Cpu;
          return (
            <div
              key={text}
              className="border border-zinc-200 bg-white p-8 transition-shadow hover:border-black hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <div className="text-black">
                <Icon size={48} weight="light" />
              </div>
              <p className="mt-6 text-[15px] font-normal leading-7 text-black">{text}</p>
            </div>
          );
        })}
      </div>

      {/* Desktop: patterned grid with intentional whitespace */}
      <div className="mt-12 hidden grid-cols-3 gap-4 lg:grid lg:auto-rows-fr">
        {(shouldUsePattern ? pattern : Array.from({ length: items.length }, () => true)).map(
          (isCard, slotIdx) => {
            if (!isCard) {
              return (
                <div
                  key={`empty-${slotIdx}`}
                  aria-hidden="true"
                  className="min-h-[168px] border border-zinc-200 bg-white"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(0,0,0,0.045) 0, rgba(0,0,0,0.045) 2px, transparent 2px, transparent 10px)",
                  }}
                />
              );
            }

            const itemIdx = shouldUsePattern
              ? pattern.slice(0, slotIdx + 1).filter(Boolean).length - 1
              : slotIdx;
            const text = items[itemIdx];
            const Icon = icons[itemIdx] ?? Cpu;

            if (!text) return null;

            return (
              <div
                key={text}
                className="min-h-[168px] border border-zinc-200 bg-white p-8 transition-shadow hover:border-black hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              >
                <div className="text-black">
                  <Icon size={48} weight="light" />
                </div>
                <p className="mt-6 text-[15px] font-normal leading-7 text-black">{text}</p>
              </div>
            );
          },
        )}
      </div>
    </>
  );
}
