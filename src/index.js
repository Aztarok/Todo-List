import "/src/styles.css";

let allGoals = [];

class mainGoal {
    constructor(main, smaller, date, progress, priority) {
        this.main = main;
        this.smaller = smaller;
        this.date = date;
        this.progress = progress;
        this.priority = priority;
    }
}


function goalMaker(main, smaller, date, progress, priority) {
    let goal = new mainGoal(main, smaller, date, progress, priority);
    allGoals.push(goal);
}

goalMaker("Making my bad", 0, "everyday", 1, 2);
goalMaker("TOP", 0, "everyday", 1, 2);


let slider = document.querySelector(".btn");
slider.addEventListener("click", () => {
    document.querySelector(".slide").classList.toggle("slide-out");
    document.querySelector(".projects").classList.toggle("projects-out")
})

let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];

let newProject = document.querySelector(".new-project");
newProject.addEventListener("click", () => {
    modal.style.display = "flex";
})

span.addEventListener("click", () => {
    modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let body = document.querySelector(".projects");
let formSub = document.querySelector(".form-btn")
console.log(formSub);

formSub.addEventListener("click", (e) => {
    e.preventDefault();
    let projectForm = document.forms.ProjectForm;
    let formData = new FormData(projectForm);

    let projectName = formData.get("pname");
    let projectPriority = formData.get("prior");
    let div = document.createElement("div");
    let para = document.createElement("h4");
    para.textContent += projectName + projectPriority;
    div.appendChild(para);
    newProject.prepend(para);
})

