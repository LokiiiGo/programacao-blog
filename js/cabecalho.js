// navegação compartilhado com menu responsivo (hamburger no mobile).
const headerEl = document.querySelector("header");

if (headerEl) {
  headerEl.innerHTML = `
    <nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
      <a href="index.html" class="text-lg font-bold uppercase tracking-wide text-white">
        <img src="./images/blog.png" alt="ícone de blog de programação" class="sm:h-10 w-10"/>
      </a>

      <!-- Botão list (somente mobile) -->
      <button
        id="menu-toggle"
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:hidden"
        aria-label="Abrir menu"
        aria-expanded="false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>

      <!-- Links de navegação -->
      <ul
        id="menu-links"
        class="hidden w-full flex-col gap-1 pt-4 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-8 sm:pt-0"
      >
        <li>
          <a href="index.html" class="block py-2 text-sm font-bold uppercase text-white transition duration-300 hover:text-sky-500">Home</a>
        </li>
        <li>
          <a href="https://github.com/LokiiiGo/programacao-blog" class="block py-2 text-sm font-bold uppercase text-white transition duration-300 hover:text-sky-500">Sobre</a>
        </li>
        <li>
          <a href="mailto:lucascalle880@gmail.com" class="block py-2 text-sm font-bold uppercase text-white transition duration-300 hover:text-sky-500">Contato</a>
        </li>
      </ul>
    </nav>
  `;

  // Lógica do menu mobile.
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu-links");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("hidden") === false;
    toggle.setAttribute("aria-expanded", String(isOpen));
    // Mantém o layout em coluna no mobile quando aberto.
    menu.classList.toggle("flex", isOpen);
  });
}
