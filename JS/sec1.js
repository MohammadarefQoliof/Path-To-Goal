let backtoplan = document.querySelector(".backtoplan");
let mainDiv;
backtoplan.addEventListener("click", ()=>{
    window.location.href = "../index.html";
});

let sec1TaskNum = localStorage.getItem("sec1TaskNum");
if(!sec1TaskNum){
    localStorage.setItem("sec1TaskNum", "0");
}

if(sec1TaskNum <= 0 || !sec1TaskNum){
    let body = document.querySelector("body")
    mainDiv = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let icon = document.createElement("img")
    
    icon.src = "../images/toDoList.png"
    
    p1.textContent = "No tasks in this plan"
    p2.textContent = "Add your first task to this plan to get started."
    
    icon.classList.add("icon")
    p1.classList.add("p1")
    p2.classList.add("p2")
    mainDiv.classList.add("mainDiv")
    
    mainDiv.append(icon, p1, p2)
    body.append(mainDiv)
}
else{
    let card;
    let body = document.querySelector("body")
    if(mainDiv){
        mainDiv.remove()
    }
    for(let i = 1; i<=pageNum; i++){
        card = document.createElement("div")
        card.classList.add("card")
        body.append(card)
    }
}

let newTask = document.querySelector(".newTaskBtn")
newTask.addEventListener("click", ()=>{
    let body = document.querySelector("body")
    let overlayTask = document.createElement("div")
    let inputDiv = document.createElement("div")
    let cross = document.createElement("img")
    let topic = document.createElement("h1")
    let titleText = document.createElement("p")
    let titleText2 = document.createElement("p")
    let titleText3 = document.createElement("p")
    let input = document.createElement("input")
    let input2 = document.createElement("input")
    let input3 = document.createElement("input")
    let cancel = document.createElement("button")
    let save = document.createElement("button")

    input.placeholder = "e.g. Book flights"
    input2.placeholder = "e.g. 500"
    input3.type = "date"

    cancel.textContent = "Cancel"
    save.textContent = "Save Plan"
    topic.textContent = "Add a task to this plan"
    titleText.textContent = "Task Title"
    titleText2.textContent = "Price"
    titleText3.textContent = "Date"
    cross.src = "../images/cross.png"

    cross.addEventListener("mouseout", ()=>{
        cross.src = "../images/cross.png"
    })
    cross.addEventListener("mouseover", ()=>{
        cross.src = "../images/close.png"
    })
    cross.addEventListener("click", ()=>{
        inputDiv.classList.add("animate")
        overlayTask.addEventListener("animationend", ()=>{
            overlayTask.remove()
        })
    })
    cancel.addEventListener("click", ()=>{
        inputDiv.classList.add("animate")
        overlayTask.addEventListener("animationend", ()=>{
            overlayTask.remove()
        })
    })
    save.addEventListener("click", ()=>{
        sec1TaskNum++;
        localStorage.setItem("sec1TaskNum", sec1TaskNum)
        location.reload()
    })

    cross.classList.add("cross")
    cancel.classList.add("cancel")
    save.classList.add("save")
    input.classList.add("titleInput")
    input2.classList.add("titleInput")
    input3.classList.add("titleInput")
    topic.classList.add("topic")
    inputDiv.classList.add("inputDiv")
    overlayTask.classList.add("overlayTask")
    titleText.classList.add("titleText")
    titleText2.classList.add("titleText")
    titleText3.classList.add("titleText")

    inputDiv.append(cross, topic, titleText, input, titleText2, input2, titleText3, input3, cancel, save)
    overlayTask.append(inputDiv)
    body.append(overlayTask)
})