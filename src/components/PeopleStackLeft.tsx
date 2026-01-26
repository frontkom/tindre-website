import Image from "next/image";

type PeopleStackLeftProps = {
  /** Image paths under /public, e.g. "/images/people/ha.webp" */
  srcs: string[];
  /** Accessible label for the group */
  alt?: string;
};

export function PeopleStackLeft({ srcs, alt = "People" }: PeopleStackLeftProps) {
  const [first, second, third, fourth] = srcs;
  if (!first || !second || !third || !fourth) return null;

  // Same-size avatars, vertically centered, left-most on top.
  const size = 56; // px
  const overlap = 18; // px
  const step = size - overlap;

  return (
    <div className="flex justify-start">
      <div
        className="relative"
        style={{
          height: size,
          width: size + step * 3,
        }}
      >
        <div
          className="absolute left-0 top-0 z-30 overflow-hidden rounded-full border border-black/10 bg-zinc-100"
          style={{ height: size, width: size }}
        >
          <Image src={first} alt={alt} fill sizes={`${size}px`} className="object-cover grayscale" />
        </div>
        <div
          className="absolute top-0 z-20 overflow-hidden rounded-full border border-black/10 bg-zinc-100"
          style={{ left: step, height: size, width: size }}
        >
          <Image src={second} alt={alt} fill sizes={`${size}px`} className="object-cover grayscale" />
        </div>
        <div
          className="absolute top-0 z-10 overflow-hidden rounded-full border border-black/10 bg-zinc-100"
          style={{ left: step * 2, height: size, width: size }}
        >
          <Image src={third} alt={alt} fill sizes={`${size}px`} className="object-cover grayscale" />
        </div>
        <div
          className="absolute top-0 z-0 overflow-hidden rounded-full border border-black/10 bg-zinc-100"
          style={{ left: step * 3, height: size, width: size }}
        >
          <Image src={fourth} alt={alt} fill sizes={`${size}px`} className="object-cover grayscale" />
        </div>
      </div>
    </div>
  );
}

