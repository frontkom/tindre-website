"use client";

import {
  Clock,
  Cpu,
  MagnifyingGlassPlus,
  TrendUp,
  UserCircle,
} from "@phosphor-icons/react";

const items = [
  {
    text: "Øker salget",
    Icon: TrendUp,
  },
  {
    text: "Gir raskere og bedre svar til brukere",
    Icon: Clock,
  },
  {
    text: "Frigjør tid hos ansatte",
    Icon: UserCircle,
  },
  {
    text: "Gir innsikt i hva kundene faktisk spør om",
    Icon: MagnifyingGlassPlus,
  },
  {
    text: "Muliggjør automatisering av komplekse prosesser",
    Icon: Cpu,
  },
] as const;

export function ValuePropsGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ text, Icon }) => (
        <div
          key={text}
          className="border border-zinc-200 bg-transparent p-8 transition-shadow hover:border-black hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        >
          <div className="text-black">
            <Icon size={48} weight="light" />
          </div>
          <p className="mt-6 text-[15px] font-normal leading-7 text-black">{text}</p>
        </div>
      ))}
    </div>
  );
}
