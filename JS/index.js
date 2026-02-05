let btn = document.querySelector(".new")
let main = document.querySelector("body")
let htmlNum = localStorage.getItem("htmlNum")
let mainDiv = document.querySelector("#main")


for(let i = 1; i<=5; i++){
    if(localStorage.getItem(`sec${i} saved`) == "true"){
        if(localStorage.getItem(`sec${i} boolean price`) == "false"){
            let div = document.createElement("div")
            let overlay = document.createElement("div")
            let titleText = document.createElement("p")
            let percentText = document.createElement("p")
            let remove = document.createElement("div")
            percentText.style.zIndex = "1"

            remove.textContent = "Remove"
            
            remove.classList.add("removeBtn")
            div.classList.add("box")
            overlay.classList.add("overlay2")
            titleText.classList.add("titleText")
            
            titleText.addEventListener("click", ()=>{
                window.location.href = `../HTML/sec${i}.html`
            })
            
            title = localStorage.getItem(`sec${i} title`)
            titleText.textContent = title
            
            let checkedNum = Number(localStorage.getItem(`sec${i} checked num`))
            console.log(checkedNum);
            
            let taskNum = Number(localStorage.getItem(`sec${i} task number`))
            let percent = Math.round((checkedNum * 100) / taskNum);
            let widthsize = (961 * percent) / 100
            overlay.style.width = `${widthsize}px`
            percentText.textContent = `${percent}%`
            
            remove.addEventListener("click", ()=>{
                let no1 = localStorage.getItem(`sec${i} boolean price`)
                let no2 = localStorage.getItem(`sec${i} boolean time`)
                let no3 = localStorage.getItem(`sec${i} checked`)
                let no4 = localStorage.getItem(`sec${i} checked num`)
                let no5 = localStorage.getItem(`sec${i} prices`)
                let no6 = localStorage.getItem(`sec${i} saved`)
                let no7 = localStorage.getItem(`sec${i} task number`)
                let no8 = localStorage.getItem(`sec${i} tasks`)
                let no9 = localStorage.getItem(`sec${i} times`)
                let no10 = localStorage.getItem(`sec${i} title`)
                localStorage.removeItem(`sec${i} boolean price`)
                localStorage.removeItem(`sec${i} boolean time`)
                localStorage.removeItem(`sec${i} checked`)
                localStorage.removeItem(`sec${i} checked num`)
                localStorage.removeItem(`sec${i} prices`)
                localStorage.removeItem(`sec${i} saved`)
                localStorage.removeItem(`sec${i} task number`)
                localStorage.removeItem(`sec${i} tasks`)
                localStorage.removeItem(`sec${i} times`)
                localStorage.removeItem(`sec${i} title`)
                if(i != 5 && htmlNum != 1){
                    localStorage.setItem(`sec${i + 1} boolean price`, no1)
                    localStorage.setItem(`sec${i + 1} boolean time`, no2)
                    localStorage.setItem(`sec${i + 1} checked`, no3)
                    localStorage.setItem(`sec${i + 1} checked num`, no4)
                    localStorage.setItem(`sec${i + 1} prices`, no5)
                    localStorage.setItem(`sec${i + 1} saved`, no6)
                    localStorage.setItem(`sec${i + 1} task number`, no7)
                    localStorage.setItem(`sec${i + 1} tasks`, no8)
                    localStorage.setItem(`sec${i + 1} times`, no9)
                    localStorage.setItem(`sec${i + 1} title`, no10)
                }
                htmlNum -= 1
                localStorage.setItem("htmlNum", htmlNum)
                location.reload()
            })

            div.append(titleText, overlay, remove, percentText)
            btn.before(div)
        }else{
            let div = document.createElement("div")
            let overlay = document.createElement("div")
            let titleText = document.createElement("p")
            let percentText = document.createElement("p")
            let remove = document.createElement("div")
            percentText.style.zIndex = "1"

            remove.textContent = "Remove"
            
            remove.classList.add("removeBtn")
            div.classList.add("box")
            overlay.classList.add("overlay2")
            titleText.classList.add("titleText")
            
            titleText.addEventListener("click", ()=>{
                window.location.href = `../HTML/sec${i}.html`
            })
            
            title = localStorage.getItem(`sec${i} title`)
            titleText.textContent = title
            let percentage = Math.round(Number(localStorage.getItem(`sec${i} percentage`)));
            let percent = Math.round((961 * percentage) / 100)
            
            if(percent > 961){
                percent = 961
            }else if(percent < 0){
                percent = 0
            }
            overlay.style.width = `${percent}px`
            percentText.textContent = `${percentage}%`

            remove.addEventListener("click", ()=>{
                let no1 = localStorage.getItem(`sec${i} boolean price`)
                let no2 = localStorage.getItem(`sec${i} boolean time`)
                let no3 = localStorage.getItem(`sec${i} checked`)
                let no4 = localStorage.getItem(`sec${i} checked num`)
                let no5 = localStorage.getItem(`sec${i} prices`)
                let no6 = localStorage.getItem(`sec${i} saved`)
                let no7 = localStorage.getItem(`sec${i} task number`)
                let no8 = localStorage.getItem(`sec${i} tasks`)
                let no9 = localStorage.getItem(`sec${i} times`)
                let no10 = localStorage.getItem(`sec${i} title`)
                localStorage.removeItem(`sec${i} boolean price`)
                localStorage.removeItem(`sec${i} boolean time`)
                localStorage.removeItem(`sec${i} checked`)
                localStorage.removeItem(`sec${i} checked num`)
                localStorage.removeItem(`sec${i} prices`)
                localStorage.removeItem(`sec${i} saved`)
                localStorage.removeItem(`sec${i} task number`)
                localStorage.removeItem(`sec${i} tasks`)
                localStorage.removeItem(`sec${i} times`)
                localStorage.removeItem(`sec${i} title`)
                if(i != 5 && htmlNum != 1){
                    localStorage.setItem(`sec${i + 1} boolean price`, no1)
                    localStorage.setItem(`sec${i + 1} boolean time`, no2)
                    localStorage.setItem(`sec${i + 1} checked`, no3)
                    localStorage.setItem(`sec${i + 1} checked num`, no4)
                    localStorage.setItem(`sec${i + 1} prices`, no5)
                    localStorage.setItem(`sec${i + 1} saved`, no6)
                    localStorage.setItem(`sec${i + 1} task number`, no7)
                    localStorage.setItem(`sec${i + 1} tasks`, no8)
                    localStorage.setItem(`sec${i + 1} times`, no9)
                    localStorage.setItem(`sec${i + 1} title`, no10)
                }
                htmlNum -= 1
                localStorage.setItem("htmlNum", htmlNum)
                location.reload()
            })
            
            div.append(titleText, overlay, remove, percentText)
            btn.before(div)
        }
    }
    
}

if(!htmlNum){
    localStorage.setItem("htmlNum", "0")    

}
if(htmlNum == 5){
    btn.remove()
}else{
    mainDiv.append(btn)
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
    
    title.maxLength = 30
    title.placeholder = "Title"
    
    taskNum.type = "Text"
    taskNum.maxLength = 2
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

    taskNum.classList.remove("shakeAnimation")
    title.classList.remove("shakeAnimation")
    
    button.addEventListener("click", ()=>{
        let htmlNumber = Number(localStorage.getItem("htmlNum"))
        htmlNumber += 1;
        if(title.value == ""){
            taskNum.classList.remove("shakeAnimation")
            title.classList.add("shakeAnimation")
        }else if(taskNum.value == "" || isNaN(taskNum.value)){
            title.classList.remove("shakeAnimation")
            taskNum.classList.add("shakeAnimation")
        }else{
            localStorage.setItem("htmlNum", String(htmlNumber))
            localStorage.setItem(`sec${htmlNumber} boolean time`, timeCheck.checked)
            localStorage.setItem(`sec${htmlNumber} boolean price`, priceCheck.checked)
            localStorage.setItem(`sec${htmlNumber} task number`, taskNum.value)
            localStorage.setItem(`sec${htmlNumber} title`, title.value)
            window.location.href = `./HTML/sec${htmlNumber}.html`
        }
    })
})