const container = document.getElementById('projects-container');

const ProjectsList = [
  {
    title: "HyperBox-Minecraft",

    banner: "resources/projects/infinix.png",
    sub_title: "Когда-нибудь, возможно...",
    description: "Модовый сервер майнкрафт, основанный на таких моддификациях как: Create, Botania, Ars Nouveau",
    link: ""
  },

  {
    title: "HyperBox-Launcher",

    banner: "resources/projects/infinix.png",
    sub_title: "Разрабатывается...",
    description: "Лаунчер проекта. Авторизация, автоматическая установка модов, проверка целостности файлов",
    link: ""
  },

  {
    title: "Hyprland-Dotfiles",

    banner: "resources/projects/hyprland.png",
    sub_title: "Когда-нибудь, возможно...",
    description: "Минималистичный конфиг Hyprland (Arch Linux) в зелёных тонах (Мой)",
    link: ""
  },

  {
    title: "Website-About-Me",

    banner: "resources/projects/THIS.png",
    sub_title: "Ещё разрабатывается...",
    description: "Собственно, этот сайт. И мои первые более-менее успешные попытки взаимодействия с JavaScript",
    link: ""
  },
]


ProjectsList.forEach(project => {
  const item = document.createElement('div');
  item.className = 'project';
  
  item.innerHTML = `
    <img class="project-img" src="${project.banner}" alt="">

    ${project.sub_title.trim() ? `<div class="project-sub-title">${project.sub_title}</div>` : ''}

    <div class="project-title">${project.title}</div>
    <div class="project-description">${project.description}</div>

    <a href="${project.link}" class="project-details" id="${project.title}">Подробнее →</a>
  `;

  container.appendChild(item);
});

