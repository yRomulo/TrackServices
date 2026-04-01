import type { Metadata } from "next";
import Link from "next/link";
import { trackServicesContact } from "@/data/contactData";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Veja como a Track Services trata dados pessoais coletados pelo site e pelos canais de contato."
};

const topics = [
  {
    title: "Dados coletados",
    text: "Nome, empresa, e-mail, telefone e mensagens enviadas pelos formulários de contato, além de dados técnicos de navegação essenciais para operação e segurança."
  },
  {
    title: "Uso das informações",
    text: "Os dados são usados para responder solicitações, prestar serviços, melhorar a experiência do site e cumprir obrigações legais ou contratuais."
  },
  {
    title: "Compartilhamento",
    text: "Não vendemos dados pessoais. O compartilhamento ocorre apenas com parceiros operacionais quando necessário para atendimento, infraestrutura ou obrigação legal."
  },
  {
    title: "Direitos do titular",
    text: "Você pode solicitar acesso, correção, eliminação e esclarecimentos sobre o tratamento de dados pelos canais oficiais da empresa."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main id="content" className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-4xl px-[5%]">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#E8621A]">LGPD e Privacidade</p>
        <h1 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Esta página resume como a Track Services coleta e usa dados pessoais quando você entra em contato pelo site,
          pelo WhatsApp ou por e-mail.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">{topic.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{topic.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-900">Canal de contato</p>
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
