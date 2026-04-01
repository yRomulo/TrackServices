"use client";

import Link from "next/link";
import { homeServiceModelHighlights, serviceDivisions } from "@/data/servicesCatalog";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-[1280px] px-[5%]">
        <div className="fd mb-10">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />Divisões de Serviço</div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Cada divisão leva para uma página específica</h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-slate-500">
            A home apresenta o modelo de atuação. A partir daqui, cada divisão tem sua própria tela com escopo, entregas, processo e chamadas para conversa.
          </p>
        </div>

        <div className="grid gap-[1.15rem] md:grid-cols-2 xl:grid-cols-3">
          {serviceDivisions.map((division) => (
            <article key={division.slug} className="fd group relative overflow-hidden rounded-[3px] border border-slate-200 bg-white p-[1.4rem] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-[#E8621A] hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]">
              <span className="absolute left-0 right-0 top-0 h-[3px] bg-slate-200 transition-colors duration-200 group-hover:bg-[#E8621A]" />
              <div className="mb-[0.8rem] text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#E8621A]">{division.navLabel}</div>
              <h3 className="font-[var(--font-barlow-condensed)] text-[1rem] font-bold leading-[1.2] text-slate-900">{division.title}</h3>
              <p className="mt-[0.45rem] text-[0.81rem] leading-[1.65] text-slate-500">{division.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/servicos/${division.slug}`} className="inline-flex items-center rounded bg-[#E8621A] px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.05em] text-white transition hover:bg-[#C04E10]">
                  Ver página
                </Link>
                <Link href="/contato" className="inline-flex items-center rounded border border-slate-300 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.05em] text-slate-700 transition hover:border-[#E8621A] hover:text-[#E8621A]">
                  Falar com especialista
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
