"use client";

import {
  ChatCircleDots,
  GearSix,
  MagnifyingGlass,
  ShoppingBagOpen,
} from "@phosphor-icons/react";

const items = [
  {
    title: "Chatbot kundeservice og support",
    Icon: ChatCircleDots,
  },
  {
    title: "Guidet shoppingopplevelser",
    Icon: ShoppingBagOpen,
  },
  {
    title: "AI-basert søk på nettsiden",
    Icon: MagnifyingGlass,
  },
  {
    title: "Automatiseringer",
    Icon: GearSix,
  },
] as const;

export function UseCasesGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map(({ title, Icon }) => (
        <div
          key={title}
          className="group border border-zinc-200 bg-white p-8 transition-shadow hover:border-black hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="text-black">
            <Icon size={48} weight="light" />
          </div>
          <div className="mt-6 text-[15px] font-normal leading-7 text-black">{title}</div>
        </div>
      ))}
    </div>
  );
}
