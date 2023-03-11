let allGoals = [];



class mainGoal {
    constructor(name, date, priority, desc) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.desc = desc;
    }
}

export function goalMaker(name, date, priority, desc) {
    let goal = new mainGoal(name, date, priority, desc);
    allGoals.push(goal);
}

export function deleteGoal(name) {
    
    for (let i = 0; i < allGoals.length; i++) {
        let current = allGoals[i].name;
        console.log(current);
        if (name === current) {
            allGoals.splice(i, 1);
        }
    }
}

export function getValues(name) {
    const body = document.querySelector(".content");
    body.removeChild(body.firstChild);
    for (let i = 0; i < allGoals.length; i++) {
        let currentName = allGoals[i].name;
        let currentDate = allGoals[i].date;
        let currentPriority = allGoals[i].priority;
        let currentDesc = allGoals[i].desc;
        if (currentName === name) {
            let div = document.createElement("div");
            div.classList.add("project-content");
            div.innerText += currentName;
            div.innerText += currentDate;
            div.innerText += currentPriority;
            div.innerText += currentDesc;
            body.appendChild(div);
        }
    }
}



export function addProject(name) {
    const side = document.querySelector(".side");
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.innerHTML = name;
    button.classList.add("project-btn");
    div.appendChild(button);
    div.classList.add("project");
    side.appendChild(div);

    let project = div;
    project.addEventListener("click", function() {
        getValues(name);
    })

}

export { allGoals };
