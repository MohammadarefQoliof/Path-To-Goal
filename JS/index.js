let btn = document.querySelector(".new")
let main = document.querySelector("body")
let htmlNum = localStorage.getItem("htmlNum")
if(!htmlNum){
    localStorage.setItem("htmlNum", "0")
}
btn.addEventListener("click", ()=>{
    let overlay = document.createElement("div")
    let topSec = document.createElement("div")
    let title = document.createElement("input")
    let taskNum = document.createElement("input")
    let priceCheck = document.createElement("input")
    let label1 = document.createElement("label")
    let text1 = document.createElement("span")
    let timeCheck = document.createElement("input")
    let label2 = document.createElement("label")
    let text2 = document.createElement("span")
    let button = document.createElement("div")

    button.textContent = "Create"
    
    text1.textContent = "Price"
    text2.textContent = "Time"
    
    timeCheck.type = "checkbox"
    timeCheck.id = "time"
    timeCheck.style.transform = "scale(1.4)"
    timeCheck.style.cursor = "pointer"
    
    priceCheck.type = "checkbox"
    priceCheck.id = "price"
    priceCheck.style.transform = "scale(1.4)"
    priceCheck.style.cursor = "pointer"
    
    label1.htmlFor = "price"
    label1.style.display = "flex";
    label1.style.gap = "8px";
    label1.style.fontSize = "30px"
    label1.style.cursor = "pointer"
    label1.style.position = "relative"
    label1.style.right = "151px"
    
    label2.htmlFor = "time"
    label2.style.display = "flex";
    label2.style.gap = "8px";
    label2.style.fontSize = "30px"
    label2.style.cursor = "pointer"
    label2.style.position = "relative"
    label2.style.right = "153px"
    
    title.maxLength = "30"
    title.placeholder = "Title"
    
    taskNum.maxLength = "2"
    taskNum.placeholder = "Tasks number"
    
    overlay.classList.add("overlay")
    topSec.classList.add("topSec")
    title.classList.add("title")
    taskNum.classList.add("title")
    button.classList.add("button")
    
    label1.append(priceCheck, text1)
    label2.append(timeCheck, text2)
    topSec.append(title, taskNum, button, label1, label2)
    overlay.append(topSec)
    main.append(overlay)
    
    button.addEventListener("click", ()=>{
        let htmlNumber = Number(localStorage.getItem("htmlNum"))
        htmlNumber += 1;
        localStorage.setItem("htmlNum", String(htmlNumber))
        localStorage.setItem(`time sec${htmlNumber}`, timeCheck.checked)
        localStorage.setItem(`price sec${htmlNumber}`, priceCheck.checked)
        localStorage.setItem(`task number sec${htmlNumber}`, taskNum.value)
        localStorage.setItem(`title sec${htmlNumber}`, title.value)
        window.location.href = `./HTML/sec${htmlNumber}.html`
    })
})