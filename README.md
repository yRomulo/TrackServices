# Track Services Monorepo

Monorepo do portal corporativo com frontend da Fase 1 e base de backend em .NET 10, organizado em Next.js + Tailwind CSS.

## Estrutura

- `apps/frontend`: aplicação principal
- `apps/backend`: base da API e futura camada do portal
- `apps/frontend/src/app`: rotas da interface
- `apps/frontend/src/app/home`: módulo da home com o conteúdo exclusivo da tela inicial
- `apps/frontend/src/components`: blocos de tela reutilizáveis
- `apps/frontend/src/data`: dados compartilhados da aplicação
- `packages`: espaço para bibliotecas compartilhadas futuras

## Rotas principais

- `/`: home com apresentação e mapa de serviços
- `/sobre`: história e posicionamento da empresa
- `/servicos`: hub das divisões
- `/servicos/[slug]`: páginas de detalhe por divisão
- `/contato`: conversão comercial
- `/cases`, `/portal`, `/trabalhe`: telas auxiliares de apoio

## Contato Comercial

- O formulário usa EmailJS no front-end para enviar o contato.
- Configure `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` e `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.
- O template deve aceitar `from_name`, `company`, `email`, `phone`, `service`, `message`, `reply_to`, `to_email` e `site_name`.
- O destinatário do teste vem de `trackServicesContact.email`; se você trocar esse valor, o envio vai para o novo endereço.

## Como rodar

1. Instale dependências na raiz:
   - `npm install`
2. Rode o frontend:
   - `npm run dev:frontend`
3. Rode o backend, se tiver o SDK do .NET instalado:
   - `npm run dev:backend`
   - Neste workspace, o backend usa `Persistence:Provider=InMemory` no desenvolvimento porque o LocalDB não está disponível; altere para `SqlServer` quando for usar LocalDB ou Azure SQL.
4. Acesse:
   - `http://localhost:3000`
