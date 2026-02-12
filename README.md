
# Vitrine 360 Store - High Resilience

Este projeto foi configurado com **Vite** para garantir a melhor performance e resiliência no deploy da Vercel, eliminando dependências de CDN instáveis no carregamento inicial.

## Como Rodar Localmente
1. Certifique-se de ter o Node.js instalado.
2. No terminal, execute:
   ```bash
   npm install
   npm run dev
   ```

## Configuração para Deploy na Vercel
Ao importar o projeto no painel da Vercel, utilize as seguintes configurações:

- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Root Directory**: `./`

## Mudanças Técnicas Aplicadas
- **Remoção de Importmap**: O projeto agora usa módulos npm reais, o que impede a falha de resolução de módulos no navegador.
- **Vite Bundler**: Todos os arquivos `.tsx` e bibliotecas como `lucide-react` são empacotados em um bundle otimizado.
- **Loading Fallback**: O `index.html` contém um estilo CSS que exibe uma mensagem de carregamento enquanto o JavaScript não é totalmente processado, evitando a percepção de "tela branca".
