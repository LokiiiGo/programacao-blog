// Renderiza a lista de posts na pagina inicial.
const container = document.getElementById("lista-posts");

if (container) {
  posts.forEach((post) => {
    const link = document.createElement("a");
    link.href = `index-1.html#${post.id}`;
    link.className =
      "group block rounded-lg border border-gray-200 bg-white p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:border-sky-400 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";

    link.innerHTML = `
      <h2 class="text-base font-bold text-gray-900 group-hover:text-sky-600 sm:text-lg">${post.titulo}</h2>
      <p class="mt-1 text-sm text-gray-500">${post.resumo}</p>
    `;

    container.appendChild(link);
  });
}
