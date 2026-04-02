export type ContactLead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export const contactServiceOptions = [
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
] as const;

export type ContactServiceOption = (typeof contactServiceOptions)[number];

export type CommercialContactChannel = "whatsapp" | "email";

export type CommercialContactSubmission = ContactLead & {
  preferredChannel?: CommercialContactChannel;
  website?: string;
};

export const trackServicesContact = {
  generalPhone: {
    display: "(22) 3324-4773",
    href: "tel:+552233244773"
  },
  commercialWhatsApp: {
    display: "(22) 99226-4840",
    phone: "5522992264840",
    href: "https://wa.me/5522992264840"
  },
  careersWhatsApp: {
    display: "(22) 99732-1619",
    phone: "5522997321619",
    href: "https://wa.me/5522997321619"
  },
  email: "romulo.marroso@gmail.com",
  website: "https://trackservices.com.br",
  social: {
    instagram: "https://www.instagram.com/trackservices",
    facebook: "https://www.facebook.com/trackservices",
    linkedin: "https://br.linkedin.com/company/track-services-informatica"
  }
} as const;

export function buildWhatsAppUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string, recipient: string = trackServicesContact.email) {
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildContactMessage(lead: ContactLead) {
  return [
    "Olá, gostaria de um diagnóstico gratuito.",
    `Nome: ${lead.name || "Não informado"}`,
    `Empresa: ${lead.company || "Não informado"}`,
    `E-mail: ${lead.email || "Não informado"}`,
    `Telefone: ${lead.phone || "Não informado"}`,
    `Serviço de interesse: ${lead.service || "Não informado"}`,
    `Mensagem: ${lead.message || "Não informado"}`
  ].join("\n");
}

export function buildCommercialContactSubject(lead: Pick<ContactLead, "name" | "company">) {
  return `Novo contato do site - ${lead.company || lead.name || "Track Services"}`;
}

export function buildCommercialContactLinks(lead: ContactLead) {
  const message = buildContactMessage(lead);

  return {
    whatsappUrl: buildWhatsAppUrl(trackServicesContact.commercialWhatsApp.phone, message),
    emailUrl: buildMailtoUrl(buildCommercialContactSubject(lead), message)
  };
}
