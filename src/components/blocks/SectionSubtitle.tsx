import * as React from "react";

type SectionSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p
      className={[
        "mt-5 max-w-2xl text-base leading-8 font-light text-zinc-600 sm:text-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}

