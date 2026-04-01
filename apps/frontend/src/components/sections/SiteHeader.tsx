"use client";

import { useRef, useState } from "react";
import { trackServicesContact } from "@/components/sections/contactData";

type SiteHeaderProps = {
  navElevated: boolean;
  onOpenServiceTab: (id: "gestao" | "infra" | "seg" | "noc" | "com") => void;
};

export function SiteHeader({ navElevated, onOpenServiceTab }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"sobre" | "servicos" | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const openMenu = (id: "sobre" | "servicos") => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setOpenDropdown(id);
  };

  const scheduleCloseMenu = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const goToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="top" className="sticky top-0 z-50">
      <div className="hidden h-[38px] items-center justify-between gap-4 bg-slate-900 px-[5%] text-xs font-medium text-slate-400 lg:flex">
        <div className="flex flex-wrap items-center gap-6">
          <a href={trackServicesContact.generalPhone.href} className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-500">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
            {trackServicesContact.generalPhone.display}
          </a>
          <a href={trackServicesContact.commercialWhatsApp.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-500">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
            {trackServicesContact.commercialWhatsApp.display}
          </a>
          <a href={`mailto:${trackServicesContact.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-500">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            {trackServicesContact.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={trackServicesContact.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Track Services" className="text-slate-500 transition-colors hover:text-orange-500"><svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
          <a href={trackServicesContact.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Track Services" className="text-slate-500 transition-colors hover:text-orange-500"><svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
          <a href={trackServicesContact.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Track Services" className="text-slate-500 transition-colors hover:text-orange-500"><svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg></a>
          <a href={trackServicesContact.careersWhatsApp.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp para recrutamento da Track Services" className="text-slate-500 transition-colors hover:text-orange-500"><svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></a>
        </div>
      </div>

      <nav
        className="flex h-[68px] items-center border-b border-slate-200 bg-white px-[5%]"
        style={{ boxShadow: navElevated ? "0 2px 18px rgba(0,0,0,.1)" : "0 1px 6px rgba(0,0,0,.06)" }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
          <a href="#home" className="flex items-center gap-2" onClick={() => { closeMobileMenu(); goToHome(); }}>
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#E8621A]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            </div>
            <span className="font-[var(--font-barlow-condensed)] text-[1.45rem] font-bold leading-none tracking-[-0.01em] text-slate-900">Track<span className="text-[#E8621A]">Services</span></span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            <li><a className="rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-slate-700 transition hover:bg-orange-50 hover:text-[#E8621A]" href="#home" onClick={goToHome}>Home</a></li>
            <li className="relative" onMouseEnter={() => openMenu("sobre")} onMouseLeave={scheduleCloseMenu}>
              <a className="flex items-center gap-1 rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-slate-700 transition hover:bg-orange-50 hover:text-[#E8621A]" href="#sobre" aria-haspopup="true" aria-expanded={openDropdown === "sobre"}>Sobre <svg viewBox="0 0 24 24" className="h-3 w-3 stroke-current" fill="none" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></a>
              <div className={`pointer-events-none absolute left-0 top-full z-50 min-w-[260px] pt-3 ${openDropdown === "sobre" ? "visible" : "invisible"}`}>
                <div className="pointer-events-auto rounded-b-md border border-slate-200 border-t-[3px] border-t-[#E8621A] bg-white shadow-xl transition" onMouseEnter={() => openMenu("sobre")} onMouseLeave={scheduleCloseMenu}>
                  <a className="flex items-start gap-2 border-l-2 border-transparent px-4 py-2 text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" href="#sobre" onClick={() => setOpenDropdown(null)}><span>🏢</span><span><span className="block text-sm font-semibold">Quem Somos</span><span className="block text-xs text-slate-500">Missão, visão e valores</span></span></a>
                  <a className="flex items-start gap-2 border-l-2 border-transparent px-4 py-2 text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" href="#nums" onClick={() => setOpenDropdown(null)}><span>📊</span><span><span className="block text-sm font-semibold">Números</span><span className="block text-xs text-slate-500">Nossa trajetória em dados</span></span></a>
                  <a className="flex items-start gap-2 border-l-2 border-transparent px-4 py-2 text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" href="#trabalhe" onClick={() => setOpenDropdown(null)}><span>👥</span><span><span className="block text-sm font-semibold">Trabalhe Conosco</span><span className="block text-xs text-slate-500">Faça parte do time</span></span></a>
                </div>
              </div>
            </li>
            <li className="relative" onMouseEnter={() => openMenu("servicos")} onMouseLeave={scheduleCloseMenu}>
              <a className="flex items-center gap-1 rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-slate-700 transition hover:bg-orange-50 hover:text-[#E8621A]" href="#servicos" aria-haspopup="true" aria-expanded={openDropdown === "servicos"}>Serviços <svg viewBox="0 0 24 24" className="h-3 w-3 stroke-current" fill="none" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></a>
              <div className={`pointer-events-none absolute left-0 top-full z-50 min-w-[300px] pt-3 ${openDropdown === "servicos" ? "visible" : "invisible"}`}>
                <div className="pointer-events-auto rounded-b-md border border-slate-200 border-t-[3px] border-t-[#E8621A] bg-white shadow-xl transition" onMouseEnter={() => openMenu("servicos")} onMouseLeave={scheduleCloseMenu}>
                  <button type="button" className="flex w-full items-start gap-2 border-l-2 border-transparent px-4 py-2 text-left text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" onClick={() => { onOpenServiceTab("gestao"); setOpenDropdown(null); }}><span>🖥️</span><span><span className="block text-sm font-semibold">Gestão e Governança de TI</span><span className="block text-xs text-slate-500">Gestão, consultoria e outsourcing</span></span></button>
                  <button type="button" className="flex w-full items-start gap-2 border-l-2 border-transparent px-4 py-2 text-left text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" onClick={() => { onOpenServiceTab("infra"); setOpenDropdown(null); }}><span>🌐</span><span><span className="block text-sm font-semibold">Infraestrutura e Projetos</span><span className="block text-xs text-slate-500">Redes, servidores e data center</span></span></button>
                  <button type="button" className="flex w-full items-start gap-2 border-l-2 border-transparent px-4 py-2 text-left text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" onClick={() => { onOpenServiceTab("seg"); setOpenDropdown(null); }}><span>🔐</span><span><span className="block text-sm font-semibold">Segurança Eletrônica</span><span className="block text-xs text-slate-500">CFTV e controle de acesso</span></span></button>
                  <button type="button" className="flex w-full items-start gap-2 border-l-2 border-transparent px-4 py-2 text-left text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" onClick={() => { onOpenServiceTab("noc"); setOpenDropdown(null); }}><span>🛠️</span><span><span className="block text-sm font-semibold">Suporte e NOC</span><span className="block text-xs text-slate-500">Suporte técnico e monitoramento</span></span></button>
                  <button type="button" className="flex w-full items-start gap-2 border-l-2 border-transparent px-4 py-2 text-left text-sm text-slate-700 hover:border-l-[#E8621A] hover:bg-orange-50 hover:text-[#E8621A]" onClick={() => { onOpenServiceTab("com"); setOpenDropdown(null); }}><span>🖨️</span><span><span className="block text-sm font-semibold">Comercial</span><span className="block text-xs text-slate-500">Equipamentos e assistência</span></span></button>
                </div>
              </div>
            </li>
            <li><a className="rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-slate-700 transition hover:bg-orange-50 hover:text-[#E8621A]" href="#cases">Cases</a></li>
            <li><a className="rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-slate-700 transition hover:bg-orange-50 hover:text-[#E8621A]" href="#portal">Portal</a></li>
            <li><a className="rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.04em] text-slate-700 transition hover:bg-orange-50 hover:text-[#E8621A]" href="#trabalhe">Trabalhe</a></li>
            <li><a className="rounded bg-[#E8621A] px-4 py-2 text-xs font-bold uppercase tracking-[0.04em] text-white shadow-md transition hover:bg-[#C04E10]" href="#contato">Fale Conosco</a></li>
          </ul>

          <button
            type="button"
            className="inline-flex flex-col gap-1 md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block h-0.5 w-5 rounded bg-slate-700" />
            <span className="block h-0.5 w-5 rounded bg-slate-700" />
            <span className="block h-0.5 w-5 rounded bg-slate-700" />
          </button>
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-menu" className="fixed left-0 right-0 top-[68px] z-40 border-b-4 border-b-[#E8621A] bg-white px-5 py-4 shadow-xl md:hidden">
            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              <a href="#home" onClick={() => { closeMobileMenu(); goToHome(); }}>Home</a>
              <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
              <a href="#servicos" onClick={closeMobileMenu}>Serviços</a>
              <a href="#cases" onClick={closeMobileMenu}>Cases</a>
              <a href="#portal" onClick={closeMobileMenu}>Portal</a>
              <a href="#trabalhe" onClick={closeMobileMenu}>Trabalhe Conosco</a>
              <a href="#contato" onClick={closeMobileMenu}>Fale Conosco</a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}