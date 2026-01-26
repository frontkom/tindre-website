import * as React from "react";

import { Container } from "@/components/blocks/Container";

type SimplePageProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  top?: React.ReactNode;
  align?: "left" | "center";
  maxWidthClassName?: string;
  centerVertically?: boolean;
  topPaddingClassName?: string;
};

export function SimplePage({
  title,
  description,
  children,
  top,
  align = "left",
  maxWidthClassName = "max-w-3xl",
  centerVertically = false,
  topPaddingClassName = "pt-32",
}: SimplePageProps) {
  return (
    <main
      className={[
        centerVertically ? "min-h-svh" : "min-h-screen",
        topPaddingClassName,
        centerVertically ? "flex items-center" : undefined,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className={maxWidthClassName}>
        {top ? <div className="mb-6">{top}</div> : null}
        <h1
          className={[
            "text-4xl font-light tracking-[0.08em] text-black sm:text-5xl",
            align === "center" ? "text-center" : undefined,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={[
              "mt-4 text-base leading-8 font-light text-zinc-600 sm:text-lg",
              align === "center" ? "text-center" : undefined,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </main>
  );
}

