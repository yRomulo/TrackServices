import Link from "next/link";
import { trackServicesContact } from "@/data/contactData";

const footerServiceLinks = [
  { label: "Gestão de TIC", href: "/servicos/governanca" },
  { label: "Outsourcing de TI", href: "/servicos/governanca" },
  { label: "Projetos de TIC", href: "/servicos/projetos" },
  { label: "Data Center", href: "/servicos/projetos" },
  { label: "CFTV", href: "/servicos/seguranca" },
  { label: "Controle de Acesso", href: "/servicos/seguranca" },
  { label: "NOC 24/7", href: "/servicos/operacoes" },
  { label: "Suporte Técnico", href: "/servicos/operacoes" }
];

const footerCompanyLinks = [
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Cases de Sucesso", href: "/cases" },
  { label: "Portal do Cliente", href: "/portal" },
  { label: "Trabalhe Conosco", href: "/trabalhe" },
  { label: "Instagram", href: trackServicesContact.social.instagram },
  { label: "LinkedIn", href: trackServicesContact.social.linkedin }
];

const footerContactLinks = [
  { label: trackServicesContact.generalPhone.display, href: trackServicesContact.generalPhone.href },
  { label: trackServicesContact.commercialWhatsApp.display, href: trackServicesContact.commercialWhatsApp.href },
  { label: trackServicesContact.email, href: `mailto:${trackServicesContact.email}` },
  { label: "Acessar portal", href: "/portal" },
  { label: "Seja um instalador", href: trackServicesContact.careersWhatsApp.href }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-[5%] py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded bg-[#E8621A]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            </div>
            <span className="font-[var(--font-barlow-condensed)] text-[1.35rem] font-bold text-white">Track<span className="text-[#E8621A]">Services</span></span>
          </Link>
          <p className="mt-3 max-w-[250px] text-[0.82rem] leading-7">
            Desde 2014 conectando empresas de todo o estado do Rio de Janeiro a soluções completas em TI, segurança eletrônica e outsourcing.
          </p>

          <div className="mt-4 flex gap-[0.65rem]">
            <a href={trackServicesContact.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Track Services" className="flex h-8 w-8 items-center justify-center rounded-[3px] border border-white/10 text-slate-500 transition hover:border-[#E8621A] hover:bg-[#E8621A] hover:text-white"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
            <a href={trackServicesContact.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Track Services" className="flex h-8 w-8 items-center justify-center rounded-[3px] border border-white/10 text-slate-500 transition hover:border-[#E8621A] hover:bg-[#E8621A] hover:text-white"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
            <a href={trackServicesContact.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Track Services" className="flex h-8 w-8 items-center justify-center rounded-[3px] border border-white/10 text-slate-500 transition hover:border-[#E8621A] hover:bg-[#E8621A] hover:text-white"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg></a>
            <a href={trackServicesContact.commercialWhatsApp.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Track Services" className="flex h-8 w-8 items-center justify-center rounded-[3px] border border-white/10 text-slate-500 transition hover:border-[#E8621A] hover:bg-[#E8621A] hover:text-white"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg></a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.08em] text-white">Serviços</h4>
          <ul className="space-y-2 text-sm">
            {footerServiceLinks.map((link) => (
              <li key={link.label}><Link href={link.href} className="transition hover:text-[#E8621A]">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.08em] text-white">Empresa</h4>
          <ul className="space-y-2 text-sm">
            {footerCompanyLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="transition hover:text-[#E8621A]">{link.label}</Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#E8621A]">{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.08em] text-white">Contato</h4>
          <ul className="space-y-2 text-sm">
            {footerContactLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="transition hover:text-[#E8621A]">{link.label}</Link>
                ) : (
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="transition hover:text-[#E8621A]">{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-[5%] py-5">
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {currentYear} Track Services Informática. Todos os direitos reservados.</span>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidade" className="transition hover:text-[#E8621A]">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="transition hover:text-[#E8621A]">Termos de Uso</Link>
            <Link href="/lgpd" className="transition hover:text-[#E8621A]">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}