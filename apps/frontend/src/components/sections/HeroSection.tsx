"use client";

type HeroStyledProps = {
  arrowIcon: React.ReactNode;
};

const badgeToneClass: Record<"open" | "prog" | "done", string> = {
  open: "bg-amber-100 text-amber-800",
  prog: "bg-blue-100 text-blue-800",
  done: "bg-emerald-100 text-emerald-800"
};

export function HeroSection({ arrowIcon }: HeroStyledProps) {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center overflow-hidden bg-[linear-gradient(108deg,#111827_55%,#1c0c02_100%)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=75')" }}
      />
      <div className="absolute bottom-0 left-0 top-0 w-[5px] bg-[#e8621a]" />
      <div className="relative z-[2] mx-auto grid w-full max-w-[1280px] items-center gap-16 px-[5%] py-20 lg:grid-cols-2">
        <div>
          <div className="mb-[1.1rem] inline-flex items-center gap-[0.45rem] rounded-[2px] border border-[rgba(232,98,26,.4)] bg-[rgba(232,98,26,.15)] px-3 py-[0.28rem] text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#e8621a]">
            <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-[#e8621a]" />
            Tecnologia para empresas - Estado do RJ
          </div>
          <h1 className="mb-[1.1rem] font-[var(--font-barlow-condensed)] text-[clamp(2.4rem,4.5vw,3.7rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
            Infraestrutura, suporte
            <br />e <em className="not-italic text-[#e8621a]">segurança eletrônica</em>
            <br />para o seu negócio
          </h1>
          <p className="mb-[1.8rem] max-w-[460px] text-base leading-7 text-slate-300">
            Desde 2014, a Track Services conecta empresas de todo o estado do Rio de
            Janeiro a soluções completas em TI - do suporte técnico ao NOC, passando por
            CFTV e controle de acesso.
          </p>
          <div className="flex flex-wrap gap-[0.85rem]">
            <a
              href="#contato"
              className="inline-flex min-h-[46px] items-center justify-center gap-[0.45rem] whitespace-nowrap rounded-[3px] bg-[#e8621a] px-[1.8rem] font-[var(--font-barlow-condensed)] text-[0.9rem] font-bold uppercase tracking-[0.05em] text-white shadow-[0_4px_14px_rgba(232,98,26,.38)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#c04e10] hover:shadow-[0_8px_22px_rgba(232,98,26,.44)]"
            >
              Solicitar diagnóstico gratuito {arrowIcon}
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-[46px] items-center justify-center gap-[0.45rem] whitespace-nowrap rounded-[3px] border-2 border-white/30 bg-transparent px-[1.8rem] font-[var(--font-barlow-condensed)] text-[0.9rem] font-bold uppercase tracking-[0.05em] text-white transition duration-200 hover:border-[#e8621a] hover:bg-[rgba(232,98,26,.1)]"
            >
              Nossos serviços
            </a>
          </div>

          <div className="mt-10 flex gap-0 border-t border-white/10 pt-8">
            <div className="flex-1 border-r border-white/10 pr-8">
              <div className="font-[var(--font-barlow-condensed)] text-[2.2rem] font-extrabold leading-none text-[#e8621a]">2014</div>
              <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-slate-400">Fundada</div>
            </div>
            <div className="flex-1 border-r border-white/10 px-8">
              <div className="font-[var(--font-barlow-condensed)] text-[2.2rem] font-extrabold leading-none text-[#e8621a]">+10</div>
              <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-slate-400">Anos de mercado</div>
            </div>
            <div className="flex-1 pl-8">
              <div className="font-[var(--font-barlow-condensed)] text-[2.2rem] font-extrabold leading-none text-[#e8621a]">24/7</div>
              <div className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-slate-400">NOC corporativo</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-[7px] bg-white p-[1.4rem] shadow-[0_20px_55px_rgba(0,0,0,.4)] before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:rounded-t-[7px] before:bg-[#e8621a] before:content-['']">
            <div className="mb-[0.9rem] flex items-center justify-between font-[var(--font-barlow-condensed)] text-[0.7rem] font-bold uppercase tracking-[0.08em] text-slate-500">
              Portal do Cliente - Track Services <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8621a]" />
            </div>
            <div className="mb-[0.9rem] grid grid-cols-3 gap-[0.65rem]">
              <div className="rounded-[5px] border border-slate-200 bg-slate-50 px-[0.6rem] py-[0.75rem] text-center">
                <div className="font-[var(--font-barlow-condensed)] text-[1.4rem] font-extrabold text-[#e8621a]">4</div>
                <div className="mt-[2px] text-[0.65rem] uppercase tracking-[0.05em] text-slate-500">Em aberto</div>
              </div>
              <div className="rounded-[5px] border border-slate-200 bg-slate-50 px-[0.6rem] py-[0.75rem] text-center">
                <div className="font-[var(--font-barlow-condensed)] text-[1.4rem] font-extrabold text-[#e8621a]">38</div>
                <div className="mt-[2px] text-[0.65rem] uppercase tracking-[0.05em] text-slate-500">Resolvidos</div>
              </div>
              <div className="rounded-[5px] border border-slate-200 bg-slate-50 px-[0.6rem] py-[0.75rem] text-center">
                <div className="font-[var(--font-barlow-condensed)] text-[1.4rem] font-extrabold text-[#e8621a]">99%</div>
                <div className="mt-[2px] text-[0.65rem] uppercase tracking-[0.05em] text-slate-500">SLA</div>
              </div>
            </div>

            <div className="mb-[0.45rem] flex items-center justify-between rounded-[5px] border border-slate-200 px-[0.7rem] py-[0.55rem]">
              <div>
                <div className="text-[0.78rem] font-semibold text-slate-700">Lentidão no servidor de arquivos</div>
                <div className="mt-px text-[0.68rem] text-slate-500">Aberto há 2h - Alta prioridade</div>
              </div>
              <span className={`whitespace-nowrap rounded-full px-[0.55rem] py-[0.18rem] text-[0.62rem] font-bold uppercase tracking-[0.04em] ${badgeToneClass.open}`}>
                Em aberto
              </span>
            </div>

            <div className="mb-[0.45rem] flex items-center justify-between rounded-[5px] border border-slate-200 px-[0.7rem] py-[0.55rem]">
              <div>
                <div className="text-[0.78rem] font-semibold text-slate-700">Instalação do novo ERP</div>
                <div className="mt-px text-[0.68rem] text-slate-500">Atualizado há 30min</div>
              </div>
              <span className={`whitespace-nowrap rounded-full px-[0.55rem] py-[0.18rem] text-[0.62rem] font-bold uppercase tracking-[0.04em] ${badgeToneClass.prog}`}>
                Em andamento
              </span>
            </div>

            <div className="mb-[0.45rem] flex items-center justify-between rounded-[5px] border border-slate-200 px-[0.7rem] py-[0.55rem]">
              <div>
                <div className="text-[0.78rem] font-semibold text-slate-700">Configuração VPN corporativa</div>
                <div className="mt-px text-[0.68rem] text-slate-500">Concluído ontem</div>
              </div>
              <span className={`whitespace-nowrap rounded-full px-[0.55rem] py-[0.18rem] text-[0.62rem] font-bold uppercase tracking-[0.04em] ${badgeToneClass.done}`}>
                Concluído
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
