# Track Services Monorepo

Frontend da Fase 1 com navegação por telas e subrotas, organizado em Next.js + Tailwind CSS.

## Estrutura

- `apps/frontend`: aplicação principal
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

## Como rodar

1. Instale dependências na raiz:
   - `npm install`
2. Rode o frontend:
   - `npm run dev:frontend`
3. Acesse:
   - `http://localhost:3000`
