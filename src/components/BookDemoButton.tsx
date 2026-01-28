"use client";

import type { MouseEvent } from "react";

import { Button } from "@/components/Button";

type BookDemoButtonProps = {
  href: string;
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children: React.ReactNode;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function handleClick(e: MouseEvent<HTMLAnchorElement>) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({ event: "book_meeting" });
  }
}

export function BookDemoButton({
  href,
  size,
  withArrow,
  children,
}: BookDemoButtonProps) {
  return (
    <Button href={href} size={size} withArrow={withArrow} onClick={handleClick}>
      {children}
    </Button>
  );
}
