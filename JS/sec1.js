let title = localStorage.getItem("sec1 title")
let taskNum = Number(localStorage.getItem("sec1 task number"))
let mainDiv = document.querySelector("#main")
let h1 = document.createElement("h1")
h1.textContent = title
let time = localStorage.getItem("sec1 boolean time")
let price = localStorage.getItem("sec1 boolean price")
mainDiv.append(h1)
let button = document.createElement("div")
button.classList.add("savebutton")
button.textContent = "Save"


if(!localStorage.getItem("sec1 saved")){
    localStorage.setItem("sec1 saved", "false")
}


let tasks = []
let prices = []
let times = []
if(localStorage.getItem("sec1 saved") == "false"){
    for(let i = 1; i<=taskNum; i++){
        let div = document.createElement("div")
        div.style.height = "70px"
        let input = document.createElement("input")
        input.id = `div${i}`
        input.classList.add("input")
        input.placeholder = `Task ${i}`
        input.maxLength = 12
        div.append(input)
        
        if(price == "true"){
            let input = document.createElement("input")
            input.id = `price${i}`
            input.type = "number"
            input.classList.add("priceInput")
            input.placeholder = `price${i}`
            div.append(input)
        }
        if(time == "true"){
            let input = document.createElement("input")
            input.id = `date${i}`
            input.type = "date"
            input.classList.add("timeInput")
            div.append(input)
            localStorage.setItem("sec1 times", times)
        }
        localStorage.setItem("sec1 tasks", tasks)
        mainDiv.append(div)
        mainDiv.append(button)
    }
}else{
    button.remove()
    let nameoftasks = JSON.parse(localStorage.getItem("sec1 tasks"));
    let myPrices = JSON.parse(localStorage.getItem("sec1 prices"));
    let myDate = JSON.parse(localStorage.getItem("sec1 times"));
    
    for(let i = 0; i<nameoftasks.length; i++){
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.textContent = nameoftasks[i]
        div.classList.add("things")
        h1.classList.add("words")
        div.append(h1)
        if(price == "true"){
            let text = document.createElement("h1")
            text.classList.add("prices")
            text.textContent = `${myPrices[i]} AZN`
            div.append(text)
        }
        if(time == "true"){
            let text = document.createElement("h1")
            text.classList.add("prices")
            let selecteddate = new Date(myDate[i])
            let today = new Date()
            let diffMs = selecteddate - today
            let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            text.textContent = `${days} days left`
            div.append(text)          
        }
        mainDiv.append(div)
    }
    
    if(localStorage.getItem("sec1 boolean price") == "true"){
        let div = document.createElement("div")
        let divInputButton = document.createElement("div")
        let text = document.createElement("h1")
        let input = document.createElement("input")
        let confrimButton = document.createElement("div")
        let percent = document.createElement("p")
        let completeBar = document.createElement("div")
        let completed = document.createElement("div")
    
        input.type = "text"
        input.maxLength = 5
        input.placeholder = "Current balance"
    
        confrimButton.textContent = "NEXT"
        
        div.classList.add("things", "total")
        text.classList.add("words", "nowidth")
        input.classList.add("balanceInput")
        confrimButton.classList.add("confirm")
        divInputButton.classList.add("divInputButton")
        percent.classList.add("percent")
        completeBar.classList.add("completeBar")
        completed.classList.add("completed")
        
        if(!localStorage.getItem("sec1 total")){
            localStorage.setItem("sec1 total", "0")
        }
        
        if(!localStorage.getItem("sec1 percentage")){
            localStorage.setItem("sec1 percentage", "0")
        }
        if(!localStorage.getItem("sec1 width")){
            localStorage.setItem("sec1 width", "0")
        }
    
        let total = Number(localStorage.getItem("sec1 total"))
        for(let i = 0; i < myPrices.length; i++){
            total += Number(myPrices[i])
        }
    
        text.textContent = `Total: ${total} AZN`
        percent.textContent = `${localStorage.getItem("sec1 percentage")}%`
        completed.style.width = `${localStorage.getItem("sec1 width")}px`
        
        input.classList.remove("shakeAnimation")
    
        confrimButton.addEventListener("click", ()=>{
            if(isNaN(input.value) || input.value == ""){
                input.classList.add("shakeAnimation")
            }else{
                input.classList.remove("shakeAnimation")
                let num = (input.value * 100) / total
                let fullPercent = Math.floor(num)
                let widthSize = (790 * fullPercent) / 100
                if(fullPercent > 100){
                    fullPercent = 100
                }else if(fullPercent < 0){
                    fullPercent = 0
                }
                if(widthSize > 790){
                    widthSize = 790
                }else if(widthSize < 0){
                    widthSize = 0
                }
                localStorage.setItem("sec1 percentage", fullPercent)
                localStorage.setItem("sec1 width", widthSize)
                completed.style.width = `${localStorage.getItem("sec1 width")}px`
                percent.textContent = `${localStorage.getItem("sec1 percentage")}%`
            }
            input.value = ""
        })
        divInputButton.append(input, confrimButton)
        completeBar.append(completed)
        div.append(text)
        mainDiv.append(div, divInputButton, percent, completeBar)
    }
    
}
button.addEventListener("click", ()=>{
    for(let i = 1; i<=taskNum; i++){
        tasks.push(document.querySelector(`#div${i}`).value)
        if(price == "true"){
            prices.push(document.querySelector(`#price${i}`).value)
        }
        if(time == "true"){
            times.push(document.querySelector(`#date${i}`).value)
        }
    }
    console.log(tasks);
    console.log(prices);
    console.log(times);
    
    localStorage.setItem("sec1 tasks", JSON.stringify(tasks))
    localStorage.setItem("sec1 times", JSON.stringify(times))
    localStorage.setItem("sec1 prices", JSON.stringify(prices))
    localStorage.setItem("sec1 saved", "true")
    location.reload()
})