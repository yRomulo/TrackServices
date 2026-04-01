import type { Metadata } from "next";
import Link from "next/link";
import { trackServicesContact } from "@/components/sections/contactData";

export const metadata: Metadata = {
  title: "LGPD",
  description: "Informações sobre direitos do titular e tratamento de dados pessoais na Track Services."
};

const rights = [
  "Confirmar a existência de tratamento de dados pessoais.",
  "Solicitar acesso, correção e atualização de dados.",
  "Pedir anonimização, bloqueio ou eliminação quando aplicável.",
  "Revogar consentimentos quando o tratamento depender deles.",
  "Obter informações sobre compartilhamento e retenção dos dados."
];

export default function LgpdPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-4xl px-[5%]">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#E8621A]">Direitos do titular</p>
        <h1 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          LGPD
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          A Track Services respeita a legislação de proteção de dados e disponibiliza canais para atendimento de solicitações relacionadas à LGPD.
        </p>

        <div className="mt-10 rounded border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-[var(--font-barlow-condensed)] text-2xl font-bold text-slate-900">Seus direitos</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {rights.map((right) => (
              <li key={right} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E8621A]" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-900">Encarregado e contato</p>
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
