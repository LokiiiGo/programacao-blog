// Lê o identificador do tópico a partir do hash da URL (ex: post.html#tailwind)
// e exibe o conteúdo do post correspondente.
const topico = window.location.hash.replace("#", "");

const post = posts.find((p) => p.id === topico);

const tituloEl = document.getElementById("post-titulo");
const conteudoEl = document.getElementById("post-conteudo");
const imagemConteudoEl = document.getElementById("imagem-conteudo");

if (post && post.image) {
  imagemConteudoEl.src = post.image;
}

if (post) {
  document.title = `${post.titulo} - Blog de Programação`;
  tituloEl.textContent = post.titulo;
  conteudoEl.innerHTML = `
    <p class="text-lg font-medium text-sky-600">${post.resumo}</p>
    <img class="mt-4 rounded-lg shadow-md" src="${post.image}" alt="${post.titulo}">
    <p class="mt-4 text-base leading-relaxed text-gray-950">${post.conteudo}</p>
  `;
} else {
  document.title = "Tópico não encontrado - Blog de Programação";
  tituloEl.textContent = "Tópico não encontrado";
  conteudoEl.innerHTML = `
    <p class="text-base leading-relaxed text-gray-700">
      O tópico que você procura não existe. Volte para a pagina inicial e escolha um conteúdo da lista.
    </p>
  `;
}
