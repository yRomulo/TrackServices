"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  buildCommercialContactLinks,
  contactServiceOptions,
  trackServicesContact
} from "@/data/contactData";

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

type FollowUpLinks = {
  whatsappUrl: string;
  emailUrl: string;
};

type ValidationIssue = {
  field: keyof Omit<ContactFormState, "website">;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: ""
};

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? ""
} as const;

function validateContactLead(formData: ContactFormState): ValidationIssue | null {
  if (!formData.name.trim() || formData.name.trim().length < 2 || formData.name.trim().length > 120) {
    return { field: "name", message: "Informe um nome válido." };
  }

  if (!formData.company.trim() || formData.company.trim().length < 2 || formData.company.trim().length > 120) {
    return { field: "company", message: "Informe a empresa." };
  }

  if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()) || formData.email.trim().length > 254) {
    return { field: "email", message: "Informe um e-mail corporativo válido." };
  }

  const phoneDigits = formData.phone.replace(/\D/g, "");
  if (phoneDigits.length < 8 || phoneDigits.length > 20) {
    return { field: "phone", message: "Informe um número de WhatsApp válido." };
  }

  if (!contactServiceOptions.includes(formData.service as (typeof contactServiceOptions)[number])) {
    return { field: "service", message: "Selecione um serviço de interesse válido." };
  }

  if (!formData.message.trim() || formData.message.trim().length < 10 || formData.message.trim().length > 2000) {
    return { field: "message", message: "Descreva sua necessidade com mais detalhes." };
  }

  return null;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReference, setSubmissionReference] = useState<string | null>(null);
  const [submissionLinks, setSubmissionLinks] = useState<FollowUpLinks | null>(null);

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const submitContactLead = async () => {
    setIsSubmitting(true);
    setStatusMessage("");
    setSubmissionReference(null);
    setSubmissionLinks(null);

    const validationError = validateContactLead(formData);
    if (validationError) {
      setStatusMessage(validationError.message);
      setIsSubmitting(false);
      return;
    }

    const fallbackLinks = buildCommercialContactLinks(formData);

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setSubmissionLinks(fallbackLinks);
      setStatusMessage("EmailJS não está configurado. Use os canais diretos abaixo ou informe NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service.trim(),
          message: formData.message.trim(),
          to_email: trackServicesContact.email,
          reply_to: formData.email.trim(),
          site_name: "Track Services"
        },
        {
          publicKey: emailJsConfig.publicKey
        }
      );

      const reference = crypto.randomUUID();
      setSubmissionReference(reference);
      setSubmissionLinks(fallbackLinks);
      setStatusMessage(`Contato enviado com sucesso${reference ? ` • protocolo ${reference.slice(0, 8).toUpperCase()}` : ""}.`);
      setFormData(initialFormState);

      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não conseguimos registrar seu contato agora.";
      setStatusMessage(`${message} Você ainda pode continuar pelos canais diretos.`);
      setSubmissionLinks(fallbackLinks);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submitContactLead();
  };

  const handleEmailFallback = async () => {
    const fallbackLinks = buildCommercialContactLinks(formData);

    setSubmissionLinks(fallbackLinks);
    setStatusMessage("Abrindo o e-mail com os dados preenchidos.");
    window.location.href = fallbackLinks.emailUrl;
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
            <input
              className="hidden"
              type="text"
              name="website"
              value={formData.website}
              onChange={(event) => updateField("website", event.target.value)}
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
            />
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
                {contactServiceOptions.map((option) => (
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
              <button type="submit" disabled={isSubmitting} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded bg-[#E8621A] px-6 text-sm font-bold uppercase tracking-[0.05em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#C04E10] disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? "Enviando..." : "Enviar contato"}
              </button>
              <button type="button" disabled={isSubmitting} onClick={handleEmailFallback} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded border border-slate-300 bg-white px-6 text-sm font-bold uppercase tracking-[0.05em] text-slate-700 transition hover:border-[#E8621A] hover:text-[#E8621A] disabled:cursor-not-allowed disabled:opacity-70">
                Abrir e-mail manualmente
              </button>
            </div>

            {submissionLinks ? (
              <div className="rounded border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
                <div className="text-sm font-bold uppercase tracking-[0.08em] text-emerald-700">Contato registrado</div>
                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  {submissionReference ? `Protocolo ${submissionReference.slice(0, 8).toUpperCase()}. ` : ""}Escolha o próximo canal para continuar a conversa comercial.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={submissionLinks.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded bg-emerald-600 px-5 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-emerald-700"
                  >
                    Continuar no WhatsApp
                  </a>
                  <a
                    href={submissionLinks.emailUrl}
                    className="inline-flex min-h-[46px] items-center justify-center rounded border border-emerald-300 bg-white px-5 text-sm font-bold uppercase tracking-[0.05em] text-emerald-800 transition hover:border-emerald-400 hover:text-emerald-950"
                  >
                    Abrir e-mail
                  </a>
                </div>
              </div>
            ) : null}

            <p className="min-h-5 text-sm text-slate-500" aria-live="polite" role="status">
              {statusMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}