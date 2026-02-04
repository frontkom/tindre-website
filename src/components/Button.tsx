"use client";

import * as React from "react";

import { ArrowUpRight, CalendarCheck } from "@phosphor-icons/react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  rounded?: boolean;
  withArrow?: boolean;
  withSparkle?: boolean;
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
    withSparkle = false,
    className,
    children,
    ...rest
  } = props;

  const base = cn(
    "group inline-flex items-center justify-center gap-[2px] border-2 text-sm font-semibold tracking-tight transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ring-offset-white",
    "disabled:pointer-events-none disabled:opacity-50",
    rounded ? "rounded-full" : "rounded-md",
  );

  const variantClass =
    variant === "primary"
      ? "border-primary bg-primary text-white hover:bg-transparent hover:text-primary"
      : variant === "outline"
        ? "border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
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

    const icon = withArrow ? (
      <ArrowUpRight
        aria-hidden="true"
        weight="bold"
        className="size-3 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-px"
      />
    ) : withSparkle ? (
      <CalendarCheck
        aria-hidden="true"
        weight="bold"
        className="size-4 shrink-0"
      />
    ) : null;

    return (
      <a {...anchorProps} href={href} target={target} rel={rel} className={classes}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  const icon = withArrow ? (
    <ArrowUpRight
      aria-hidden="true"
      weight="bold"
      className="size-3 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-px"
    />
  ) : withSparkle ? (
      <CalendarCheck
        aria-hidden="true"
        weight="bold"
        className="size-4 shrink-0"
      />
    ) : null;

  return (
    <button {...rest} className={classes}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
