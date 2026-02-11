
# Vitrine 360 Store - High Resilience Setup

Este projeto foi construído para ser resiliente a falhas comuns de deploy e visualização em branco.

## Como Rodar Local
1. `npm install`
2. `npm run dev`

## Estrutura
- `/components`: Elementos visuais modulares.
- `/sections`: Seções completas da Landing Page.
- `/types.ts`: Tipagem forte para evitar erros de runtime.
- `App.tsx`: Gerenciador de rotas com Error Boundary global.

## Como configurar ENV na Vercel (Opcional para DB)
Atualmente o projeto utiliza `Local Storage` como persistência de segurança (fallback). Para produção real, configure as envs do **Vercel Postgres** e conecte o banco.

## Soluções Anti-Tela Branca
1. **Error Boundaries**: Se um componente de terceiro falhar, a página continua funcionando.
2. **Dynamic Imports**: Recursos pesados são carregados após a montagem do DOM.
3. **No External CDN**: Tailwind e Lucide são servidos diretamente do bundle.
4. **Hydration Safety**: Todos os estados iniciais são consistentes entre servidor e cliente.

## Admin Default
- **Email**: admin@vitrine.com
- **Senha**: admin123
