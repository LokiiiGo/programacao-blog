const posts = [
    { id: "html", texto: "HTML - A estrutura esqueleto de um website" },
    { id: "css", texto: "CSS - A estilização de um website" },
    { id: "js", texto: "JavaScript - A interatividade no website" },
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
    { id: "xampp", texto: "Xampp - Software do Apache Friends" },
    { id: "laravel", texto: "Laravel - Framework PHP" },
    { id: "react", texto: "React - Biblioteca JavaScript" },
    { id: "portugol", texto: "Portugol - A linguagem brasileira" },
    { id: "vscode", texto: "VS Code - Editor de código fonte" },
    { id: "framework", texto: "O que é Framework?" },
];

const container = document.getElementById('lista-posts');

posts.forEach(post => {
    const link = document.createElement('a');
    link.href = `index-1.html?topico=${post.id}`; // parâmetro
    link.innerHTML = `<p class="post-titulo">${post.texto}</p>`;
    container.appendChild(link);
});