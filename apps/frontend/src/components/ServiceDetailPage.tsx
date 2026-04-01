import Link from "next/link";
import { buildWhatsAppUrl, trackServicesContact } from "@/data/contactData";
import { getServiceDivision, type ServiceDivision } from "@/data/servicesCatalog";

type ServiceDetailPageProps = {
  service: ServiceDivision;
};

const companyConversationUrl = (serviceTitle: string) =>
  buildWhatsAppUrl(
    trackServicesContact.commercialWhatsApp.phone,
    `Olá, gostaria de conversar com a Track Services sobre ${serviceTitle}.`
  );

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceDivision(slug))
    .filter((item): item is ServiceDivision => Boolean(item));

  return (
    <main id="content" className="bg-white">
      <section className="bg-[linear-gradient(108deg,#111827_55%,#1c0c02_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="mb-3 inline-flex items-center gap-2 rounded border border-[rgba(232,98,26,.38)] bg-[rgba(232,98,26,.15)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#E8621A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8621A]" />
            Serviços / {service.navLabel}
          </div>
          <h1 className="max-w-4xl font-[var(--font-barlow-condensed)] text-[clamp(2.4rem,4.8vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={companyConversationUrl(service.title)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center rounded bg-[#E8621A] px-6 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-[#C04E10]">
              Falar com especialista
            </Link>
            <Link href="/servicos" className="inline-flex min-h-[46px] items-center justify-center rounded border border-white/25 bg-white/5 px-6 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:border-[#E8621A] hover:bg-[rgba(232,98,26,.1)]">
              Ver todas as divisões
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />{service.audienceTitle}</div>
            <h2 className="font-[var(--font-barlow-condensed)] text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Quem mais se beneficia desta divisão</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.audience.map((item) => (
              <article key={item} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />{service.deliverablesTitle}</div>
            <h2 className="font-[var(--font-barlow-condensed)] text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">O que entregamos nesta frente</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.deliverables.map((item) => (
              <article key={item.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />{service.processTitle}</div>
            <h2 className="font-[var(--font-barlow-condensed)] text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Como a entrega acontece</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-5">
            {service.process.map((item, index) => (
              <article key={item.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#E8621A]">{index + 1}</div>
                <h3 className="mt-2 font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />{service.modelsTitle}</div>
            <h2 className="font-[var(--font-barlow-condensed)] text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Modelos de atuação disponíveis</h2>
          </div>
          <div className="grid gap-5 xl:grid-cols-3">
            {service.models.map((model) => (
              <article key={model.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">{model.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{model.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {model.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E8621A]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-[5%]">
          <div className="rounded bg-[linear-gradient(108deg,#E8621A_0%,#C04E10_100%)] px-6 py-8 text-white md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70">Próximo passo</div>
                <h2 className="font-[var(--font-barlow-condensed)] text-3xl font-extrabold tracking-tight md:text-4xl">{`Quer estruturar ${service.title.toLowerCase()} na sua empresa?`}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
                  A gente pode começar por um diagnóstico, uma conversa de escopo ou diretamente pela definição do modelo de atendimento.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href={companyConversationUrl(service.title)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center justify-center rounded bg-white px-5 text-sm font-bold uppercase tracking-[0.05em] text-[#C04E10] transition hover:bg-slate-100">
                  Falar no WhatsApp
                </Link>
                <Link href="/contato" className="inline-flex min-h-[46px] items-center justify-center rounded border border-white/25 px-5 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:border-white/50 hover:bg-white/10">
                  Ir para contato
                </Link>
              </div>
            </div>

            {relatedServices.length ? (
              <div className="mt-8 border-t border-white/15 pt-6">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-white/70">Divisões relacionadas</div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {relatedServices.map((related) => (
                    <Link key={related.slug} href={`/servicos/${related.slug}`} className="rounded border border-white/15 bg-white/10 p-4 transition hover:bg-white/15">
                      <div className="font-[var(--font-barlow-condensed)] text-lg font-bold text-white">{related.navLabel}</div>
                      <p className="mt-1 text-sm leading-6 text-white/80">{related.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}