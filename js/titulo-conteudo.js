const posts = [
    { id: "html", texto: "HTML - A Estrutura Esqueleto de um Website" },
    { id: "css", texto: "CSS - A Estilização de um Website" },
    { id: "js", texto: "JavaScript - A Interatividade no Website" },
    { id: "python", texto: "Python - Programação orientada a objetos" },
    { id: "java", texto: "Java - A linguagem mais usada no mundo" },
    { id: "mysql", texto: "MySQL - Banco de Dados Relacional" },
    { id: "php", texto: "PHP - Desenvolvimento web ao lado do servidor" },
    { id: "logica", texto: "Lógica de Programação - O fundamento básico" },
    { id: "bootstrap", texto: "Bootstrap - Framework front-end" },
    { id: "tailwind", texto: "TailwindCSS - Framework CSS" },
    { id: "arduino", texto: "Arduino - Construindo Hardware" },
    { id: "c", texto: "C - A linguagem mais antiga" },
    { id: "github", texto: "GitHub - Rede Social de Programador" },
    { id: "xampp", texto: "O que é XAMPP?" },
    { id: "laravel", texto: "Laravel - Framework Back-end" },
    { id: "react", texto: "React - Framework Front-end" },
    { id: "portugol", texto: "Portugol - A linguagem brasileira" },
    { id: "vscode", texto: "VS Code" },
    { id: "framework", texto: "O que é Framework" },
];

const container = document.getElementById('lista-posts');

// Função que gera o HTML automaticamente
posts.forEach(post => {
    const link = document.createElement('a');
    link.href = `index-1.html?topico=${post.id}`; // Exemplo de como passar parâmetro
    link.innerHTML = `<p class="post-titulo">${post.texto}</p>`;
    container.appendChild(link);
});