import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHeroSection } from "@/components/PageHeroSection";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Track Services por WhatsApp, e-mail ou formulário de contato."
};

export default function ContatoPage() {
  return (
    <main id="content">
      <PageHeroSection
        eyebrow="Contato"
        title="Fale com a Track Services"
        description="A página de contato existe para fechar a conversa comercial de forma objetiva. O formulário já encaminha a solicitação para WhatsApp ou e-mail com contexto suficiente para resposta rápida."
        highlights={[
          "WhatsApp comercial",
          "Diagnóstico gratuito",
          "Resposta orientada ao escopo",
          "Atendimento no RJ"
        ]}
        primaryAction={{ label: "Enviar WhatsApp", href: "/contato#contato" }}
        secondaryAction={{ label: "Ver serviços", href: "/servicos" }}
      />

      <ContactSection />
    </main>
  );
}
