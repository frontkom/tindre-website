"use client";

import {
  ChatCircleDots,
  ChartLineUp,
  ChatsCircle,
  GearSix,
  MagicWand,
  MagnifyingGlass,
  ShoppingBagOpen,
  UsersThree,
} from "@phosphor-icons/react";

const iconMap = {
  support: ChatCircleDots,
  shopping: ShoppingBagOpen,
  search: MagnifyingGlass,
  automations: GearSix,
  sessions: ChartLineUp,
  leads: UsersThree,
  recommendations: MagicWand,
  internalChat: ChatsCircle,
} as const;

type UseCasesGridProps = {
  items: readonly { title: string; description: string; icon?: string }[];
};

export function UseCasesGrid({ items }: UseCasesGridProps) {
  return (
    <div className="mt-10">
      {/* Top border segmented by current column count (1 / 2 / 4). */}
      <div
        aria-hidden="true"
        className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="border-t border-zinc-200" />
        <div className="hidden border-t border-zinc-200 sm:block" />
        <div className="hidden border-t border-zinc-200 lg:block" />
        <div className="hidden border-t border-zinc-200 lg:block" />
      </div>

      <div className="grid grid-cols-1 gap-12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, description, icon }) => {
          const Icon =
            icon && Object.prototype.hasOwnProperty.call(iconMap, icon)
              ? iconMap[icon as keyof typeof iconMap]
              : GearSix;

          return (
            <div key={title} className="flex flex-col">
              <div className="text-black">
                <Icon size={24} weight="light" />
              </div>
              <div className="mt-6 text-[15px] font-semibold tracking-tight text-black">
                {title}
              </div>
              <p className="mt-4 text-sm leading-7 font-light text-zinc-600">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
