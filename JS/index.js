let pageNum = localStorage.getItem("pageNum")
let mainDiv;
if(!pageNum){
    localStorage.setItem("pageNum", "0")
}
if(pageNum == 0 || !pageNum){
    let body = document.querySelector("body")
    mainDiv = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let icon = document.createElement("img")
    
    icon.src = "images/empty-folder.png"
    
    p1.textContent = "No plans yet"
    p2.textContent = "Create your first plan to get started"
    
    icon.classList.add("icon")
    p1.classList.add("p1")
    p2.classList.add("p2")
    mainDiv.classList.add("mainDiv")
    
    mainDiv.append(icon, p1, p2)
    body.append(mainDiv)
}else if(pageNum > 0){
    let card;
    let body = document.querySelector("body")
    if(mainDiv){
        mainDiv.remove()
    }
    for(let i = 1; i<=pageNum; i++){
        card = document.createElement("div")
        let titleShow = document.createElement("p")
        let planTitle = localStorage.getItem(`title${i}`)
        let binIcon = document.createElement("div")
        let arrow = document.createElement("div")
        let binAndArrow = document.createElement("div")
        let percentOverlay = document.createElement("div")
        let percentcolor = document.createElement("div")

        
        titleShow.textContent = planTitle
        
        percentOverlay.classList.add("percentOverlay")
        percentcolor.classList.add("percentcolor")
        arrow.classList.add("arrow")
        binAndArrow.classList.add("binAndArrow")
        binIcon.classList.add("binIcon")
        card.classList.add("card")
        titleShow.classList.add("title")

        binAndArrow.append(binIcon, arrow)
        card.append(titleShow, binAndArrow, percentcolor, percentOverlay)
        body.append(card)
    }
}

let newPlan = document.querySelector("button")
newPlan.addEventListener("click", ()=>{
    let body = document.querySelector("body")
    let overlay = document.createElement("div")
    let inputDiv = document.createElement("div")
    let cross = document.createElement("img")
    let topic = document.createElement("h1")
    let titleText = document.createElement("p")
    let input = document.createElement("input")
    let cancel = document.createElement("button")
    let save = document.createElement("button")

    input.placeholder = "e.g. Summer Vacation"

    cancel.textContent = "Cancel"
    save.textContent = "Save Plan"
    topic.textContent = "Create a new plan"
    titleText.textContent = "Plan Title"
    cross.src = "../images/cross.png"

    cross.addEventListener("mouseout", ()=>{
        cross.src = "../images/cross.png"
    })
    cross.addEventListener("mouseover", ()=>{
        cross.src = "../images/close.png"
    })
    cross.addEventListener("click", ()=>{
        inputDiv.classList.add("animate")
        overlay.addEventListener("animationend", ()=>{
            overlay.remove()
        })
    })
    cancel.addEventListener("click", ()=>{
        inputDiv.classList.add("animate")
        overlay.addEventListener("animationend", ()=>{
            overlay.remove()
        })
    })
    save.addEventListener("click", ()=>{
        pageNum++;
        localStorage.setItem("pageNum", pageNum)
        localStorage.setItem(`title${pageNum}`, input.value)
        location.reload()
    })

    cross.classList.add("cross")
    cancel.classList.add("cancel")
    save.classList.add("save")
    input.classList.add("titleInput")
    topic.classList.add("topic")
    inputDiv.classList.add("inputDiv")
    overlay.classList.add("overlay")
    titleText.classList.add("titleText")

    inputDiv.append(cross, topic, titleText, input, cancel, save)
    overlay.append(inputDiv)
    body.append(overlay)
})