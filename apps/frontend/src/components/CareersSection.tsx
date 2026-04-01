import type { ReactNode } from "react";
import { buildWhatsAppUrl, trackServicesContact } from "@/data/contactData";

type CareersSectionProps = {
  arrowIcon: ReactNode;
};

const careersMessage = "Olá, gostaria de enviar meu currículo e participar do processo seletivo da Track Services.";

export function CareersSection({ arrowIcon }: CareersSectionProps) {
  return (
    <section id="trabalhe" className="border-t-4 border-t-[#E8621A] bg-slate-100 py-20">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-[5%] lg:grid-cols-2">
        <div className="fd">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />Trabalhe Conosco</div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Faça parte do nosso time</h2>
          <span className="my-5 block h-1 w-12 rounded bg-[#E8621A]" />
          <p className="text-slate-600">A Track Services está sempre em busca de profissionais apaixonados por tecnologia.</p>
          <a
            href={buildWhatsAppUrl(trackServicesContact.careersWhatsApp.phone, careersMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar currículo pelo WhatsApp"
            className="mt-6 inline-flex min-h-[46px] items-center gap-2 rounded bg-[#E8621A] px-6 text-sm font-bold uppercase tracking-[0.05em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#C04E10]"
          >
            Enviar currículo pelo WhatsApp {arrowIcon}
          </a>
        </div>
        <div className="fd space-y-3">
          {[
            ["Técnico de TI - Suporte N1/N2", "Presencial - Macaé / RJ", "Aberta"],
            ["Analista de Infraestrutura", "Presencial - Região dos Lagos / RJ", "Aberta"],
            ["Instalador de CFTV e Redes", "Campo - Todo o estado do RJ", "Aberta"],
            ["Analista de NOC", "Remoto / Presencial - RJ", "Banco de Talentos"]
          ].map(([title, info, badge]) => (
            <article key={title} className="flex items-center justify-between gap-4 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-white p-4">
              <div>
                <h3 className="font-[var(--font-barlow-condensed)] text-lg font-bold text-slate-900">{title}</h3>
                <p className="text-xs text-slate-500">{info}</p>
              </div>
              <span className={`rounded px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] ${badge === "Banco de Talentos" ? "border border-emerald-200 bg-emerald-100 text-emerald-800" : "border border-orange-200 bg-orange-50 text-orange-700"}`}>{badge}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}