export type ServiceTabId = "gestao" | "infra" | "seg" | "noc" | "com";

export type ServiceTab = {
  id: ServiceTabId;
  label: string;
  title: string;
  subtitle: string;
  cards: Array<{ icon: string; title: string; text: string; badge?: string }>;
};

export const serviceTabs: ServiceTab[] = [
  {
    id: "gestao",
    label: "Gestão e Governança",
    title: "Gestão e Governança de TI",
    subtitle: "Gerenciamento estratégico e operacional da tecnologia da sua empresa.",
    cards: [
      { icon: "🖥️", title: "Gestão de TIC", text: "Gerenciamento completo da tecnologia da informação." },
      { icon: "🤝", title: "Consultoria de TIC", text: "Diagnóstico e planejamento estratégico de TI." },
      { icon: "👥", title: "Outsourcing de TI", text: "Terceirize sua equipe de TI com profissionais dedicados." },
      { icon: "🌍", title: "Serviços Offshore", text: "Serviços de TI executados remotamente com equipe especializada.", badge: "Remoto" }
    ]
  },
  {
    id: "infra",
    label: "Infraestrutura e Projetos",
    title: "Infraestrutura e Projetos de TIC",
    subtitle: "Implantação e manutenção de ambientes físicos e virtuais.",
    cards: [
      { icon: "🌐", title: "Projetos de TIC", text: "Infraestrutura de redes e cabeamento estruturado." },
      { icon: "🗄️", title: "Data Center e Servidores", text: "Implantação e manutenção de data centers e servidores." },
      { icon: "☁️", title: "Cloud e Backup", text: "Migração para nuvem e recuperação de desastres.", badge: "Cloud-ready" }
    ]
  },
  {
    id: "seg",
    label: "Segurança Eletrônica",
    title: "Segurança Eletrônica",
    subtitle: "Proteção física e lógica com tecnologia de ponta.",
    cards: [
      { icon: "📷", title: "CFTV", text: "Instalação e gestão de câmeras de segurança." },
      { icon: "🔐", title: "Controle de Acesso", text: "Sistemas de controle de acesso físico." },
      { icon: "🛡️", title: "Segurança da Informação", text: "Firewall e proteção contra ameaças digitais." }
    ]
  },
  {
    id: "noc",
    label: "Suporte e NOC",
    title: "Suporte e NOC",
    subtitle: "Atendimento técnico ágil e monitoramento proativo 24 horas.",
    cards: [
      { icon: "🛠️", title: "Suporte Técnico", text: "Atendimento ágil para hardware, software e redes." },
      { icon: "📡", title: "NOC - Network Operation Center", text: "Monitoramento proativo 24/7 para sua operação.", badge: "24/7" }
    ]
  },
  {
    id: "com",
    label: "Comercial",
    title: "Comercial",
    subtitle: "Equipamentos, manutenção e venda com suporte técnico.",
    cards: [
      { icon: "🔧", title: "Assistência Técnica", text: "Manutenção corretiva e preventiva com laudo técnico." },
      { icon: "🖨️", title: "Venda de Equipamentos", text: "Nobreaks, notebooks, desktops e equipamentos de rede." }
    ]
  }
];
