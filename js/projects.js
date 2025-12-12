const container = document.getElementById('projects-container');

const ProjectsList = [
  {
    title: "HyperBox-Minecraft",

    banner: "resources/projects/infinix.png",
    sub_title: "",
    description: "Полуприватный майнкрафт сервер без приватов, гриферства",
    link: "",
    details: true
  },

  // {
  //   title: "HyperBox-Launcher",

  //   banner: "resources/projects/infinix.png",
  //   sub_title: "Когда-нибудь, возможно...",
  //   description: "Лаунчер проекта. Авторизация, установка модов, проверка целостности файлов",
  //   link: "",
  //   details: false
  // },

  {
    title: "Hyprland-Dotfiles",

    banner: "resources/projects/hyprland.png",
    sub_title: "Когда-нибудь, возможно...",
    description: "Конфиги моей системы ArchLinux, окружение Hyprland",
    link: "https://github.com/PixelLoop-dev/hyprland-dotfiles",
    details: false
  },

  {
    title: "This-Website",

    banner: "resources/projects/THIS.png",
    sub_title: "",
    description: "Собственно, этот сайт. И мои первые более-менее успешные попытки взаимодействия с JavaScript",
    link: "",
    details: false
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

    ${project.details ? `<a href="${project.link}" class="project-details"">Подробнее →</a>` : ''}
  `;

  container.appendChild(item);
});

