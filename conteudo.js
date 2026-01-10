const posts = [
    {
        id: "html",
        texto: "HTML - A Estrutura Esqueleto de um Website",
        textoConteudo: `É uma linguagem de computador que define a estrutura e o significado de conteúdo da web. É o bloco de construção mais basica de um website
        e é utilizado para estruturar paginas web e o seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, numa lista com marcadores ou usando imagens e tabelas.
        <br>
        O HTML utiliza tags, também chamadas de elementos HTML, para informar ao navegador que tipo de estrutura está a ser construida. As tags são identificadas por um sinal de menor que (<) seguido
        pelo nome da tag é um sinal de maior que (>).
        <br>
        Foi criado por Tim Berners-Lee, um físico britânico, a primeira versão foi publicado em 1991. O World Wide Web Consortium (W3C) é reponsável por manter e desenvolver as especificações do HTML.`,
        image: 'image/html.png',
    },
    {
        id: "css",
        texto: "CSS - A Estilização de um Website",
        textoConteudo: `É a sigla para Cascading Style Sheets, que em português signfica Folhas de Estilo em Cascata. É uma linguagem de marcação que define como os dados são apresentados
        no navegador, controlando aspectos como:
        <br><br>
        - font-size (tamanho da letra)
        <br><br>
        - background (tipo de fundo)
        <br><br>
        - text-align (alinhamento do texto)
        <br><br>
        - color (cor do texto)
        <br><br>
        - margin (margens - espaçamento externo)
        <br><br>
        O CSS foi desenvolvido pela W3C (World Wide Web Consortium) em 1996 e permite:
        <br><br>
        - Separar o conteúdo estrutural do documento da sua apresentação.
        <br><br>
        - Facilitar a manutenção e a consistência visual em páginas web.`,
        image: 'image/css.jpg',
    },
];

const urlParams = new URLSearchParams(window.location.search);
const idTopico = urlParams.get('topico');

const postEncontrado = posts.find(p => p.id === idTopico);

if (postEncontrado) {
    document.getElementById('titulo-post').innerText = postEncontrado.texto;
    document.getElementById('conteudo-post').innerHTML = postEncontrado.textoConteudo || "Conteúdo em breve...";

    const imgElement = document.getElementById('imagem-post');
    if (postEncontrado.image) {
        imgElement.src = postEncontrado.image;
        imgElement.classList.remove('hidden');
    }
} else {
    document.getElementById('titulo-post').innerText = "Post não encontrado";
}