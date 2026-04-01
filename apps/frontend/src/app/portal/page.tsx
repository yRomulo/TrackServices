import type { Metadata } from "next";
import { PageHeroSection } from "@/components/PageHeroSection";
import { PortalSection } from "@/components/PortalSection";

export const metadata: Metadata = {
  title: "Portal",
  description: "Solicitação e acesso ao portal de clientes Track Services."
};

export default function PortalPage() {
  return (
    <main id="content">
      <PageHeroSection
        eyebrow="Portal"
        title="Portal do cliente em uma tela dedicada"
        description="O portal deixa de ser um bloco secundário e vira uma jornada própria. Aqui o cliente entende o benefício e solicita acesso quando necessário."
        highlights={[
          "Chamados",
          "SLA",
          "Relatórios",
          "Integração"
        ]}
        primaryAction={{ label: "Solicitar acesso", href: "/portal#portal" }}
        secondaryAction={{ label: "Falar com especialista", href: "/contato" }}
      />

      <PortalSection />
    </main>
  );
}
