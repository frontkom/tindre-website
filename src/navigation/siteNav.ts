import type { Locale } from "@/i18n/messages";

export type SolutionsNavKey =
  | "customerSupport"
  | "ecommerce"
  | "government"
  | "travelHospitality";

export type SiteNavItemKey = "references" | "contact";

/** Slug can be a string (same for all languages) or an object with language-specific slugs. */
export type LocalizedSlug = string | Record<Locale, string>;

export type SiteNavEntry =
  | {
      type: "dropdown";
      key: "solutions";
      items: readonly { key: SolutionsNavKey; slug: LocalizedSlug }[];
    }
  | {
      type: "link";
      key: SiteNavItemKey;
      /** Path segment under /[lang], without leading slash (e.g. "pricing"). */
      slug: LocalizedSlug;
    };

/** Resolves a localized slug to the appropriate string for the given locale. */
export function resolveSlug(slug: LocalizedSlug, lang: Locale): string {
  if (typeof slug === "string") return slug;
  return slug[lang];
}

export const siteNavItems: readonly SiteNavEntry[] = [
  {
    type: "dropdown",
    key: "solutions",
    items: [
      { key: "customerSupport", slug: "solutions/customer-support" },
      { key: "ecommerce", slug: "solutions/ecommerce" },
      { key: "government", slug: "solutions/government" },
      { key: "travelHospitality", slug: "solutions/travel-hospitality" },
    ],
  },
  { type: "link", key: "references", slug: { no: "historier", en: "stories" } },
  { type: "link", key: "contact", slug: "contact" },
] as const;

