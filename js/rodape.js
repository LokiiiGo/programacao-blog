// Insere o rodape compartilhado em todas as paginas.
const footerEl = document.querySelector("footer");

if (footerEl) {
  footerEl.innerHTML = `
    <div class="mx-auto max-w-4xl px-4 py-6 text-center text-sm text-white">
      &copy; ${new Date().getFullYear()} - Blog de Programação.
    </div>
  `;
}
