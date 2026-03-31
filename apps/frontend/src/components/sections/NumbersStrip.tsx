export function NumbersStrip() {
  return (
    <section id="nums" className="bg-slate-900 py-14">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-[5%] text-center sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["2014", "Fundada"],
          ["+10", "Anos de mercado"],
          ["RJ", "Todo o estado"],
          ["24/7", "NOC disponível"]
        ].map(([n, l]) => (
          <div key={n} className="border-r border-white/10 last:border-r-0">
            <div className="font-[var(--font-barlow-condensed)] text-5xl font-extrabold text-[#E8621A]">{n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.06em] text-slate-400">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
