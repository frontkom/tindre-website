"use client";

import * as React from "react";

import { PeopleStack } from "@/components/PeopleStack";

type RandomPeopleStackProps = {
  /** All available images (under /public) to pick from */
  srcs: string[];
  /** How many people to show (PeopleStack expects 3) */
  count?: 3;
  alt?: string;
};

function shuffle<T>(arr: T[]) {
  // Fisher–Yates
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

export function RandomPeopleStack({ srcs, count = 3, alt }: RandomPeopleStackProps) {
  const chosen = React.useMemo(() => {
    const uniq = Array.from(new Set(srcs)).filter(Boolean);
    if (uniq.length < count) return [];
    return shuffle([...uniq]).slice(0, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally once per page load/refresh

  if (chosen.length !== count) return null;
  return <PeopleStack srcs={chosen} alt={alt} />;
}

