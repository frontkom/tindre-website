import Image from "next/image";
import type React from "react";

export type BrandLogo = {
  src: string;
  alt: string;
};

type BrandMarqueeProps = {
  logos: readonly BrandLogo[];
  className?: string;
};

export function BrandMarquee({ logos, className }: BrandMarqueeProps) {
  if (logos.length === 0) return null;

  return (
    <div
      className={["marquee", className].filter(Boolean).join(" ")}
      style={{ ["--marquee-gap" as never]: "3.5rem" } as React.CSSProperties}
    >
      <div className="marquee-track py-2">
        <div className="marquee-group">
          {logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={50}
              className="h-6 w-auto opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {logos.map((logo) => (
            <Image
              key={`dup-${logo.src}`}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={50}
              className="h-6 w-auto opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

