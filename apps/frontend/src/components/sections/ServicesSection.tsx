"use client";

import { useMemo } from "react";
import { serviceTabs, type ServiceTabId } from "@/components/sections/servicesData";

type ServicesSectionProps = {
  activeTab: ServiceTabId;
  onChangeTab: (id: ServiceTabId) => void;
};

export function ServicesSection({ activeTab, onChangeTab }: ServicesSectionProps) {
  const currentTab = useMemo(() => serviceTabs.find((t) => t.id === activeTab) ?? serviceTabs[0], [activeTab]);

  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-[1280px] px-[5%]">
        <div className="fd mb-10">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />Nossos Serviços</div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Soluções completas em tecnologia</h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-slate-500">Da gestão de TIC ao NOC, passando por segurança eletrônica e outsourcing.</p>
        </div>

        <div className="fd mb-9 flex flex-wrap gap-[0.4rem]">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              className={`rounded-[2px] border px-[0.9rem] py-[0.4rem] text-[0.75rem] font-bold uppercase tracking-[0.05em] transition ${
                activeTab === tab.id
                  ? "border-[#E8621A] bg-[#E8621A] text-white"
                  : "border-slate-300 bg-white text-slate-500 hover:border-[#E8621A] hover:bg-[#E8621A] hover:text-white"
              }`}
              onClick={() => onChangeTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="fd">
          <div className="mb-[0.4rem] flex items-center gap-[0.65rem] font-[var(--font-barlow-condensed)] text-[1.25rem] font-bold text-slate-900">
            {currentTab.title}
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <p className="mb-6 text-[0.88rem] text-slate-500">{currentTab.subtitle}</p>
          <div className="grid gap-[1.15rem] md:grid-cols-2 xl:grid-cols-3">
            {currentTab.cards.map((card) => (
              <article key={card.title} className="fd group relative overflow-hidden rounded-[3px] border border-slate-200 bg-white p-[1.4rem] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#E8621A] hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]">
                <span className="absolute left-0 right-0 top-0 h-[3px] bg-slate-200 transition-colors duration-200 group-hover:bg-[#E8621A]" />
                <span className="mb-[0.8rem] block text-[1.5rem]">{card.icon}</span>
                <h3 className="font-[var(--font-barlow-condensed)] text-[1rem] font-bold leading-[1.2] text-slate-900">{card.title}</h3>
                <p className="mt-[0.45rem] text-[0.81rem] leading-[1.65] text-slate-500">{card.text}</p>
                {card.badge ? <span className="mt-[0.65rem] inline-block rounded-full bg-orange-50 px-[0.55rem] py-[0.18rem] text-[0.65rem] font-bold uppercase tracking-[0.06em] text-orange-700">{card.badge}</span> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
