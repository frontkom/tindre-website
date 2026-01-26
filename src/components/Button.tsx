"use client";

import * as React from "react";

import { ArrowUpRight } from "@phosphor-icons/react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  rounded?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
};

type AnchorButtonProps = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

function cn(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    rounded = true,
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const base = cn(
    "group inline-flex items-center justify-center gap-[2px] border-2 text-sm font-semibold tracking-tight transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0466c8]/40 focus-visible:ring-offset-2 ring-offset-white",
    "disabled:pointer-events-none disabled:opacity-50",
    rounded ? "rounded-full" : "rounded-md",
  );

  const variantClass =
    variant === "primary"
      ? "border-[#0466c8] bg-[#0466c8] text-white hover:bg-transparent hover:text-[#0466c8]"
      : variant === "outline"
        ? "border-[#0466c8] bg-transparent text-[#0466c8] hover:bg-[#0466c8] hover:text-white"
        : "border-transparent bg-transparent text-black hover:bg-black/5";

  const sizeClass =
    size === "sm"
      ? "px-[22px] py-[14px]"
      : size === "lg"
        ? "px-12 py-5"
        : "px-[22px] py-[14px]";

  const classes = cn(base, variantClass, sizeClass, className);

  if ("href" in rest) {
    const { href, target: targetProp, rel: relProp, ...anchorProps } = rest as AnchorButtonProps;
    const isExternal = href.startsWith("http");
    const target = targetProp ?? (isExternal ? "_blank" : undefined);
    const rel = relProp ?? (target === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <a {...anchorProps} href={href} target={target} rel={rel} className={classes}>
        <span>{children}</span>
        {withArrow ? (
          <ArrowUpRight
            aria-hidden="true"
            weight="bold"
            className="size-3 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-px"
          />
        ) : null}
      </a>
    );
  }

  return (
    <button {...rest} className={classes}>
      <span>{children}</span>
      {withArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          weight="bold"
          className="size-3 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-px"
        />
      ) : null}
    </button>
  );
}
