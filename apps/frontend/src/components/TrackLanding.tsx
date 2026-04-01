"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { NumbersStrip } from "@/components/sections/NumbersStrip";
import { PortalSection } from "@/components/sections/PortalSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import type { ServiceTabId } from "@/components/sections/servicesData";
import { buildWhatsAppUrl, trackServicesContact } from "@/components/sections/contactData";

const arrowIcon = (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
  </svg>
);

const floatingWhatsappUrl = buildWhatsAppUrl(
  trackServicesContact.commercialWhatsApp.phone,
  "Olá, gostaria de falar com a Track Services sobre infraestrutura de TI, suporte ou segurança eletrônica."
);

export function TrackLanding() {
  const [activeTab, setActiveTab] = useState<ServiceTabId>("gestao");
  const [navElevated, setNavElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavElevated(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const fadeElements = Array.from(document.querySelectorAll<HTMLElement>(".fd"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    fadeElements.forEach((el, index) => {
      el.classList.add("wl");
      el.style.transitionDelay = `${(index % 4) * 0.07}s`;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const openServiceTab = (id: ServiceTabId) => {
    setActiveTab(id);
    setTimeout(() => {
      document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <SiteHeader navElevated={navElevated} onOpenServiceTab={openServiceTab} />

      <main id="content">
        <HeroSection arrowIcon={arrowIcon} />
        <AboutSection />
        <ServicesSection activeTab={activeTab} onChangeTab={setActiveTab} />
        <CasesSection />
        <NumbersStrip />
        <PortalSection />
        <CareersSection arrowIcon={arrowIcon} />
        <ContactSection />
        <Footer />

        <a href={floatingWhatsappUrl} target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="Falar com a Track Services no WhatsApp" className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/50 transition hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
        </a>
      </main>
    </>
  );
}
