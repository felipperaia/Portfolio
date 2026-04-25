# Portfólio — Felippe Raia

**Última atualização:** 25 de abril de 2026

Resumo
------
Site estático que apresenta o portfólio profissional de Felippe Raia: projetos, certificações, tecnologias, currículo e formas de contato. A aplicação é um site front‑end leve (HTML/CSS/JS) pensado para deploy estático (Netlify, GitHub Pages, etc.).

Visão geral técnica
-------------------
- Estrutura simples de arquivos: páginas estáticas e assets.
- Internacionalização (PT/EN) implementada via objeto `translations` em [src/main.js](src/main.js#L1).
- Tema claro/escuro controlado por `data-theme` e persistido em `localStorage` (chave `theme`). Veja [src/main.js](src/main.js#L1) e as variáveis CSS em [src/style.css](src/style.css#L1).
- Interações: menu mobile, alternância de idioma, alternância de tema, animações de entrada (IntersectionObserver), e formulário de contato que abre WhatsApp com mensagem pré‑preenchida.

Arquivos principais
-------------------
- [index.html](index.html#L1) — marcação principal (seções: hero, sobre, projetos, experiência, tecnologias, contato). Usa atributos `data-i18n` para textos traduzíveis.
- [src/main.js](src/main.js#L1) — lógica: traduções, `setLanguage()`, `theme` handling, mobile menu, IntersectionObserver (scroll reveal), e envio do formulário (abertura do link `wa.me`).
- [src/style.css](src/style.css#L1) — tema, tokens CSS (em `:root`), responsividade e componentes visuais.
- [public/curriculum_felippe.pdf](public/curriculum_felippe.pdf) — PDF do currículo (link de download no site).

Comportamento implementado (detalhado)
--------------------------------------
- Internacionalização
  - O arquivo [src/main.js](src/main.js#L1) contém o objeto `translations` com chaves `pt` e `en`.
  - Elementos HTML com `data-i18n="<key>"` recebem texto via `setLanguage(lang)`; a função trata `INPUT` e `TEXTAREA` definindo `placeholder` quando aplicável.
  - Exceção: a chave `about_p2` é tratada com `innerHTML` para preservar spans com destaque (classe `.highlight`).

- Tema (light/dark)
  - O estado do tema é armazenado em `localStorage` (`theme`) e aplicado ao atributo `data-theme` do `document.documentElement`.
  - Variáveis CSS estão em [src/style.css](src/style.css#L1). Alterando os valores em `:root` e em `[data-theme="light"]` ajusta todo o visual.

- Navegação móvel
  - O botão `#mobileMenuBtn` alterna a classe `open` em `#mobileMenu` para mostrar/ocultar o menu móvel.
  - A barra fixa adiciona a classe `scrolled` ao `nav` quando `window.scrollY > 50` para aplicar fundo e borda.

- Scroll reveal
  - Implementado com `IntersectionObserver`: elementos com `.reveal` recebem a classe `.visible` quando entram em viewport, ativando transições definidas no CSS.

- Formulário de contato
  - O `#contactForm` é interceptado pelo JavaScript. Ao enviar, a aplicação constrói uma mensagem formatada e abre o link do WhatsApp (`https://wa.me/...?text=...`) em nova aba. Não há backend — é um envio direto para o WhatsApp do número exibido.

Observações de UX/implementação
-------------------------------
- Strings e traduções: para alterar textos, edite apenas [src/main.js](src/main.js#L1) no objeto `translations` ou o conteúdo de `index.html` (para elementos não controlados por `data-i18n`).
- Destaques em texto (`<span class="highlight">`) são usados dentro de `about_p2` — atenção ao alterar essa chave já que o conteúdo é injetado com `innerHTML`.
- O currículo (PDF) é referenciado por caminhos absolutos relativos do site: `/public/curriculum_felippe.pdf` (link de download e botões sociais).
- Todos os links externos usam `target="_blank" rel="noopener"` em [index.html](index.html#L1).

Como executar localmente
------------------------
Este projeto é estático; duas opções simples:

- Abrir localmente

  - Abra `index.html` diretamente no navegador.

- Servidor HTTP simples (recomendado para testar rotas/links relativos):

  - Com Python 3 (porta 8000):

    ```bash
    python -m http.server 8000
    ```

  - Ou com Node (se preferir):

    ```bash
    npx serve .
    ```

Abra `http://localhost:8000` e teste o site.

Deploy
------
- Netlify: conectar o repositório ou arrastar a pasta build; publicar a raiz do projeto.
- GitHub Pages: configurar Pages para servir a branch `main` (diretório `root`).
- Qualquer serviço de hosting estático (Vercel, Surge, S3 + CloudFront) servirá sem alterações.

Recomendações e próximos passos
------------------------------
- Acessibilidade: adicionar `aria-expanded` e `aria-controls` ao botão do menu móvel; adicionar labels ARIA quando necessário.
- Formulário: implementar uma integração serverless (Netlify Functions, AWS Lambda) ou Netlify Forms se quiser capturar mensagens sem depender do WhatsApp.
- Testes: adicionar checks básicos de HTML/CSS lint e CI para validar links externos e existência do `public/curriculum_felippe.pdf`.
- Otimização: comprimir o PDF (se necessário) e otimizar SVGs/ícones.
- SEO: adicionar Open Graph tags e favicon no `<head>` para melhorar compartilhamento.

Contribuindo
------------
1. Abra uma branch, faça alterações e envie um pull request.
2. Para mudanças de texto/translação, edite [src/main.js](src/main.js#L1) e rode testes manuais.
3. Para estilos, edite [src/style.css](src/style.css#L1) mantendo as variáveis em `:root` para consistência de temas.

Contato
-------
- GitHub: https://github.com/felipperaia
- LinkedIn: https://www.linkedin.com/in/felippe-adriel-232527163/
- E-mail: felippeadriel46@gmail.com
- WhatsApp: +55 81 99563-6586 (usado pelo formulário do site)

Licença
-------
Nenhuma licença explícita incluída no repositório. Recomenda-se adicionar um `LICENSE` (por exemplo MIT) se houver intenção de compartilhamento/permuta de código.

Notas finais
------------
Este README foi gerado após inspeção do código presente em [index.html](index.html#L1), [src/main.js](src/main.js#L1) e [src/style.css](src/style.css#L1). Se quiser, posso:

- ajustar o README para formato mais enxuto ou traduzir para inglês;
- adicionar um `LICENSE` (MIT) e criar um template de CONTRIBUTING.md;
- implementar melhorias apontadas (ex.: acessibilidade, captura de formulário).

Quer que eu adicione os dois arquivos ao repositório agora (README.md e .gitignore)?
