import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { PageHeroSection } from "@/components/PageHeroSection";

export const metadata: Metadata = {
  title: "Sobre",
  description: "História, missão, visão e valores da Track Services."
};

export default function SobrePage() {
  return (
    <main id="content">
      <PageHeroSection
        eyebrow="Empresa"
        title="A história da Track Services em uma tela dedicada"
        description="A página Sobre existe para contar quem somos, como pensamos e por que estruturamos a entrega da forma atual. O foco aqui é a trajetória da empresa e os argumentos que sustentam a conversa comercial."
        highlights={[
          "História da empresa",
          "Missão, visão e valores",
          "Atuação em todo o RJ",
          "Conversas comerciais objetivas"
        ]}
        primaryAction={{ label: "Falar com especialista", href: "/contato" }}
        secondaryAction={{ label: "Ver serviços", href: "/servicos" }}
      />

      <AboutSection />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="rounded bg-[linear-gradient(108deg,#E8621A_0%,#C04E10_100%)] px-6 py-8 text-white md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70">Próximo passo</div>
                <h2 className="font-[var(--font-barlow-condensed)] text-3xl font-extrabold tracking-tight md:text-4xl">
                  Se a história fizer sentido, a conversa vem depois
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
                  A página Sobre não deve competir com a home. Ela deve reforçar credibilidade e levar o visitante para a próxima ação.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contato" className="inline-flex min-h-[46px] items-center justify-center rounded bg-white px-5 text-sm font-bold uppercase tracking-[0.05em] text-[#C04E10] transition hover:bg-slate-100">
                  Falar no WhatsApp
                </Link>
                <Link href="/servicos" className="inline-flex min-h-[46px] items-center justify-center rounded border border-white/25 px-5 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:border-white/50 hover:bg-white/10">
                  Explorar serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
