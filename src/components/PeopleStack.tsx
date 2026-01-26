import Image from "next/image";

type PeopleStackProps = {
  /** Image paths under /public, e.g. "/images/people/ha.webp" */
  srcs: string[];
  /** Accessible label for the group */
  alt?: string;
};

export function PeopleStack({ srcs, alt = "People" }: PeopleStackProps) {
  const [left, center, right] = srcs;
  if (!left || !center || !right) return null;

  return (
    <div className="flex justify-center">
      <div className="relative h-16 w-32">
        <div className="absolute -left-2 top-3 z-0 size-14 overflow-hidden rounded-full border border-black/10 bg-zinc-100">
          <Image src={left} alt={alt} fill sizes="56px" className="object-cover grayscale" />
        </div>
        <div className="absolute -right-2 top-3 z-0 size-14 overflow-hidden rounded-full border border-black/10 bg-zinc-100">
          <Image src={right} alt={alt} fill sizes="56px" className="object-cover grayscale" />
        </div>
        <div className="absolute left-1/2 top-0 z-10 size-16 -translate-x-1/2 overflow-hidden rounded-full border border-black/10 bg-zinc-100">
          <Image src={center} alt={alt} fill sizes="64px" className="object-cover grayscale" />
        </div>
      </div>
    </div>
  );
}

