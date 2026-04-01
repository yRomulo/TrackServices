"use client";

import { useState, type FormEvent } from "react";
import { buildContactMessage, buildMailtoUrl, buildWhatsAppUrl, trackServicesContact } from "@/data/contactData";

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

const serviceOptions = [
  "Gestão de TIC",
  "Consultoria de TIC",
  "Outsourcing de TI",
  "Projetos de Infraestrutura",
  "Data Center e Servidores",
  "Suporte Técnico",
  "NOC 24/7",
  "CFTV",
  "Controle de Acesso",
  "Assistência Técnica",
  "Venda de Equipamentos",
  "Outro"
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = buildContactMessage(formData);
    const whatsappUrl = buildWhatsAppUrl(trackServicesContact.commercialWhatsApp.phone, message);

    setStatusMessage("Abrindo o WhatsApp com sua solicitação preenchida.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailFallback = () => {
    const subject = `Novo contato do site - ${formData.company || formData.name || "Track Services"}`;
    const body = buildContactMessage(formData);

    setStatusMessage("Abrindo o seu cliente de e-mail com a solicitação preenchida.");
    window.location.href = buildMailtoUrl(subject, body);
  };

  return (
    <section id="contato" className="bg-white py-20" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-[1280px] px-[5%]">
        <div className="fd mb-10">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E8621A]"><span className="h-[3px] w-7 rounded bg-[#E8621A]" />Fale Conosco</div>
          <h2 id="contact-title" className="font-[var(--font-barlow-condensed)] text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Vamos conversar sobre o seu projeto</h2>
          <p className="mt-3 text-slate-500">Diagnóstico gratuito, sem compromisso. Resposta em até 2 horas úteis.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="fd space-y-3">
            <a href={trackServicesContact.generalPhone.href} className="flex items-start gap-3 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-slate-50 p-4 transition hover:border-[#E8621A] hover:bg-white">
              <span className="text-lg">📞</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#E8621A]">Corporativo</div>
                <div className="text-sm font-semibold text-slate-900">{trackServicesContact.generalPhone.display}</div>
              </div>
            </a>
            <a href={trackServicesContact.commercialWhatsApp.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-slate-50 p-4 transition hover:border-[#E8621A] hover:bg-white" aria-label="Abrir conversa comercial no WhatsApp">
              <span className="text-lg">📱</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#E8621A]">Comercial - WhatsApp</div>
                <div className="text-sm font-semibold text-slate-900">{trackServicesContact.commercialWhatsApp.display}</div>
              </div>
            </a>
            <a href={`mailto:${trackServicesContact.email}`} className="flex items-start gap-3 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-slate-50 p-4 transition hover:border-[#E8621A] hover:bg-white">
              <span className="text-lg">✉️</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#E8621A]">E-mail</div>
                <div className="text-sm font-semibold text-slate-900">{trackServicesContact.email}</div>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-slate-50 p-4">
              <span className="text-lg">📍</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#E8621A]">Área de atendimento</div>
                <div className="text-sm font-semibold text-slate-900">Todo o estado do Rio de Janeiro</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-r border border-slate-200 border-l-4 border-l-[#E8621A] bg-slate-50 p-4">
              <span className="text-lg">🕐</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#E8621A]">Horário comercial</div>
                <div className="text-sm font-semibold text-slate-900">Seg-Sex - NOC 24/7 para contratos</div>
              </div>
            </div>
          </div>

          <form className="fd space-y-4" onSubmit={handleWhatsAppSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Nome
                <input
                  className="mt-1 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100"
                  type="text"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Empresa
                <input
                  className="mt-1 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100"
                  type="text"
                  value={formData.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder="Nome da empresa"
                  required
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                E-mail corporativo
                <input
                  className="mt-1 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="voce@empresa.com.br"
                  required
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                WhatsApp
                <input
                  className="mt-1 w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="(22) 9xxxx-xxxx"
                  required
                />
              </label>
            </div>
            <label className="block text-sm font-semibold text-slate-700">
              Serviço de interesse
              <select
                className="mt-1 w-full rounded border border-slate-300 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100"
                value={formData.service}
                onChange={(event) => updateField("service", event.target.value)}
                required
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Mensagem
              <textarea
                className="mt-1 min-h-[120px] w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#E8621A] focus:ring-2 focus:ring-orange-100"
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Descreva seu desafio ou necessidade..."
                required
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded bg-[#E8621A] px-6 text-sm font-bold uppercase tracking-[0.05em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#C04E10]">
                Enviar por WhatsApp
              </button>
              <button type="button" onClick={handleEmailFallback} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded border border-slate-300 bg-white px-6 text-sm font-bold uppercase tracking-[0.05em] text-slate-700 transition hover:border-[#E8621A] hover:text-[#E8621A]">
                Enviar por e-mail
              </button>
            </div>

            <p className="min-h-5 text-sm text-slate-500" aria-live="polite" role="status">
              {statusMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}