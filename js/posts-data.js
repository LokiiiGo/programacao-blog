// posts do blog. (datas compartilhados)
// Cada post tem um id (usado na URL), titulo, resumo e conteúdo completo.
const posts = [
    {
        id: "html",
        titulo: "HTML",
        resumo: "A estrutura esqueleto de um website",
        image: "./images/html.png",
        conteudo:
            `É uma linguagem de computador que define a estrutura e o significado de conteúdo da web. É o bloco de construção mais basica de um website
        e é utilizado para estruturar paginas web e o seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, numa lista com marcadores ou usando imagens e tabelas.
        <br>
        O HTML utiliza tags, também chamadas de elementos HTML, para informar ao navegador que tipo de estrutura está a ser construida. As tags são identificadas por um sinal de menor que (<) seguido
        pelo nome da tag é um sinal de maior que (>).
        <br>
        Foi criado por Tim Berners-Lee, um físico britânico, a primeira versão foi publicado em 1991. O World Wide Web Consortium (W3C) é reponsável por manter e desenvolver as especificações do HTML.`,
    },
    {
        id: "css",
        titulo: "CSS",
        resumo: "A estilização de um website",
        image: "./images/css.jpg",
        conteudo:
            `É a sigla para Cascading Style Sheets, que em português signfica Folhas de Estilo em Cascata. É uma linguagem de marcação que define como os dados são apresentados
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
    },
    {
        id: "js",
        titulo: "JavaScript",
        resumo: "A interatividade no website",
        image: "./images/js.png",
        conteudo:
            `É uma liguagem de programação que permite criar páginas web interativas, melhorar a experiência do usuário e implementar itens complexos.
        <br><br>
        - Atualizar feeds de mídia social.
        <br><br>
        - Exibir animações e mapas interativas.
        <br><br>
        - Mudar dinamicamente as cores de elementos de uma página web.
        <br><br>
        - Criar jogos.
        <br><br>
        - Criar gráficos 2D e 3D animados.
        <br><br>
        - Criar aplicativos abrangentes baseados em banco de dados.
        <br><br>
        O JavaScript é uma das tecnologias principais da World Wide Web, é amplamente utilizado em diferentes áreas.
        <br><br>
        - Desenvolvimento Web.
        <br><br>
        - Desenvolvimento Front-End.
        <br><br>
        - Aplicativos móveis.
        <br><br>
        - Desenvolvimento de Jogos.
        <br><br>
        - Internet das Coisas (IOT).
        <br><br>
        - Serverless e computação em nuvem.
        <br><br>
        Os navegadores serão capazes de responder a interações do usuário e alterar o layout do conteúdo da página.`
    },
    {
        id: "python",
        titulo: "Python",
        resumo: "Programação orientada a objetos",
        image: "./images/python.png",
        conteudo:
            `A Programação Orientada a Objetos (POO) em Python é um paradigma de programação que organiza o código em objetos, que são instâncias de classes. As classes definem as características
        (atributos) e ações (métodos) que os objetos podem ter. A POO em Python permite criar programas reutilizáveis, fáceis de manter e que modelam melhor a realidade, tornando-a uma opção popular para projetos complexos.`,
    },
    {
        id: "java",
        titulo: "Java",
        resumo: "A linguagem mais usada no mundo",
        image: "./images/java.png",
        conteudo:
            `É uma linguagem de programação e plataforma de computação. Foi criado por James Gosling na Sun Microsystems na década de 1990.
        <br><br>
        <strong>Características</strong>
        <br><br>
        - É uma linguagem orientada a objetos.
        <br><br>
        - É multiplataforma, ou seja, pode ser usado em vários sistemas operacionais e dispositivos.
        <br><br>
        - Suporta a execução de múltiplas threads.
        <br><br>
        <strong>Finalidade</strong>
        <br><br>
        - Desenvolvimento de aplicativos móveis e da web
        <br><br>
        - Desenvolvimento de software empresarial.
        <br><br>
        - Desenvolvimento de dispositivos da Internet das Coisas (IOT).
        <br><br>
        - Desenvolvimento de jogos.
        <br><br>
        - Desenvolvimento de microdados.
        <br><br>
        - Desenvolvimento de aplicações distribuidas e com base na Cloud.
        <br><br>
        <strong>Vantagens</strong>
        <br><br>
        - É uma escolha popular entre desenvolvedores.
        <br><br>
        - É uma linguagem versátil.
        <br><br>
        - É uma linguagem transferível, podendo ser usado entre plataformas e dispositivos.
        <br><br>
        - É uma linguagem centrada em rede.`,
    },
    {
        id: "mysql",
        titulo: "MySQL",
        resumo: "Banco de Dados Relacional",
        image: "./images/mysql.png",
        conteudo:
            `É um sistema de gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações gratuitas
        para gerir suas bases de dados. O serviço utiliza a linguagem SQL (Structure Query Language) traduzido para Linguagem de Consulta Estruturada, que
        é uma linguagem mais popular pra inserir, acessar e gerenciar o conteúdo armazenado num banco de dados.
        <br><br>
        O MySQL é usado em uma ampla variedade de aplicações como:
        <br><br>
        - Sites de comércios eletrônicos.
        <br><br>
        - Mídias sociais.
        <br><br>
        - Apps como: Drupal, Joomia, Magento e WordPress.
        <br><br>
        - Pilha de aplicativos da web Linux-Apache-MySQL-PHP/Perl/Python.
        <br><br>
        - Facebook, X (atual Twitter), Netflix, Uber, Shopify e Booking.com
        <br><br>
        Funciona em um modelo cliente-servidor, onde os dados ficam armazenados no servidor e os clientes fazem solicitações para acessá-los.
        Os clientes podem fazer solicitações através de uma Interface Gráfica do Usuário (IGU) em suas telas.`,
    },
    {
        id: "xampp",
        titulo: "Xampp",
        resumo: "Software do Apache Friends",
        image: "./images/xampp.png",
        conteudo:
            `É uma distribuição de software gratuito e de código aberto que contém o Apache, MySQL, PHP e Perl. A sigla XAMPP é uma referencias a esses quatro ferrasmentas, sendo que o X inicial indica que uma ferramenta é multiplataforma,
        ou seja, funciona em Windows, Linux e MAC.
        <br>
        Foi desenvolvido pela Apache Friends, uma organização sem fins lucrativos , é considierado o ambiente de desenvolvimento PHP mais popular.
        Foi criado para ser uma ferramenta de desenvolvimento que permitisse ao programadores de websites testar o seu trabalho sem a necessidade de acesso a internet. No entanto, atualmente,
        o XAMPP é também utilizado para servir websites WWW.
        <br><br>
        - Possui um painel de controle que permite iniciar ou parar servidores individuais.`,
    },
    {
        id: "php",
        titulo: "PHP",
        resumo: "Desenvolvimento web ao lado do servidor",
        image: "./images/php.png",
        conteudo:
            `PHP é uma linguagem de script do lado do servidor, o que significa que o código PHP é executado no servidor web antes que a página seja enviada para o navegador do usuário.
        Isso permite que o PHP gere conteúdo dinâmico, interaja com bancos de dados e processe informações antes de exibir a página no navegador.
        <br><br>
        PRINCIPAIS CARACTERÍSTICAS SOBRE PHP
        <br><br>
        - Uma linguagem de programação que foi desenvolvida para deixar o HTML dinâmico.
        <br><br>
        - Liguagem de script e open-source.
        <br><br>
        - Os programas são executados em server side (lado do servidor; Back-end).
        <br><br>
        - PHP significa Personal Home Page e HyperText Preprocessor.
        <br><br>
        - O criador da linguagem foi Rasmus Lendorf.
        <br><br>
        - O ano de lançamento foi em 1994.
        <br><br>
        - Aproximadamente 80% dos websites utilizam PHP.`,
    },
    {
        id: "logica",
        titulo: "Lógica de Programação",
        resumo: "O fundamento básico",
        image: "./images/LogicaProgramacao.png",
        conteudo:
            `A lógica de programação é o conjunto de regras e técnicas que os programadores utilizam para projetar e desenvolver programas de computador.
        É a habilidade de pensar de forma lógica e estruturada, decompondo um problema complexo em etapas mais simples.`,
    },
    {
        id: "bootstrap",
        titulo: "Bootstrap",
        resumo: "Framework front-end",
        image: "./images/bootstrap5.png",
        conteudo:
            `Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. 
        Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.`,
    },
    {
        id: "tailwind",
        titulo: "TailwindCSS",
        resumo: "Framework CSS",
        image: "./images/tailwindcss.png",
        conteudo:
            `Tailwind CSS é um framework utilitário que permite criar designs personalizados diretamente no HTML, 
        utilizando classes pré-definidas para estilização rápida e eficiente. 
        <br>
        Ele promove a criação de interfaces responsivas e modernas, facilitando o desenvolvimento front-end.`,
    },
    {
        id: "arduino",
        titulo: "Arduino",
        resumo: "Construindo Hardware",
        image: "./images/arduino.png",
        conteudo:
            `Arduino é uma plataforma de prototipagem eletrônica de código aberto baseada em hardware e software fáceis de usar.
        <br><br>
        É composta por uma placa de circuito com um microcontrolador programável e um ambiente de desenvolvimento integrado (IDE) que permite escrever e carregar código na placa.
        <br><br>
        O Arduino é amplamente utilizado por hobbyistas, educadores e profissionais para criar projetos interativos, como robótica, automação residencial e muito mais.`,
    },
    {
        id: "c",
        titulo: "C",
        resumo: "A linguagem mais antiga",
        image: "./images/c.png",
        conteudo:
            `C é uma linguagem de programação de propósito geral desenvolvida por Dennis Ritchie na Bell Labs na década de 1970.
        <br>
        É conhecida por sua eficiência, portabilidade e capacidade de manipular diretamente o hardware do computador.
        <br>
        C é amplamente utilizada no desenvolvimento de sistemas operacionais, software embarcado (arduino/c++) e aplicativos de alto desempenho.`,
    },
    {
        id: "github",
        titulo: "GitHub",
        resumo: "Rede Social de Programador",
        image: "./images/git-github.png",
        conteudo:
            `Uma plataforma de desenvolvimento colaborativo que aloja projetor na nuvem utilizando o sistemas de controle de versões chamado <strong>Git</strong>.
        O github ajuda os desenvolvedores a armazenar e administrar o código e fazer o registro de mudança.
        Geralmente, é de código-aberto, o que permite realizar projetos compartilhados e manter o acompanhamento detalhado do usuário.
        <br>
        Também funciona como uma rede social, conectando os desenvolvedores com os usuários. Como usuário, podem descarregar programas ou aplicativos, e da mesma maneira, colaborar com o
        desenvolvimento oferecendo melhorias e discutindo as questões que interessam nos foruns temáticos.`,
    },
    {
        id: "laravel",
        titulo: "Laravel",
        resumo: "Framework PHP",
        image: "./images/laravel.png",
        conteudo:
            `O Laravel é um framework PHP de código aberto que oferece uma estrutura robusta para desenvolver aplicações web modernas.
        Ele utiliza o padrão MVC (Model-View-Controller) e oferece recursos como ORM, migrações de banco de dados, testes automatizados e entre outros.
        O Laravel é amplamente utilizado por desenvolvedores para criar aplicações escaláveis e seguras.`,
    },
    {
        id: "react",
        titulo: "React",
        resumo: "Biblioteca JavaScript",
        image: "./images/react.png",
        conteudo:
            `É uma biblioteca JavaScript criada pelo Facebook (atual Meta) para criar interface de usuário (UI) em aplicativos Web
        <br><br>
        - É uma ferramenta ideal para desenvolvimento front-end.
        <br><br>
        - Permite adotar estruturas do HTML e JS em um só código.
        <br><br>
        - É baseado em componentes, o que permite criar UIs complexas.
        <br><br>
        - A lógica do componente é escrita em JavaScript e não em template.
        <br><br>
        - Pode ser usado para criar aplicações móveis, atravéz do React Native.
        <br><br>
        Algumas vantagens do React incluem:
        <br><br>
        - Permitir criar interface de usuário que pode ser encontrada e acessa em diversos motores de busca.
        <br><br>
        - Melhora o processamento de aplicação, o que pode melhorar os resultados do SEOs.
        <br><br>
        - Torna o código mais preditivo, mais simples de entender e fácil de depurar.`,
    },
    {
        id: "portugol",
        titulo: "Portugol",
        resumo: "A linguagem brasileira",
        image: "./images/portugolIDE1.png",
        conteudo:
            `É uma linguagem de programação didática que usa a lingua portuguesa como base para facilitar o aprendizadoda lógica de programação.
        <br><br>
        - É uma pseudolinguagem que permite a implementação de algoritmos em português de forma simples e intuitiva.
        <br><br>
        - A sintaxe é similar ao português, o que facilita o entendimento dos conceitos complexos.
        <br><br>
        - É uma ferramenta educacional, idealizada para quem está começando a aprender programação.
        <br><br>
        O nome Portugol é uma sigla que vem de "pseudo-código em português" e é uma junção das palavras Português, Algol e Pascal.
        <br><br>
        Foi criado pelos professores Antonio Carlos Nicolodi e Antonio Mannso, com o objetivo de ensinar programação sem que uma estrutura de uma linguagem passa-se sobre os iniciantes.`,
    },
    {
        id: "vscode",
        titulo: "Visual Studio Code",
        resumo: "Editor de codigo fonte",
        image: "./images/vscode.png",
        conteudo:
            `O VSCode é um editor de código-fonte gratuito, de código aberto e multiplataforma desenvolvido pela Microsoft.
        <br><br>
        - É compatível com Windows, Linux e MAC.
        <br><br>
        - Suporta várias linguagens como JavaScript, PHP, C, C++, Java, TypeScript, Python, etc.
        <br><br>
        - É personalizável, permitindo alterar a aparência, teclas de atalho e preferências.
        <br><br>
        - É uma ferramenta de código-aberto, o que permite que a comunidade a melhore constantemente.
        <br><br>
        O VSCode é uma das ferramentas mais populares entre programadores e desenvolvedores. A sua popularidade deve-se a vários fatores, como a possibilidade
        de personalização e o fato de ser gratuito.
        <br><br>
        <a href="https://code.visualstudio.com/">Para instalação do VSCode, clique aqui</a>`,
    },
    {
        id: "framework",
        titulo: "Framework",
        resumo: "Entenda o conceito",
        image: "./images/framework.png",
        conteudo:
            `É uma estrutura que fornece ferramentas e componentes para a construção de projetos e pode ser aplicado em programação.
        <br><br>
        - <strong>Framework em programação: </strong>é um conjunto de bibliotecas, estruturas e classes que podem ser reutilizados para desenvolver aplicações.
        <br><br>
        - Define a estrutura do projeto e fornece as ferramentas necessárias para a construção.
        <br><br>
        - Permite que os desenvolvedores se concentrem nas partes únicas do projeto.
        <br><br>
        - Economiza tempo e evita a repetição de códigos comuns.
        <br><br>
        - <strong>Framework em outras áreas: </strong>Pode ser usado para solucionar problemas de forma mais eficiente, otimizar recursos e detectar erros.
        <br><br>
        - Pode ser usado para garantir qualidade no projeto e produtividade.
        <br><br>
        - Pode ser usado para criar e executar aplicações de software.`,
    },
];
