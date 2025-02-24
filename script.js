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
      moreinfo: "This fun challenge of creating an interactive planner gave me the chance to build an app that I could use for my chaotic day to day life. It was a fun experiment with DOM manipulation and using simple syntax and event handling.",
      forward: "My next step for this project is to rebuild the app using React and introduce new features that can help users focus on planning their day.",
      icon: `<i class="fa-brands fa-html5 fa-lg"></i><span style="margin: 0 5px;"></span><i class="fa-solid fa-code fa-lg"></i><span style="margin: 0 5px;"></span><i class="fa-brands fa-css fa-lg"></i>`,
      github: "https://github.com/jsimpsonux/my-relaxing-planner",
      link: "https://jsimpsonux.github.io/my-relaxing-planner/",
    },
    {
      title: "Ingredient Alchemy",
      image: "/images/ingredient.png",
      description:
        "Ingredient Alchemy allows users to be as picky as they want and still find a recipe fit for them.",
      moreinfo: "As someone who has a lot of left over ingredients in the fridge, this project made a lot sense to put together and luckily I was not the only one who thought that as I was able to collaborate with other developers on the project.",
      github: "https://github.com/jsimpsonux/Ingredient-Alchemy",
      link: "https://jsimpsonux.github.io/Ingredient-Alchemy/",
    },
    {
      title: "Crypto-Mock",
      image: "/images/crypto.png",
      description:
        "A crypto website that simulates real trading with the market, and provides users with a friendly inuitive design.",
      moreinfo: "For some people crypto can be an uncertain and confusing place to start investing, so a group of developers including myself decided we wanted to create a platform that would be easy to navigate and provide a friendly interface for users to get started with crypto trading.",
      github: "https://github.com/jsimpsonux/Crypto-Mock",
      link: "https://resplendent-gumption-b3f3fe.netlify.app/",
    },
];

function Projects(data) {

  // let projectList = document.getElementById("project-list");

  // projectList.innerHTML = '';

  // data.forEach(data =>{
  //   const projectDiv = document.createElement('div');
  //   projectDiv.classList.add("projectitem");

  //   projectDiv.innerHTML = `
  //   <h1>${data.title}</h1>
  //   <img src="${data.image}">
  //   <p>${data.description}</p>
  //   <p>${data.moreinfo}</p>
  //   <p>${data.forward}</p>
  //   <span>${data.icon}</span>
  //   <div class="button-container">
  //   <a href="${data.github}" class="github-button" target="_blank"><i class="fab fa-github"><span class="glink">GitHub</span></i></a>
  //   </div>
  //   <div class="button-container">
  //   <a href="${data.link}" class="github-button" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"><span class="glink">Link</span></i></a>
  //   </div>
  //   `;

  //   projectList.appendChild(projectDiv);
  // });

  let myProjects = document.getElementById("timeline");

  myProjects.innerHTML = '';

  data.forEach(data =>{
    const myProject = document.createElement('li');
    myProject.classList.add("timeline-item");

    myProject.innerHTML = `
     <div class="date">${data.title}</div>
     <div class="image"><img src="${data.image}"></div>
     <div class="title">${data.description}</div>
     <div class="descr">${data.moreinfo}</div>
     <div class="button-container">
     <a href="${data.github}" class="github-button" target="_blank"><i class="fab fa-github"><span class="glink">GitHub</span></i></a>
     </div>
     <div class="button-container">
     <a href="${data.link}" class="github-button" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"><span class="glink">Link</span></i></a>
     </div>
        
      `;

    myProjects.appendChild(myProject);
  });
    
}


Projects(data);