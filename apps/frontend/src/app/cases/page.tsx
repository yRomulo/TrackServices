import type { Metadata } from "next";
import { CasesSection } from "@/components/CasesSection";
import { PageHeroSection } from "@/components/PageHeroSection";

export const metadata: Metadata = {
  title: "Cases",
  description: "Projetos e exemplos de atuação da Track Services em diferentes contextos de tecnologia."
};

export default function CasesPage() {
  return (
    <main id="content">
      <PageHeroSection
        eyebrow="Cases"
        title="Projetos que ajudam a explicar a capacidade de entrega"
        description="Esta tela existe para dar evidência prática ao discurso comercial. Aqui o visitante encontra contextos e exemplos antes de seguir para a conversa."
        highlights={[
          "Infraestrutura",
          "Suporte",
          "Segurança",
          "Projetos especiais"
        ]}
        primaryAction={{ label: "Falar com especialista", href: "/contato" }}
        secondaryAction={{ label: "Ver serviços", href: "/servicos" }}
      />

      <CasesSection />
    </main>
  );
}
