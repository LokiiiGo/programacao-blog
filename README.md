## Blog de Programação

### 1. Visão geral
Este projeto foi desenvolvido como um **blog educativo** com foco em iniciantes, reunindo conteúdos introdutórios de programação em um formato simples de navegar.

A aplicação é **100% front-end**, operando com páginas HTML e carregamento de conteúdo via JavaScript, sem necessidade de back-end.

### 2. Objetivo
- Facilitar o aprendizado de conceitos fundamentais (ex.: HTML, CSS, JavaScript e lógica de programação).
- Oferecer uma experiência direta: selecionar um tópico na home e visualizar o conteúdo detalhado na página de detalhes.

### 3. Escopo do trabalho (o que foi entregue)
- Página inicial com lista de tópicos.
- Página de detalhes para exibir:
  - Título do tópico
  - Texto explicativo
  - Imagem associada ao conteúdo
- Estrutura de estilos com CSS local e suporte a utilitários do Tailwind via CDN.
- Geração dinâmica da lista de posts (via JavaScript).
- Conteúdo dos tópicos armazenado em um array JavaScript.
- Header e footer com ano automático.

### 4. Funcionalidades
- **Navegação simples entre páginas**:
  - Home: `index.html`
  - Detalhes: `index-1.html?topico=ID`
- **Carregamento dinâmico do post**:
  - A página `index-1.html` lê o parâmetro `topico` da URL.
  - Procura o conteúdo correspondente no array de dados e renderiza o texto e imagem.
- **Conteúdos organizados por tópicos** (ID → conteúdo → imagem).

### 5. Stack (tecnologias)
- **HTML**: estrutura das páginas
- **CSS**: estilização do layout e temas
- **JavaScript**:
  - renderização da lista de tópicos
  - carregamento do conteúdo baseado no parâmetro `topico`
- **Tailwind CSS (via CDN)**: apoio a estilos utilitários
- **Google Fonts (Open Sans)**: fonte utilizada

### 6. Estrutura do projeto
- `index.html` (Home)
  - Exibe a lista de posts no elemento `#lista-posts`.
  - Carrega os scripts que montam a lista e o layout (header/footer).
- `index-1.html` (Detalhes)
  - Exibe o conteúdo de um post específico (título, conteúdo e imagem).
  - Lê o parâmetro `topico` na URL e renderiza o post correspondente.
- `js/`
  - `posts-data.js`: array com os posts (ID, título, conteúdo e imagem).
  - `lista-posts.js`: renderiza a lista de tópicos na Home.
  - `post.js`: lógica da página de detalhes (busca por `topico` e preenche `#post-titulo`, `#post-conteudo` e `#imagem-conteudo`).
  - `cabecalho.js` e `rodape.js`: constroem o header/footer (com ano automático, conforme implementado).
  - `titulo-conteudo.js`: auxilia/organiza a geração da lista (conforme seu projeto).
- `images/`
  - Imagens usadas como capa/ilustração dos posts.

> Observação: este projeto é front-end puro; o navegador executa os scripts diretamente (sem build/compilação).

### 7. Como executar (rodar localmente)

1. Abra o arquivo **`index.html`** no navegador.
   - Alternativa: usar qualquer servidor estático local (ex.: Live Server do VSCode).
2. A partir da home, selecione um tópico.
3. O navegador irá redirecionar para `index-1.html?topico=...` e carregar o conteúdo.

> - Exemplo via VSCode: botão **Go Live** (Live Server), depois acesse a URL gerada.

> Observação: abrir via navegador normalmente funciona por se tratar de arquivos estáticos. Se houver bloqueios por CORS/recursos em algum ambiente, use um servidor estático (ex.: extensão Live Server do VSCode).


### 8. Como a navegação funciona (técnico)
- Na home (`index.html`), o script cria links do tipo:
  - `index-1.html?topico=<id>`
- Na página de detalhes (`index-1.html`):
  - `conteudo.js` lê `window.location.search`.
  - Obtém o parâmetro `topico`.
  - Procura o objeto com `id === topico` no array `posts`.
  - Atualiza:
    - `#titulo-post` (texto do tópico)
    - `#conteudo-post` (texto HTML do tópico)
    - `#imagem-post` (quando existir)

### 9. Dependências externas
- **Tailwind CSS** via CDN: `https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4`
- **Google Fonts** para Open Sans
- Imagens locais em `images/`

### 10. Observações e próximos passos
- Melhorar SEO (tags `meta`, headings consistentes e URLs amigáveis).
- Separar dados de conteúdo para facilitar manutenção (ex.: JSON externo).
- Expandir o layout com categorias, busca e paginação.
- Adicionar testes visuais (responsividade) e validação do conteúdo.