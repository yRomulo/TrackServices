export function ContactSection() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-[5%]">
        <div className="fd mb-10">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />Fale Conosco</div>
          <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Vamos conversar sobre o seu projeto</h2>
          <p className="mt-3 text-slate-500">Diagnóstico gratuito, sem compromisso. Resposta em até 2 horas úteis.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="fd space-y-3">
            {[
              ["📞", "Corporativo", "(22) 3324-4773"],
              ["📱", "Comercial - WhatsApp", "(22) 99226-4840"],
              ["✉️", "E-mail", "comercial@trackservices.com.br"],
              ["📍", "Área de atendimento", "Todo o estado do Rio de Janeiro"],
              ["🕐", "Horário comercial", "Seg-Sex - NOC 24/7 para contratos"]
            ].map(([ico, label, value]) => (
              <div key={label} className="flex items-start gap-3 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-slate-50 p-4">
                <span className="text-lg">{ico}</span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#E8621A]">{label}</div>
                  <div className="text-sm font-semibold text-slate-900">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form className="fd space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" type="text" placeholder="Seu nome" />
              <input className="rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" type="text" placeholder="Empresa" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" type="email" placeholder="E-mail corporativo" />
              <input className="rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" type="tel" placeholder="WhatsApp" />
            </div>
            <select className="rounded border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" defaultValue="">
              <option value="" disabled>Serviço de interesse</option>
              <option>Gestão de TIC</option>
              <option>Consultoria de TIC</option>
              <option>Outsourcing de TI</option>
              <option>Projetos de Infraestrutura</option>
              <option>Data Center e Servidores</option>
              <option>Suporte Técnico</option>
              <option>NOC 24/7</option>
              <option>CFTV</option>
              <option>Controle de Acesso</option>
              <option>Assistência Técnica</option>
              <option>Venda de Equipamentos</option>
              <option>Outro</option>
            </select>
            <textarea className="min-h-[120px] w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100" placeholder="Descreva seu desafio ou necessidade..." />
            <button type="button" className="inline-flex min-h-[46px] items-center gap-2 rounded bg-[#E8621A] px-6 text-sm font-bold uppercase tracking-[0.05em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#C04E10]">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
