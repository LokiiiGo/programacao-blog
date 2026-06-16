// navegação compartilhado com menu responsivo (hamburger no mobile).
const headerEl = document.querySelector("header");

if (headerEl) {
  headerEl.innerHTML = `
    <nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
      <a href="index.html" class="text-lg font-bold uppercase tracking-wide text-white">
        &lt;Blog/&gt;
      </a>

      <!-- Botão hamburger (somente mobile) -->
      <button
        id="menu-toggle"
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:hidden"
        aria-label="Abrir menu"
        aria-expanded="false"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
    // Mantem o layout em coluna no mobile quando aberto.
    menu.classList.toggle("flex", isOpen);
  });
}
