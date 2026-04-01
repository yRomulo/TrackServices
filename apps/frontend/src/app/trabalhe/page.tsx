import type { Metadata } from "next";
import { CareersSection } from "@/components/CareersSection";
import { PageHeroSection } from "@/components/PageHeroSection";

const arrowIcon = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
  </svg>
);

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description: "Vagas, banco de talentos e recrutamento da Track Services."
};

export default function TrabalhePage() {
  return (
    <main id="content">
      <PageHeroSection
        eyebrow="Carreiras"
        title="Trabalhe Conosco em uma página própria"
        description="A área de carreiras também foi separada para não disputar atenção com a home. O foco aqui é atração de talentos e chamada direta para conversa."
        highlights={[
          "Suporte TI",
          "Infraestrutura",
          "CFTV",
          "NOC"
        ]}
        primaryAction={{ label: "Enviar currículo", href: "/trabalhe#trabalhe" }}
        secondaryAction={{ label: "Falar com especialista", href: "/contato" }}
      />

      <CareersSection arrowIcon={arrowIcon} />
    </main>
  );
}
