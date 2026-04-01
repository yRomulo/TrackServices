import type { Metadata } from "next";
import Link from "next/link";
import { trackServicesContact } from "@/components/sections/contactData";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições gerais para uso do site da Track Services e de seus canais digitais."
};

const terms = [
  {
    title: "Uso permitido",
    text: "O site deve ser usado para fins lícitos, com informações verdadeiras e sem tentativa de comprometer a segurança ou disponibilidade da plataforma."
  },
  {
    title: "Conteúdo do site",
    text: "As descrições de serviços e cases têm caráter informativo. Detalhes comerciais e técnicos são confirmados apenas por proposta ou atendimento formal."
  },
  {
    title: "Responsabilidades",
    text: "A Track Services se esforça para manter as informações atualizadas, mas não garante que todo conteúdo esteja sempre completo ou sem erro."
  },
  {
    title: "Contato",
    text: "Em caso de dúvida sobre estes termos, use os canais oficiais para falar com a equipe comercial."
  }
];

export default function TermsPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-4xl px-[5%]">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#E8621A]">Site e uso responsável</p>
        <h1 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Termos de Uso
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Estes termos resumem as regras básicas para navegar no site e acionar os canais digitais da Track Services.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {terms.map((term) => (
            <article key={term.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">{term.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{term.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-900">Canais oficiais</p>
          <p className="mt-1">
            E-mail: <a className="text-[#E8621A] hover:underline" href={`mailto:${trackServicesContact.email}`}>{trackServicesContact.email}</a>
          </p>
          <p>
            WhatsApp: <a className="text-[#E8621A] hover:underline" href={trackServicesContact.commercialWhatsApp.href} target="_blank" rel="noopener noreferrer">{trackServicesContact.commercialWhatsApp.display}</a>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="inline-flex min-h-[44px] items-center rounded bg-[#E8621A] px-5 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-[#C04E10]">
            Voltar para a home
          </Link>
          <Link href="/#contato" className="inline-flex min-h-[44px] items-center rounded border border-slate-300 bg-white px-5 text-sm font-bold uppercase tracking-[0.05em] text-slate-700 transition hover:border-[#E8621A] hover:text-[#E8621A]">
            Falar com a equipe
          </Link>
        </div>
      </div>
    </main>
  );
}
