import "./styles.css";
import { allGoals, goalMaker, deleteGoal, getValues, addProject } from "./todo.js";

let newProject = document.querySelector(".new-project");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let formBtn = document.querySelector(".form-btn");


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


newProject.addEventListener("click", () => {
    modal.style.display = "block";
})

let makeProject = function(e) {
    e.preventDefault();
    let form = document.forms.ProjectForm;
    let formData = new FormData(form);
    let name = formData.get("pname");
    let prior = formData.get("prior");
    let date = formData.get("date");
    let desc = formData.get("desc");


    goalMaker(name, date, prior, desc);
    addProject(name);

    form.reset();
    modal.style.display = "none";
}

let form = document.getElementById("ProjectForm");
form.addEventListener("submit", makeProject, true);
