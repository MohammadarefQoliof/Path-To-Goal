let backtoplan = document.querySelector(".backtoplan");
let titles = localStorage.getItem("sec5Titles");
if(!titles){
    localStorage.setItem("sec5Titles", JSON.stringify([]));
}
let mainDiv;
backtoplan.addEventListener("click", ()=>{
    window.location.href = "../index.html";
});
let secTitle = localStorage.getItem("title5")
let titleDiv = document.querySelector(".title")
titleDiv.textContent = secTitle
let sec5TaskNum = localStorage.getItem("sec5TaskNum");
if(!sec5TaskNum){
    localStorage.setItem("sec5TaskNum", "0");
}

if(sec5TaskNum <= 0 || !sec5TaskNum){
    let body = document.querySelector("body")
    mainDiv = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let icon = document.createElement("img")
    
    icon.src = "/images/toDoList.png"
    
    p1.textContent = "No tasks in this plan"
    p2.textContent = "Add your first task to this plan to get started."
    
    icon.classList.add("icon")
    p1.classList.add("p1")
    p2.classList.add("p2")
    mainDiv.classList.add("mainDiv")
    
    mainDiv.append(icon, p1, p2)
    body.append(mainDiv)
}else{
    let card;
    let backgroundCard = document.createElement("div")
    let body = document.querySelector("body")
    backgroundCard.classList.add("backgroundCard")
    if(mainDiv){
        mainDiv.remove()
    }
    for(let i = 1; i<=sec5TaskNum; i++){
        card = document.createElement("div")
        let titleShow = document.createElement("p")
        let bin = document.createElement("div")
        let priceType = document.createElement("p")
        let dateType = document.createElement("p")
        let titleAndPrice = document.createElement("div")

        
        titleShow.textContent = JSON.parse(localStorage.getItem("sec5Titles"))[i-1]
        if(JSON.parse(localStorage.getItem("sec5Price"))[i-1] == ""){
            priceType.textContent = ""
        }else{
            priceType.textContent = `(${JSON.parse(localStorage.getItem("sec5Price"))[i-1]})`
            priceType.style.color = "grey"
        }
        if(JSON.parse(localStorage.getItem("sec5Date"))[i-1] == ""){
            dateType.textContent = ""
        }else{
            dateType.textContent = `(${JSON.parse(localStorage.getItem("sec5Date"))[i-1]})`
            dateType.style.color = "grey"
        }

        backgroundCard.style.height = `${backgroundCard.offsetHeight + 73}px`
        
        card.classList.add("card")
        bin.classList.add("bin")
        titleAndPrice.classList.add("titleAndPrice")

        bin.addEventListener("click", ()=>{
            let titlesList = JSON.parse(localStorage.getItem("sec5Titles")) || [];
            let priceList = JSON.parse(localStorage.getItem("sec5Price")) || [];
            let dateList = JSON.parse(localStorage.getItem("sec5Date")) || [];
            sec5TaskNum--;
            titlesList.splice(i-1, 1)
            priceList.splice(i-1, 1)
            dateList.splice(i-1, 1)
            localStorage.setItem("sec5TaskNum", sec5TaskNum)
            localStorage.setItem("sec5Titles", JSON.stringify(titlesList))
            localStorage.setItem("sec5Price", JSON.stringify(priceList))
            localStorage.setItem("sec5Date", JSON.stringify(dateList))
            location.reload()
        })
        
        backgroundCard.append(card)
        titleAndPrice.append(titleShow, priceType, dateType)
        card.append(titleAndPrice, bin)
        body.append(backgroundCard)
    }
    let sumText = document.querySelector(".sumText")
    let priceList = JSON.parse(localStorage.getItem("sec5Price")) || [];
    let total = priceList.reduce((acc, curr)=> acc + Number(curr), 0).toFixed(2)
    sumText.textContent = `Total: ${total}`
    localStorage.setItem("sec5Total", total)
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
    cross.src = "/images/cross.png"

    cross.addEventListener("mouseout", ()=>{
        cross.src = "/images/cross.png"
    })
    cross.addEventListener("mouseover", ()=>{
        cross.src = "/images/close.png"
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
        sec5TaskNum++;
        let titleValue = input.value;
        let priceValue = input2.value;
        let dateValue = input3.value;
        let titlesList = JSON.parse(localStorage.getItem("sec5Titles")) || [];
        let priceList = JSON.parse(localStorage.getItem("sec5Price")) || [];
        let dateList = JSON.parse(localStorage.getItem("sec5Date")) || [];
        console.log(titlesList);
        
        titlesList.push(titleValue);
        priceList.push(priceValue);
        dateList.push(dateValue);
        localStorage.setItem("sec5TaskNum", sec5TaskNum)
        localStorage.setItem("sec5Titles", JSON.stringify(titlesList))
        localStorage.setItem("sec5Price", JSON.stringify(priceList))
        localStorage.setItem("sec5Date", JSON.stringify(dateList))
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


let walletInput = document.querySelector(".walletInput")
let onTheOverlay = document.querySelector(".onTheOverlay")
let percentageText = document.querySelector(".percentage")

function updateBar() {
    let wallet = Number(walletInput.value) || 0

    let sec5TaskNum = Number(localStorage.getItem("sec5TaskNum")) || 0
    let total = Number(localStorage.getItem("sec5Total")) || 0

    if (sec5TaskNum === 0) total = 0

    let percentage = 0
    if (total > 0) {
        percentage = (wallet / total) * 100
        if (percentage > 100) percentage = 100
        if (percentage < 0) percentage = 0
        percentage = percentage.toFixed(1)
    }

    onTheOverlay.style.width = percentage + "%"
    percentageText.textContent = percentage + "%"

    localStorage.setItem("sec5WalletInput", wallet)
    localStorage.setItem("sec5Percentage", percentage)
}

walletInput.addEventListener("input", updateBar)

window.addEventListener("DOMContentLoaded", () => {
    walletInput.value = localStorage.getItem("sec5WalletInput") || ""
    updateBar()
})