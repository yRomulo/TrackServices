"use client";

import { useEffect } from "react";
import { buildWhatsAppUrl, trackServicesContact } from "@/data/contactData";
import { homeServiceModelHighlights } from "@/data/servicesCatalog";
import { ServicesSection } from "@/components/ServicesSection";

const arrowIcon = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
  </svg>
);

const heroWhatsAppUrl = buildWhatsAppUrl(
  trackServicesContact.commercialWhatsApp.phone,
  "Olá, gostaria de conversar com a Track Services sobre governança, operações e projetos de TI."
);

export function HomePage() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const fadeElements = Array.from(document.querySelectorAll<HTMLElement>(".fd"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    fadeElements.forEach((el, index) => {
      el.classList.add("wl");
      el.style.transitionDelay = `${(index % 4) * 0.07}s`;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main id="content">
      <section id="home" className="relative flex min-h-[80vh] items-center overflow-hidden bg-[linear-gradient(108deg,#111827_55%,#1c0c02_100%)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=75')" }}
        />
        <div className="absolute bottom-0 left-0 top-0 w-[5px] bg-[#e8621a]" />
        <div className="relative z-[2] mx-auto grid w-full max-w-[1280px] items-center gap-16 px-[5%] py-20 lg:grid-cols-2">
          <div>
            <div className="mb-[1.1rem] inline-flex items-center gap-[0.45rem] rounded-[2px] border border-[rgba(232,98,26,.4)] bg-[rgba(232,98,26,.15)] px-3 py-[0.28rem] text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#e8621a]">
              <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-[#e8621a]" />
              Governança, operações e projetos para empresas do RJ
            </div>
            <h1 className="mb-[1.1rem] font-[var(--font-barlow-condensed)] text-[clamp(2.4rem,4.5vw,3.7rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Uma estrutura clara de
              <br />serviços de TI para
              <br /><em className="not-italic text-[#e8621a]">cada etapa da operação</em>
            </h1>
            <p className="mb-[1.8rem] max-w-[460px] text-base leading-7 text-slate-300">
              A Track Services organiza sua entrega em divisões distintas para que a home apresente o negócio, o menu leve o usuário para a tela certa e cada serviço tenha sua própria página.
            </p>
            <div className="flex flex-wrap gap-[0.85rem]">
              <a
                href="/servicos"
                className="inline-flex min-h-[46px] items-center justify-center gap-[0.45rem] whitespace-nowrap rounded-[3px] bg-[#e8621a] px-[1.8rem] font-[var(--font-barlow-condensed)] text-[0.9rem] font-bold uppercase tracking-[0.05em] text-white shadow-[0_4px_14px_rgba(232,98,26,.38)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#c04e10] hover:shadow-[0_8px_22px_rgba(232,98,26,.44)]"
              >
                Ver divisões de serviço {arrowIcon}
              </a>
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-[0.45rem] whitespace-nowrap rounded-[3px] border-2 border-white/30 bg-transparent px-[1.8rem] font-[var(--font-barlow-condensed)] text-[0.9rem] font-bold uppercase tracking-[0.05em] text-white transition duration-200 hover:border-[#e8621a] hover:bg-[rgba(232,98,26,.1)]"
              >
                Falar com especialista
              </a>
              <a
                href="/sobre"
                className="inline-flex min-h-[46px] items-center justify-center gap-[0.45rem] whitespace-nowrap rounded-[3px] border border-white/20 bg-white/5 px-[1.8rem] font-[var(--font-barlow-condensed)] text-[0.9rem] font-bold uppercase tracking-[0.05em] text-white transition duration-200 hover:border-white/40 hover:bg-white/10"
              >
                Conhecer a empresa
              </a>
            </div>

            <div className="mt-10 flex gap-0 border-t border-white/10 pt-8">
              <div className="flex-1 border-r border-white/10 pr-8">
                <div className="font-[var(--font-barlow-condensed)] text-[2.2rem] font-extrabold leading-none text-[#e8621a]">5</div>
                <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-slate-400">Divisões de atuação</div>
              </div>
              <div className="flex-1 border-r border-white/10 px-8">
                <div className="font-[var(--font-barlow-condensed)] text-[2.2rem] font-extrabold leading-none text-[#e8621a]">1</div>
                <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-slate-400">Ponto focal por serviço</div>
              </div>
              <div className="flex-1 pl-8">
                <div className="font-[var(--font-barlow-condensed)] text-[2.2rem] font-extrabold leading-none text-[#e8621a]">24/7</div>
                <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-slate-400">Operação contínua</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-[7px] bg-white p-[1.4rem] shadow-[0_20px_55px_rgba(0,0,0,.4)] before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:rounded-t-[7px] before:bg-[#e8621a] before:content-['']">
              <div className="mb-[0.85rem] flex items-center justify-between font-[var(--font-barlow-condensed)] text-[0.7rem] font-bold uppercase tracking-[0.08em] text-slate-500">
                Modelo de entrega Track Services <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8621a]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {homeServiceModelHighlights.map((item) => (
                  <div key={item.slug} className="rounded-[5px] border border-slate-200 bg-slate-50 p-4">
                    <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#e8621a]">{item.label}</div>
                    <div className="mt-1 font-[var(--font-barlow-condensed)] text-[1rem] font-bold text-slate-900">{item.title}</div>
                    <p className="mt-1 text-[0.78rem] leading-6 text-slate-500">{item.summary}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[5px] border border-dashed border-slate-300 bg-white px-4 py-3 text-[0.78rem] leading-6 text-slate-600">
                Cada divisão possui uma página própria para que o conteúdo não se misture e o header leve diretamente à informação certa.
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
    </main>
  );
}

export default function HomeRoute() {
  return <HomePage />;
}