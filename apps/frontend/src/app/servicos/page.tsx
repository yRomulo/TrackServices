import type { Metadata } from "next";
import { PageHeroSection } from "@/components/PageHeroSection";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Divisões de atuação da Track Services com páginas dedicadas para governança, operações, projetos e segurança."
};

export default function ServicosPage() {
  return (
    <main id="content">
      <PageHeroSection
        eyebrow="Serviços"
        title="A categoria pai existe para organizar, não para concentrar conteúdo"
        description="Selecione uma divisão para ver a página específica. A Track Services foi reestruturada para evitar páginas genéricas demais e levar o usuário direto ao assunto certo."
        highlights={[
          "Governança",
          "Operações",
          "Projetos",
          "Segurança",
          "Comercial"
        ]}
        primaryAction={{ label: "Falar com especialista", href: "/contato" }}
        secondaryAction={{ label: "Conhecer a empresa", href: "/sobre" }}
      />

      <ServicesSection />
    </main>
  );
}
