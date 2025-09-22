# 🚀 Buscador de Perfis do GitHub

<p align="center">
  <img src="https://i.ibb.co/dS4BmPh/Api-Git-Hub-Dark.png" alt="Demonstração do Buscador de Perfis do GitHub" width="800"/>
  <img src="https://i.ibb.co/Fqjgd7kn/Api-Git-Hub-Light.png" alt="Demonstração do Buscador de Perfis do GitHub" width="800"/>
</p>

## 📝 Descrição

O **Buscador de Perfis do GitHub** é uma aplicação web front-end que permite aos usuários pesquisar por perfis de desenvolvedores no GitHub e visualizar suas informações de perfil, repositórios públicos e as linguagens de programação mais utilizadas. O projeto foi desenvolvido com foco em um design limpo, responsivo e com funcionalidades modernas, como a alternância entre temas claro e escuro.

A aplicação consome a API oficial do GitHub para buscar os dados em tempo real, utilizando `async/await` e a biblioteca `Axios` para fazer as requisições HTTP.

#### Projeto desenvolvido para aprensentar no final do semestre na aula de desenvolvimento web.

**🔗 [Acesse a demonstração ao vivo](https://carloszeyy.github.io/seu-repositorio/)** ---

## ✨ Funcionalidades Principais

-   **Busca de Perfis**: Pesquise qualquer usuário do GitHub e veja seus dados.
-   **Visualização de Perfil**: Exibe informações detalhadas como nome, bio, número de seguidores e link para o perfil.
-   **Lista de Repositórios**: Mostra os 10 repositórios públicos mais recentes do usuário, com descrição, contagem de estrelas e forks.
-   **Linguagens Mais Usadas**: Analisa os repositórios do usuário e exibe um gráfico com as 5 linguagens mais utilizadas.
-   **Tema Claro e Escuro (Dark/Light Mode)**: Alterne entre os temas para uma melhor experiência visual. A preferência é salva no navegador.
-   **Design Responsivo**: A interface se adapta perfeitamente a desktops, tablets e celulares.
-   **Animação de Fundo Sutil**: Ícones do GitHub animados no fundo da página para um toque visual elegante.
-   **Alertas e Tratamento de Erros**: Notificações amigáveis para casos como "usuário não encontrado" ou falhas na API, utilizando a biblioteca SweetAlert2.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

<table>
  <tr>
    <td align="center"><strong>HTML5</strong></td>
    <td align="center"><strong>CSS3</strong></td>
    <td align="center"><strong>JavaScript (ES6+)</strong></td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
      </a>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
      </a>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center"><strong>Axios</strong></td>
    <td align="center"><strong>SweetAlert2</strong></td>
    <td align="center"><strong>Devicon</strong></td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://axios-http.com/">
        <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
      </a>
    </td>
    <td align="center">
      <a href="https://sweetalert2.github.io/">
        <img src="https://img.shields.io/badge/SweetAlert2-87CEEB?style=for-the-badge&logo=sweetalert2&logoColor=black" alt="SweetAlert2">
      </a>
    </td>
     <td align="center">
      <a href="https://devicon.dev/">
        <img src="https://img.shields.io/badge/Devicon-222222?style=for-the-badge&logo=devicon&logoColor=white" alt="Devicon">
      </a>
    </td>
  </tr>
</table>

-   **API**: [GitHub API](https://docs.github.com/pt/rest)

---

## 🚀 Como Executar o Projeto Localmente

Para executar este projeto em sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/CarlosZeyy/ProjetoDesenvolvimentoWeb
    ```

2.  **Abra o arquivo `index.html`:**
    * Basta abrir o arquivo `index.html` no seu navegador de preferência com o Live Server.

---

## 📂 Estrutura de Arquivos

### Projeto_DesenvolvimentoWeb/
######  │
######  ├── index.html                # Arquivo principal da estrutura da página
######  │
######  └── src/
######  ├── css/
######  │   └── style.css         # Arquivo de estilos
######  │
######  ├── js/
######  │   └── script.js         # Arquivo com a lógica da aplicação
######  │
######  └── svg/
######  └── github.svg        # Ícone utilizado na animação de fundo


**Observação:** Para que a animação de fundo funcione corretamente, certifique-se de que o arquivo `src/svg/github.svg` não esteja vazio.

---

## 👨‍💻 Autor

**Carlos Moises**

-   **GitHub**: [@CarlosZeyy](https://github.com/CarlosZeyy)
-   **LinkedIn**: [carlosmoisesdev](https://www.linkedin.com/in/carlosmoisesdev/)

O projeto está organizado da seguinte forma para facilitar a manutenção:
