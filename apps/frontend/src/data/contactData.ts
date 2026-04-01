export type ContactLead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
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
  email: "comercial@trackservices.com.br",
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
