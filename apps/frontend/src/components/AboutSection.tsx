export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-[1280px] gap-16 px-[5%] lg:grid-cols-2 lg:items-center">
        <div className="fd relative overflow-hidden rounded-sm shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
            alt="Equipe Track Services em reunião corporativa"
            loading="lazy"
            className="h-[460px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </div>

        <div className="fd">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]">
            <span className="h-[3px] w-7 rounded bg-[#E8621A]" />
            Sobre a Track Services
          </div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Expertise e excelência em tecnologia desde 2014</h2>
          <span className="my-5 block h-1 w-12 rounded bg-[#E8621A]" />
          <div className="space-y-3 text-[0.96rem] leading-7 text-slate-700">
            <p>Fundada em 2014, a Track Services é especializada em prover soluções de tecnologia da informação aos nossos clientes em diversos segmentos.</p>
            <p>Estamos empenhados em oferecer qualidade excepcional em todos os aspectos, com inovação, integridade e colaboração.</p>
            <p>Atuamos em todo o estado do Rio de Janeiro com infraestrutura de TI, segurança eletrônica, suporte técnico e outsourcing.</p>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <article className="rounded-b-sm border border-slate-200 border-t-[3px] border-t-[#E8621A] p-4">
              <h4 className="font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.06em] text-[#E8621A]">Missão</h4>
              <p className="mt-2 text-xs leading-6 text-slate-500">Suprir a demanda do mercado em TI em todo o RJ, conquistando e mantendo a confiança.</p>
            </article>
            <article className="rounded-b-sm border border-slate-200 border-t-[3px] border-t-[#E8621A] p-4">
              <h4 className="font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.06em] text-[#E8621A]">Visão</h4>
              <p className="mt-2 text-xs leading-6 text-slate-500">Viabilizar serviços contínuos e implementar projetos de infraestrutura com alta qualidade.</p>
            </article>
            <article className="rounded-b-sm border border-slate-200 border-t-[3px] border-t-[#E8621A] p-4">
              <h4 className="font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.06em] text-[#E8621A]">Valores</h4>
              <p className="mt-2 text-xs leading-6 text-slate-500">Ética, integridade, honestidade e respeito a clientes, parceiros e colaboradores.</p>
            </article>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Infraestrutura TI",
              "NOC 24/7",
              "Outsourcing",
              "CFTV",
              "Data Center",
              "Segurança Eletrônica",
              "Offshore"
            ].map((tag) => (
              <span key={tag} className="rounded border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
