const usernameInput = document.querySelector("#usernameInput");
const searchBtn = document.querySelector("#searchBtn");
const resultsDiv = document.querySelector("#results");
const profileInfoDiv = document.querySelector("#profileInfo");
const langDiv = document.querySelector("#languages");
const reposListDiv = document.querySelector("#reposList");
const loadingDiv = document.querySelector("#loading");

const GITHUB_API_URL = "https://api.github.com";
let languageColors = {};

searchBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    gitHubApi(username);
  } else {
    Swal.fire({
      title: "Campo de pesquisa vazio",
      text: "Digite um nome de usuário",
      icon: "error",
    });
  }
});

async function gitHubApi(username) {
  loadingDiv.classList.remove("hidden");
  loadingDiv.classList.add("loading");
  resultsDiv.classList.add("hidden");

  try {
    const [profileRes, reposRes] = await Promise.all([
      axios.get(`${GITHUB_API_URL}/users/${username}`),
      axios.get(`${GITHUB_API_URL}/users/${username}/repos`),
    ]);

    const profile = profileRes.data;
    const repos = reposRes.data;

    displayProfile(profile);
    displayRepos(repos);
    await processAndDisplayLanguages(repos);
    resultsDiv.classList.remove("hidden");
  } catch (error) {
    console.error("Erro ao buscar dados no GitHub:", error.message);
    if (error.response && error.response.status === 404) {
      Swal.fire({
        title: "Usuário não encontrado",
        text: `O usuário "${username}" não foi encontrado, verifique o nome e tente novamente`,
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Ops! Ocorreu um erro",
        text: "Não foi possível buscar os dados no GitHub. Isso pode ser um problema de rede ou o limite de requisições da API foi atingido. Tente novamente mais tarde.",
        icon: "warning",
      });
    }
    profileInfoDiv.innerHTML = "";
    reposListDiv.innerHTML = "";
    langDiv.innerHTML = "";
  } finally {
    loadingDiv.classList.add("hidden");
  }
}

function displayProfile(profile) {
  profileInfoDiv.innerHTML = `
    <img src="${profile.avatar_url}" alt="Avatar de ${profile.name}">
        <div>
            <h2>${profile.name || "Nome não disponível"}</h2>
            <p><strong>Login:</strong> ${profile.login}</p>
            <p>${profile.bio || "Bio não disponível."}</p>
            <p><strong>Seguidores:</strong> ${
              profile.followers
            } | <strong>Seguindo:</strong> ${profile.following}</p>
            <a href="${
              profile.html_url
            }" target="_blank">Ver Perfil no GitHub</a>
        </div>
        `;
}

function displayRepos(repos) {
  reposListDiv.innerHTML = "";
  const topTenRepos = repos.slice(0, 10);

  if (topTenRepos.length === 0) {
    reposListDiv.innerHTML = `<p>Nenhum repositório encontrado.</p>`;
    return;
  }

  topTenRepos.forEach((repo) => {
    const repoElement = document.createElement("div");
    repoElement.classList.add("repo-item");

    const lang = repo.language;
    let languageBadgeHTML = "";

    if (lang) {
      const color = languageColors[lang] ? languageColors[lang].color : "#ccc";

      languageBadgeHTML = `
        <span class="language-badge" style="background-color: ${color}; color="#fff"; font-weight: bold;">${lang}</span>
      `;
    }

    repoElement.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || "Sem descrição."}</p>
            <p><strong>⭐ Estrelas:</strong> ${
              repo.stargazers_count
            } | <strong>🍴 Forks:</strong> ${repo.forks_count}
              | ${languageBadgeHTML || `<strong class="not-lang">N/A</strong>`}
            </p>  
    `;
    reposListDiv.appendChild(repoElement);
  });
}

async function loadLanguageColors() {
  try {
    const colorRes = await axios.get(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    );

    languageColors = colorRes.data;
  } catch (error) {
    console.error("Ocorreu algum erro ao carregar dados das linguagens", error);
    Swal.fire({
        title: "Ops! Ocorreu um erro",
        text: "Ocorreu algum erro ao carregar dados das linguagens.",
        icon: "warning",
      });
  }
}

async function processAndDisplayLanguages(repos) {
  const languageStats = {};

  const languagePromises = repos.map((repo) => {
    return axios.get(repo.languages_url);
  });

  try {
    const results = await Promise.all(languagePromises);

    results.forEach((response) => {
      const languages = response.data;
      for (const lang in languages) {
        languageStats[lang] = (languageStats[lang] || 0) + languages[lang];
      }
    });

    const topLanguages = Object.entries(languageStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang]) => lang);

    if (topLanguages.length > 0) {
      const languagesHTML = topLanguages
        .map((lang) => {
          const color = languageColors[lang]
            ? languageColors[lang].color
            : "#ccc";

          const iconNameMap = {
            HTML: "html5",
            CSS: "css3",
            "C++": "cplusplus",
            "C#": "csharp",
            Shell: "bash",
            "Jupyter Notebook": "jupyter",
          };

          const langLower = lang.toLowerCase();
          const iconName = iconNameMap[lang] ? iconNameMap[lang] : langLower;

          const iconClass = `devicon-${iconName}-plain`;

          return `
                <div class="language-badge" style="background-color: ${color};">
                <i class="${iconClass}"></i>
                <span>${lang}</span>
                </div>
                `;
        })
        .join("");

      langDiv.innerHTML = `
            <h3>Linguagens mais usadas: </h3>
            <div class="language-list">${languagesHTML}</div>
            `;
    } else {
      langDiv.innerHTML = "";
    }
  } catch (error) {
    console.error("Erro ao processar as linguagens dos repositórios:", error);
    langDiv.innerHTML = `<p>Não foi possível carregar as linguagens do usuario.</p>`;
  }
}

loadLanguageColors();
