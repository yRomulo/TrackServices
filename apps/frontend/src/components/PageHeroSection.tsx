import Link from "next/link";

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
};

type PageHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

export function PageHeroSection({ eyebrow, title, description, highlights, primaryAction, secondaryAction }: PageHeroSectionProps) {
  return (
    <section className="bg-[linear-gradient(108deg,#111827_55%,#1c0c02_100%)] py-16 text-white">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-[5%] lg:grid-cols-[1.25fr_.75fr] lg:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded border border-[rgba(232,98,26,.38)] bg-[rgba(232,98,26,.15)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#E8621A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8621A]" />
            {eyebrow}
          </div>
          <h1 className="font-[var(--font-barlow-condensed)] text-[clamp(2.4rem,4.8vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryAction.href} className="inline-flex min-h-[46px] items-center justify-center rounded bg-[#E8621A] px-6 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-[#C04E10]">
              {primaryAction.label}
            </Link>
            {secondaryAction ? (
              <Link href={secondaryAction.href} target={secondaryAction.external ? "_blank" : undefined} rel={secondaryAction.external ? "noopener noreferrer" : undefined} className="inline-flex min-h-[46px] items-center justify-center rounded border border-white/25 bg-white/5 px-6 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:border-[#E8621A] hover:bg-[rgba(232,98,26,.1)]">
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="rounded-[8px] border border-white/10 bg-white p-5 text-slate-900 shadow-[0_20px_55px_rgba(0,0,0,.35)]">
          <div className="mb-4 font-[var(--font-barlow-condensed)] text-[0.72rem] font-bold uppercase tracking-[0.1em] text-slate-500">
            Destaques
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}