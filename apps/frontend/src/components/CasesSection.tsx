export function CasesSection() {
  return (
    <section id="cases" className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-[5%]">
        <div className="fd mb-10">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />Cases de Sucesso</div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Projetos que falam por nós</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["⚓", "Infraestrutura - Óleo e Gás", "Projeto Porto do Açu", "Implantação de infraestrutura de TI completa no complexo portuário."],
            ["🛢️", "Suporte - Energia", "Projeto Petrobras", "Suporte técnico especializado e gestão de ativos de TI."],
            ["🔌", "Segurança - Offshore", "Embarque Perenco", "Recertificação completa de cabos e infraestrutura de rede."],
            ["🎬", "Audiovisual - Projetos Especiais", "Montagem de Sala de Cinema", "Projeto completo de sala de cinema corporativa."]
          ].map(([emoji, tag, title, text]) => (
            <article key={title} className="fd overflow-hidden rounded border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-5xl">{emoji}</div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E8621A]">{tag}</p>
                <h3 className="mt-2 font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                <a href="#contato" className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.04em] text-[#E8621A] transition hover:gap-2">Saiba mais -&gt;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
