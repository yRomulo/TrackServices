export function PortalSection() {
  return (
    <section id="portal" className="bg-gradient-to-r from-[#E8621A] to-[#C04E10] py-20">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-[5%] lg:grid-cols-2 lg:items-center">
        <div className="fd">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70"><span className="h-[3px] w-7 rounded bg-white/60" />Exclusivo para clientes</div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold leading-tight text-white md:text-5xl">Portal do Cliente Track Services</h2>
          <p className="mt-4 text-[0.96rem] leading-7 text-white/85">Sua empresa parceira tem acesso a um portal dedicado com visibilidade total sobre os serviços.</p>
          <ul className="mt-5 space-y-2 text-sm text-white/90">
            {[
              "Abertura e acompanhamento de chamados em tempo real",
              "Relatórios de desempenho e SLA mensais",
              "Status dos projetos em andamento",
              "Histórico completo de atendimentos",
              "Dashboards integrados aos seus sistemas",
              "Notificações por e-mail e WhatsApp"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40 bg-white/20 text-[10px]">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="fd rounded bg-white p-7 shadow-2xl">
          <div className="font-[var(--font-barlow-condensed)] text-xl font-bold text-slate-900">Acessar o portal</div>
          <div className="mb-5 text-xs text-slate-500">Área exclusiva para empresas parceiras</div>
          <label className="mb-1 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">E-mail corporativo</label>
          <input type="email" placeholder="voce@empresa.com.br" className="mb-3 w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" />
          <label className="mb-1 block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-500">Senha</label>
          <input type="password" placeholder="••••••••" className="mb-4 w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" />
          <button className="w-full rounded bg-[#E8621A] py-3 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-[#C04E10]" type="button">Entrar no portal -&gt;</button>
        </div>
      </div>
    </section>
  );
}
