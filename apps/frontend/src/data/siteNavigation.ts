import { homeServiceModelHighlights, serviceDivisions } from "@/data/servicesCatalog";

export const mainNavigationLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Casos", href: "/cases" }
];

export const secondaryNavigationLinks = [
  { label: "Portal", href: "/portal" },
  { label: "Trabalhe Conosco", href: "/trabalhe" }
];

export const serviceNavigationLinks = serviceDivisions.map((division) => ({
  label: division.navLabel,
  href: `/servicos/${division.slug}`,
  description: division.summary
}));

export { homeServiceModelHighlights };