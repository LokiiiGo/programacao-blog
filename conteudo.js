const conteudo = [
    {
        id: 0,
        tituloConteudo: 'HTML - A Estrutura esqueleto de um website',
        textoConteudo: `É uma linguagem de computador que define a estrutura e o significado de conteúdo da web. É o bloco de construção mais basica de um website
        e é utilizado para estruturar paginas web e o seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, numa lista com marcadores ou usando imagens e tabelas.
        <br>
        O HTML utiliza tags, também chamadas de elementos HTML, para informar ao navegador que tipo de estrutura está a ser construida. As tags são identificadas por um sinal de menor que (<) seguido
        pelo nome da tag é um sinal de maior que (>).
        <br>
        Foi criado por Tim Berners-Lee, um físico britânico, a primeira versão foi publicado em 1991. O World Wide Web Consortium (W3C) é reponsável por manter e desenvolver as especificações do HTML.`
    },
]

const containerConteudo = document.getElementById('containerConteudo');
containerConteudo.innerHTML = `<p class="titulo-conteudo">${conteudo[0].tituloConteudo}</p>`;
containerConteudo.innerHTML += `<p class="texto-conteudo">${conteudo[0].textoConteudo}</p>`;