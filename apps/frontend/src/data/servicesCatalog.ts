export type ServiceCard = {
  title: string;
  text: string;
};

export type ServiceModel = {
  title: string;
  text: string;
  bullets: string[];
};

export type ServiceDivision = {
  slug: string;
  navLabel: string;
  title: string;
  summary: string;
  intro: string;
  audienceTitle: string;
  audience: string[];
  deliverablesTitle: string;
  deliverables: ServiceCard[];
  processTitle: string;
  process: ServiceCard[];
  modelsTitle: string;
  models: ServiceModel[];
  relatedSlugs: string[];
};

export const serviceDivisions: ServiceDivision[] = [
  {
    slug: "governanca",
    navLabel: "Governança",
    title: "Governança de TI e ITSM",
    summary: "Estruturamos processos, SLAs, métricas e responsabilidade única sobre a operação de TI.",
    intro:
      "Uma camada estratégica para empresas que precisam transformar a TI em operação previsível, com gestão unificada de fornecedores, serviços e prioridades.",
    audienceTitle: "Para quem é esta divisão",
    audience: [
      "Empresas SMB e Enterprise com múltiplos fornecedores de TI",
      "Organizações que precisam reduzir risco operacional",
      "Gestores e CIOs que buscam SLAs claros e métricas transparentes",
      "Negócios que querem foco no core business e não em coordenação de terceiros"
    ],
    deliverablesTitle: "O que entregamos",
    deliverables: [
      { title: "Definição de escopo", text: "Levantamento dos serviços, sistemas, processos e pontos de integração da TI." },
      { title: "Governança ITSM", text: "Processos, SLAs, comitês e métricas para dar governança à operação." },
      { title: "Gestão de serviços", text: "Ponto único de contato e coordenação de todos os fornecedores." },
      { title: "Relatórios gerenciais", text: "Indicadores, dashboards e relatórios periódicos para tomada de decisão." },
      { title: "Melhoria contínua", text: "Acompanhamento evolutivo com ajustes de processo e operação." },
      { title: "Responsabilidade única", text: "Menos ruído, menos repasse e mais previsibilidade para o cliente." }
    ],
    processTitle: "Como entregamos",
    process: [
      { title: "Diagnóstico", text: "Mapeamento do cenário atual, gaps e oportunidades de ganho rápido." },
      { title: "Desenho", text: "Estruturação do modelo ITSM, SLAs, papéis e fluxo de escalonamento." },
      { title: "Implementação", text: "Adoção dos processos e integração com a operação existente." },
      { title: "Operação assistida", text: "Acompanhamento próximo com ajustes finos de estabilidade." },
      { title: "Gestão contínua", text: "Monitoramento regular e melhoria contínua baseada em indicadores." }
    ],
    modelsTitle: "Modelos de atuação",
    models: [
      {
        title: "Gestão Completa",
        text: "Responsabilidade total sobre a governança de TI.",
        bullets: ["Coordenação de fornecedores", "SLAs definidos e monitorados", "Service desk e relatórios"]
      },
      {
        title: "Gestão Parcial",
        text: "Coordenação de áreas específicas e integração com o time interno.",
        bullets: ["Escopo segmentado", "SLAs customizados", "Suporte à tomada de decisão"]
      },
      {
        title: "Consultoria ITSM",
        text: "Estruturação de governança e capacitação para o time do cliente.",
        bullets: ["Diagnóstico e mapeamento", "Desenho de processos", "Acompanhamento da implementação"]
      }
    ],
    relatedSlugs: ["operacoes", "projetos"]
  },
  {
    slug: "operacoes",
    navLabel: "Operações",
    title: "Operações, Suporte e NOC",
    summary: "Monitoramento, service desk e resposta proativa para manter a operação disponível.",
    intro:
      "Uma divisão orientada à continuidade operacional, com atendimento ágil, monitoramento e tratamento estruturado de incidentes para reduzir impacto no negócio.",
    audienceTitle: "Para quem é esta divisão",
    audience: [
      "Empresas que precisam de suporte técnico ágil e recorrente",
      "Operações que exigem monitoramento 24/7",
      "Times que precisam de apoio em incidentes, mudanças e problemas",
      "Negócios que não podem depender de atendimento reativo"
    ],
    deliverablesTitle: "O que entregamos",
    deliverables: [
      { title: "Service desk", text: "Abertura, triagem e acompanhamento de chamados com rastreabilidade." },
      { title: "NOC", text: "Monitoramento proativo de ambientes críticos e escalonamento rápido." },
      { title: "Gestão de incidentes", text: "Resposta estruturada para reduzir impacto e tempo de indisponibilidade." },
      { title: "Gestão de mudanças", text: "Apoio a mudanças com menor risco e mais previsibilidade." },
      { title: "Dashboards", text: "Painéis com SLA, volume de chamados e indicadores operacionais." },
      { title: "Melhoria operacional", text: "Identificação de recorrências e ações corretivas de causa raiz." }
    ],
    processTitle: "Como entregamos",
    process: [
      { title: "Classificação", text: "Priorização por criticidade, impacto e urgência." },
      { title: "Monitoramento", text: "Acompanhamento constante de serviços, infraestrutura e alarmes." },
      { title: "Escalonamento", text: "Acionamento da equipe certa no tempo certo." },
      { title: "Resolução", text: "Tratamento da causa e validação com o cliente." },
      { title: "Post-mortem", text: "Registro de aprendizados e plano de prevenção." }
    ],
    modelsTitle: "Modelos de atuação",
    models: [
      {
        title: "Suporte Corporativo",
        text: "Atendimento em horário comercial com foco em produtividade.",
        bullets: ["Ponto único de contato", "Atendimento por SLA", "Relatórios periódicos"]
      },
      {
        title: "NOC 24/7",
        text: "Monitoramento permanente para ambientes críticos.",
        bullets: ["Vigilância contínua", "Escalonamento imediato", "Operação estendida"]
      },
      {
        title: "Squad Dedicado",
        text: "Equipe dedicada a operações com integração ao cliente.",
        bullets: ["Time fixo", "Conhecimento contextual", "Melhor previsibilidade"]
      }
    ],
    relatedSlugs: ["governanca", "projetos"]
  },
  {
    slug: "projetos",
    navLabel: "Projetos",
    title: "Projetos de Infraestrutura",
    summary: "Implantação de redes, data center, cloud e modernização de ambientes.",
    intro:
      "Planejamento, execução e documentação de projetos que elevam a infraestrutura do cliente com menor risco, prazos controlados e entregas claras.",
    audienceTitle: "Para quem é esta divisão",
    audience: [
      "Empresas que precisam modernizar a infraestrutura existente",
      "Projetos novos de rede, servidores ou data center",
      "Ambientes com migração para nuvem ou ampliação física",
      "Times que precisam de suporte técnico e documentação no handover"
    ],
    deliverablesTitle: "O que entregamos",
    deliverables: [
      { title: "Levantamento técnico", text: "Diagnóstico de ambiente, dependências e restrições de implantação." },
      { title: "Arquitetura", text: "Desenho da solução com foco em escalabilidade e disponibilidade." },
      { title: "Implantação", text: "Execução do projeto com controle de prazo, escopo e qualidade." },
      { title: "Data center e servidores", text: "Infraestrutura física e lógica para ambientes corporativos." },
      { title: "Cloud e backup", text: "Migração, proteção e recuperação com visão de continuidade." },
      { title: "Documentação", text: "Registro técnico e transferência para a operação do cliente." }
    ],
    processTitle: "Como entregamos",
    process: [
      { title: "Planejamento", text: "Escopo, cronograma e governança do projeto." },
      { title: "Execução", text: "Montagem, integração e validação dos componentes." },
      { title: "Testes", text: "Checagem de desempenho, segurança e continuidade." },
      { title: "Entrega", text: "Handover com documentação e alinhamento operacional." },
      { title: "Acompanhamento", text: "Suporte pós-implantação para estabilização." }
    ],
    modelsTitle: "Modelos de atuação",
    models: [
      {
        title: "Turnkey",
        text: "Projeto completo, do desenho à entrega final.",
        bullets: ["Escopo fechado", "Responsabilidade integrada", "Entrega padronizada"]
      },
      {
        title: "Evolutivo",
        text: "Implantação por fases com menor impacto operacional.",
        bullets: ["Roadmap progressivo", "Baixo risco", "Validação por etapas"]
      },
      {
        title: "Modernização",
        text: "Atualização de ambientes legados com foco em continuidade.",
        bullets: ["Menos obsolescência", "Mais disponibilidade", "Melhor desempenho"]
      }
    ],
    relatedSlugs: ["governanca", "operacoes", "seguranca"]
  },
  {
    slug: "seguranca",
    navLabel: "Segurança",
    title: "Segurança Eletrônica e Digital",
    summary: "CFTV, controle de acesso e segurança da informação integrados à operação.",
    intro:
      "Proteção física e lógica para ambientes corporativos que precisam unir vigilância, controle e resposta com eficiência.",
    audienceTitle: "Para quem é esta divisão",
    audience: [
      "Empresas que precisam reforçar perímetro e acesso físico",
      "Ambientes com CFTV e controle de acesso corporativo",
      "Operações que precisam reduzir exposição a riscos digitais",
      "Negócios que buscam integração entre segurança e TI"
    ],
    deliverablesTitle: "O que entregamos",
    deliverables: [
      { title: "CFTV", text: "Projeto, instalação e gestão de câmeras de segurança." },
      { title: "Controle de acesso", text: "Sistemas para entradas, saídas e áreas restritas." },
      { title: "Segurança da informação", text: "Proteção de rede, firewall e boas práticas de defesa." },
      { title: "Integração", text: "Convergência entre segurança física e digital." },
      { title: "Monitoramento", text: "Visão contínua para ambientes críticos." },
      { title: "Apoio técnico", text: "Manutenção e suporte recorrentes." }
    ],
    processTitle: "Como entregamos",
    process: [
      { title: "Diagnóstico", text: "Levantamento do ambiente e das vulnerabilidades." },
      { title: "Projeto", text: "Definição da solução e dos pontos de cobertura." },
      { title: "Implantação", text: "Instalação e integração com a operação existente." },
      { title: "Validação", text: "Testes de funcionalidade e cobertura." },
      { title: "Ajustes", text: "Acompanhamento contínuo e evolução do sistema." }
    ],
    modelsTitle: "Modelos de atuação",
    models: [
      {
        title: "Projeto completo",
        text: "Da consultoria à instalação e sustentação.",
        bullets: ["Escopo único", "Integração entre áreas", "Entrega assistida"]
      },
      {
        title: "Expansão incremental",
        text: "Ampliação da cobertura por etapas.",
        bullets: ["Investimento escalonado", "Menor impacto", "Adoção progressiva"]
      },
      {
        title: "Suporte recorrente",
        text: "Manutenção e evolução contínua do ambiente.",
        bullets: ["Monitoramento", "Ajustes recorrentes", "SLA de suporte"]
      }
    ],
    relatedSlugs: ["operacoes", "projetos"]
  },
  {
    slug: "comercial",
    navLabel: "Comercial",
    title: "Fornecimento, Manutenção e Assistência",
    summary: "Equipamentos, manutenção e suporte técnico para sustentar a operação do cliente.",
    intro:
      "Uma divisão voltada à venda, manutenção e suporte de hardware e equipamentos corporativos, com foco em continuidade e resposta rápida.",
    audienceTitle: "Para quem é esta divisão",
    audience: [
      "Empresas que precisam comprar ou renovar equipamentos",
      "Times que querem assistência técnica confiável",
      "Organizações com necessidade de manutenção preventiva e corretiva",
      "Ambientes que exigem laudos e suporte ágil"
    ],
    deliverablesTitle: "O que entregamos",
    deliverables: [
      { title: "Venda de equipamentos", text: "Nobreaks, notebooks, desktops e equipamentos de rede." },
      { title: "Assistência técnica", text: "Manutenção corretiva e preventiva com laudo técnico." },
      { title: "Suporte de campo", text: "Atendimento para instalação, troca e configuração." },
      { title: "Planejamento de renovação", text: "Apoio na substituição de ativos e atualização do parque." },
      { title: "Padronização", text: "Definição de base técnica para suporte e reposição." },
      { title: "Acompanhamento", text: "Retaguarda para o time de TI e operações." }
    ],
    processTitle: "Como entregamos",
    process: [
      { title: "Mapeamento", text: "Identificação de necessidade, estoque e base instalada." },
      { title: "Proposta", text: "Solução alinhada ao momento operacional do cliente." },
      { title: "Fornecimento", text: "Entrega e instalação dos itens contratados." },
      { title: "Validação", text: "Testes e confirmação de funcionamento." },
      { title: "Suporte", text: "Atuação recorrente para manutenção e evolução." }
    ],
    modelsTitle: "Modelos de atuação",
    models: [
      {
        title: "Compra direta",
        text: "Aquisição pontual de equipamentos e acessórios.",
        bullets: ["Compra sob demanda", "Entrega programada", "Especificação técnica"]
      },
      {
        title: "Manutenção recorrente",
        text: "Suporte preventivo e corretivo para ativos críticos.",
        bullets: ["Redução de downtime", "Laudos técnicos", "Atendimento técnico"]
      },
      {
        title: "Padronização do parque",
        text: "Base técnica alinhada ao suporte e à reposição.",
        bullets: ["Menos complexidade", "Melhor suporte", "Troca facilitada"]
      }
    ],
    relatedSlugs: ["operacoes", "projetos"]
  }
];

export function getServiceDivision(slug: string) {
  return serviceDivisions.find((division) => division.slug === slug);
}

export const homeServiceModelHighlights = serviceDivisions.map((division) => ({
  slug: division.slug,
  label: division.navLabel,
  title: division.title,
  summary: division.summary
}));