import Image from "next/image";

type PeopleStackLeftProps = {
  /** Image paths under /public, e.g. "/images/people/ha.webp" */
  srcs: string[];
  /** Accessible label for the group */
  alt?: string;
};

export function PeopleStackLeft({ srcs, alt = "People" }: PeopleStackLeftProps) {
  const [left, middle, right] = srcs;
  if (!left || !middle || !right) return null;

  return (
    <div className="flex justify-start">
      <div className="relative h-16 w-36">
        {/* Front-most avatar should be far left */}
        <div className="absolute left-0 top-1 z-20 size-16 overflow-hidden rounded-full border border-black/10 bg-zinc-100">
          <Image src={left} alt={alt} fill sizes="56px" className="object-cover grayscale" />
        </div>
        <div className="absolute left-10 top-2 z-10 size-15 overflow-hidden rounded-full border border-black/10 bg-zinc-100">
          <Image src={middle} alt={alt} fill sizes="60px" className="object-cover grayscale" />
        </div>
        <div className="absolute left-20 top-3 z-0 size-14 overflow-hidden rounded-full border border-black/10 bg-zinc-100">
          <Image src={right} alt={alt} fill sizes="64px" className="object-cover grayscale" />
        </div>
      </div>
    </div>
  );
}

