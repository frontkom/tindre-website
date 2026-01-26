export type SolutionsNavKey =
  | "customerSupport"
  | "ecommerce"
  | "government"
  | "travelHospitality";

export type SiteNavItemKey = "references" | "contact";

export type SiteNavEntry =
  | {
      type: "dropdown";
      key: "solutions";
      items: readonly { key: SolutionsNavKey; slug: string }[];
    }
  | {
      type: "link";
      key: SiteNavItemKey;
      /** Path segment under /[lang], without leading slash (e.g. "pricing"). */
      slug: string;
    };

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
  { type: "link", key: "references", slug: "stories" },
  { type: "link", key: "contact", slug: "contact" },
] as const;

