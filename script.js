var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const data = [
    {
      title: "My Relaxing Planner",
      image: "/images/relax.png",
      description:
        "A friendly planner that provides the user with a place to plan out their day, with helpful features for the user.",
      github: "https://github.com/jsimpsonux/my-relaxing-planner",
      link: "https://jsimpsonux.github.io/my-relaxing-planner/",
    },
    {
      title: "Ingredient Alchemy",
      image: "/images/ingredient.png",
      description:
        "Ingredient Alchemy allows users to be as picky as they want and still find a recipe fit for them.",
      github: "https://github.com/jsimpsonux/Ingredient-Alchemy",
      link: "https://jsimpsonux.github.io/Ingredient-Alchemy/",
    },
    {
      title: "Crypto-Mock",
      image: "/images/crypto.png",
      description:
        "A crypto website that simulates real trading with the market, and provides users with a friendly inuitive design.",
      github: "https://github.com/jsimpsonux/Crypto-Mock",
      link: "https://resplendent-gumption-b3f3fe.netlify.app/",
    },
];

function Projects(data) {

  let projectList = document.getElementById("project-list");

  projectList.innerHTML = '';

  data.forEach(data =>{
    const projectDiv = document.createElement('div');
    projectDiv.classList.add("projectitem");

    projectDiv.innerHTML = `
    <h1>${data.title}</h1>
    <img src="${data.image}">
    <p>${data.description}</p>
    <div class="button-container">
    <a href="${data.github}" class="github-button" target="_blank"><i class="fab fa-github"><span class="glink">GitHub</span></i></a>
    </div>
    <div class="button-container">
    <a href="${data.link}" class="github-button" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"><span class="glink">Link</span></i></a>
    </div>
    `;

    projectList.appendChild(projectDiv);
  });
    
}


Projects(data);