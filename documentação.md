# 🌐 DAMP Code

**Plataforma para criação, gerenciamento e participação em hackathons**

<div>
    <span style="font-size:30px">Centro Paula Souza</span><br>
    <span style="font-size:30px">Faculdade de Tecnologia de Jahu</span><br>
    <h2>Curso de Tecnologia em Desenvolvimento de Software Multiplataforma</h2>
    <h2>Início: 1º Semestre / 2026</h2>
</div>

<h2>Participantes Diretos:</h2>

<a href="#">Seu Nome</a> <br> <a href="#">Integrante 2</a> <br> <a href="#">Integrante 3</a> <br> <a href="#">Integrante 4</a>

---

# 📖 Sumário

* Descrição da Aplicação Web
* Objetivos
* Documento de Requisitos
* Regras de Negócio
* Diagrama de Classes
* Design
* Modelo de Navegação
* Prototipagem
* Aplicação
* Banco de Dados
* Considerações Finais

---

# 🌐 Descrição da Aplicação Web

## 1.1 Descrição

A **DAMP Code** é uma plataforma web voltada para a criação, gerenciamento e participação em hackathons, promovendo aprendizado prático, competitividade saudável e aproximação entre desenvolvedores e empresas.

A aplicação busca resolver problemas encontrados em plataformas tradicionais de hackathons, oferecendo uma experiência mais moderna, organizada e acessível, com foco em:

* Gamificação;
* Evolução profissional;
* Interação entre usuários;
* Organização de eventos tecnológicos;
* Formação de equipes;
* Desenvolvimento prático;
* Descoberta de talentos por empresas.

A plataforma permitirá que usuários participem de desafios reais, desenvolvam projetos, acompanhem rankings, recebam certificados e construam um portfólio profissional baseado em experiências práticas.

Empresas também poderão criar hackathons próprios, publicar desafios, acompanhar participantes e utilizar a plataforma como apoio em processos seletivos e recrutamento técnico.

---

## 1.2 Métodos Utilizados

### Front-End

* HTML5
* CSS3
* JavaScript
* ReactJS
* Tailwind CSS

### Back-End

* C#
* ASP.NET Core Web API
* MongoDB Driver

### Banco de Dados

* MongoDB

### Design e Organização

* Figma
* Scrum
* Trello

---

## 1.3 Cronograma do Projeto

📌 O cronograma detalhado está disponível em:

👉 **[DAMP Code | Trello](#)**

<img src="./docx/trello.png" alt="Trello" width="300"/>

---

# 🎯 Objetivos

## 2.1 Geral

Desenvolver uma plataforma digital moderna, acessível e gamificada para criação e participação em hackathons, promovendo aprendizado prático, colaboração, experiência profissional e aproximação entre desenvolvedores e empresas.

---

## 2.2 Objetivos Específicos

* Permitir a criação e gerenciamento de hackathons por empresas e organizadores;
* Disponibilizar desafios tecnológicos para prática e aprendizado;
* Incentivar a evolução contínua através de rankings, XP e níveis;
* Estimular interação entre participantes;
* Facilitar a descoberta de talentos por empresas;
* Criar um ambiente colaborativo e competitivo;
* Disponibilizar conteúdos complementares como vídeos, lives e documentações;
* Permitir formação de equipes;
* Gerar certificados de participação;
* Desenvolver uma plataforma moderna, responsiva e acessível.

---

# 📑 Documento de Requisitos

Um documento de requisitos registra todas as funcionalidades, regras e necessidades que o sistema deve atender, servindo como guia para o desenvolvimento da aplicação.

---

## 3.1 ✅ Requisitos Funcionais (RF)

| Código | Descrição                            |
| ------ | ------------------------------------ |
| RF01   | Cadastrar usuários participantes     |
| RF02   | Cadastrar empresas                   |
| RF03   | Realizar login e logout              |
| RF04   | Recuperar senha                      |
| RF05   | Criar hackathons                     |
| RF06   | Editar hackathons                    |
| RF07   | Excluir hackathons                   |
| RF08   | Participar de hackathons             |
| RF09   | Enviar submissões                    |
| RF10   | Exibir ranking                       |
| RF11   | Exibir perfil de usuários            |
| RF12   | Sistema de níveis e XP               |
| RF13   | Exibir certificados                  |
| RF14   | Filtrar hackathons                   |
| RF15   | Buscar hackathons                    |
| RF16   | Criar comunidades                    |
| RF17   | Formação de equipes                  |
| RF18   | Sistema de comentários               |
| RF19   | Área empresarial                     |
| RF20   | Sistema de notificações              |
| RF21   | Exibição de conteúdos complementares |
| RF22   | Painel administrativo                |
| RF23   | Página institucional                 |
| RF24   | Página de contato                    |
| RF25   | Página “Quem Somos”                  |

---

## 3.2 ⚙️ Requisitos Não Funcionais (RNF)

| Código | Descrição                         |
| ------ | --------------------------------- |
| RNF01  | Interface responsiva              |
| RNF02  | Navegação intuitiva               |
| RNF03  | Segurança com autenticação        |
| RNF04  | Compatibilidade entre navegadores |
| RNF05  | Criptografia de senhas            |
| RNF06  | Escalabilidade                    |
| RNF07  | Código modular                    |
| RNF08  | Alta disponibilidade              |
| RNF09  | Desempenho otimizado              |
| RNF10  | Banco de dados flexível           |
| RNF11  | API RESTful                       |
| RNF12  | Arquitetura desacoplada           |
| RNF13  | Acessibilidade                    |
| RNF14  | Fácil manutenção                  |
| RNF15  | Reutilização de componentes       |

---

## 3.3 📌 Casos de Uso

### 👤 Usuário Participante

1. Criar conta
2. Fazer login/logout
3. Participar de hackathons
4. Visualizar rankings
5. Enviar submissões
6. Participar de comunidades
7. Formar equipes
8. Receber certificados
9. Visualizar perfil de outros usuários

---

### 🏢 Empresa

10. Criar hackathons
11. Gerenciar hackathons
12. Acompanhar participantes
13. Avaliar submissões
14. Publicar conteúdos complementares
15. Configurar premiações

---

### 👨‍💼 Administrador

16. Gerenciar usuários
17. Moderar comunidades
18. Remover conteúdo inadequado
19. Gerenciar denúncias
20. Verificar empresas parceiras

---

# 📊 Regras de Negócio

## 4.1 O que será realizado?

A plataforma será focada em:

* Aprendizado prático;
* Competitividade saudável;
* Experiência profissional;
* Gamificação;
* Integração entre usuários e empresas.

---

| Código | Descrição                                                    |
| ------ | ------------------------------------------------------------ |
| RN01   | Apenas usuários cadastrados podem participar de hackathons   |
| RN02   | Empresas podem criar hackathons apenas após cadastro         |
| RN03   | Cada hackathon deve possuir título, descrição e critérios    |
| RN04   | Submissões devem respeitar prazo limite                      |
| RN05   | Cada participante pode enviar múltiplas versões da submissão |
| RN06   | Empresas podem avaliar submissões                            |
| RN07   | O sistema deve calcular rankings automaticamente             |
| RN08   | Usuários recebem XP ao concluir hackathons                   |
| RN09   | Certificados são liberados apenas após conclusão             |
| RN10   | Empresas parceiras passam por validação                      |
| RN11   | Conteúdos ofensivos devem ser moderados                      |
| RN12   | Usuários podem denunciar conteúdos                           |
| RN13   | O sistema deve manter histórico de participações             |
| RN14   | Hackathons encerradas permanecem arquivadas                  |
| RN15   | Apenas administradores podem remover usuários                |

---

## 4.2 Business Model Canvas

* Modelo de negócios organizado visualmente através do BM Canvas.

<img src="./docx/BmCanvas.png" alt="BM Canvas" width="400"/>

---

## 4.3 Diagrama de Classes

* Representação visual das entidades e relações do sistema.

<img src="./docx/DiagramaClasses.png" alt="Diagrama de Classes" width="400"/>

---

# 🎨 Design

## Paleta de Cores

<img src="./docx/paleta.png" alt="Paleta DAMP Code" width="300"/>

---

## Tipografia

### Inter

Fonte moderna e limpa aplicada em menus, navegação e componentes da interface.

### Dangrek

Fonte utilizada em títulos e destaques principais da plataforma.

### Exo

Fonte padrão utilizada em textos longos e descrições, garantindo boa legibilidade.

---

## Logo

<img src="./docx/logo1.png" alt="Logo DAMP Code" width="300"/>

<img src="./docx/logo2.png" alt="Logo DAMP Code" width="300"/>

---

## Wireframe

Wireframe desenvolvido no Figma:

👉 [Acessar Wireframe](#)

---

# 🧭 Modelo de Navegação

## Home

Página inicial pública da plataforma.

Permite acesso para:

* Explorar hackathons;
* Login;
* Cadastro;
* Área empresarial;
* Ranking;
* Comunidade;
* Sobre;
* Quem Somos.

---

## Explorar Hackathons

Página principal de navegação entre desafios.

Possui:

* Filtros;
* Pesquisa;
* Hackathons em destaque;
* Recomendações;
* Categorias por tecnologia.

---

## Página de Hackathon

Tela individual de um hackathon.

Exibe:

* Informações do desafio;
* Empresa organizadora;
* Tecnologias;
* Regras;
* Critérios;
* Ranking;
* Submissões;
* Comunidade.

---

## Comunidade

Área social da plataforma.

Contém:

* Fóruns;
* Chats;
* Perguntas e respostas;
* Formação de equipes.

---

## Ranking

Área de gamificação da plataforma.

Exibe:

* XP;
* Níveis;
* Medalhas;
* Ranking global;
* Ranking por hackathon.

---

## Perfil

Tela individual do usuário.

Contém:

* Informações pessoais;
* Histórico;
* Medalhas;
* Certificados;
* Tecnologias favoritas;
* Hackathons concluídas.

---

## Área Empresarial

Painel destinado às empresas.

Permite:

* Criar hackathons;
* Gerenciar participantes;
* Avaliar submissões;
* Configurar eventos;
* Gerenciar premiações.

---

# 🖌️ Prototipagem

Protótipo de alta fidelidade desenvolvido no Figma utilizando conceitos modernos de UI/UX voltados para tecnologia, gamificação e experiência do usuário.

👉 [Acessar Protótipo](#)

<img src="./docx/figma.png" alt="Protótipo Figma" width="300"/>

---

# 💻 Aplicação

A aplicação utiliza arquitetura separada entre Front-end e Back-end.

---

## Front-End

Desenvolvido com:

* ReactJS
* Tailwind CSS
* JavaScript

Responsável por:

* Interface visual;
* Navegação;
* Responsividade;
* Comunicação com API.

---

## Back-End

Desenvolvido com:

* C#
* ASP.NET Core Web API
* MongoDB Driver

Responsável por:

* Regras de negócio;
* CRUDs;
* Autenticação;
* Ranking;
* Gerenciamento de hackathons;
* Integração com banco de dados.

---

# 🗄️ Banco de Dados

## Modelo Conceitual

Banco de dados NoSQL utilizando MongoDB.

---

## Principais Coleções

### Users

Armazena:

* Participantes;
* Empresas;
* Administradores.

---

### Hackathons

Armazena:

* Informações dos eventos;
* Tecnologias;
* Premiações;
* Critérios;
* Datas.

---

### Participations

Relaciona:

* Usuários;
* Hackathons;
* Equipes;
* Status.

---

### Submissions

Armazena:

* Projetos enviados;
* Links;
* Avaliações;
* Feedbacks.

---

### Communities

Responsável por:

* Fóruns;
* Discussões;
* Comentários;
* Interações.

---

### Rankings

Armazena:

* XP;
* Pontuações;
* Medalhas;
* Evolução dos usuários.

---

# 📝 Considerações Finais

O desenvolvimento da **DAMP Code** proporcionou a aplicação prática de conceitos relacionados a:

* Desenvolvimento Web;
* APIs RESTful;
* Banco de Dados NoSQL;
* UI/UX Design;
* Arquitetura de Software;
* Desenvolvimento Full Stack.

Durante o desenvolvimento, foram enfrentados desafios relacionados à:

* Modelagem de dados no MongoDB;
* Organização da arquitetura;
* Estruturação das regras de negócio;
* Integração entre Front-end e Back-end;
* Escalabilidade da aplicação.

Mesmo em desenvolvimento, o projeto apresenta grande potencial por unir:

* Aprendizado prático;
* Comunidade;
* Competitividade;
* Gamificação;
* Oportunidades profissionais.

A DAMP Code busca transformar hackathons em experiências mais acessíveis, organizadas e envolventes para estudantes, desenvolvedores e empresas.

---

# 📚 Referências Bibliográficas

* Documentação oficial do ReactJS
* Documentação oficial do ASP.NET Core
* Documentação oficial do MongoDB
* Documentação oficial do Tailwind CSS
* Figma
* MongoDB Driver for .NET
* Material de UI/UX estudado em aula

### Plataformas de referência:

* DevPost
* Kaggle
* HackerRank
* DIO
* Discord
* GitHub
