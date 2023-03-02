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
    let content = document.querySelector(".slide");
    content.classList.toggle("slide-out")
})