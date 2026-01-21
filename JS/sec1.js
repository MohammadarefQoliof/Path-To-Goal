let title = localStorage.getItem("title sec1")
let taskNum = localStorage.getItem("task number sec1")
let mainDiv = document.querySelector("#main")
let h1 = document.createElement("h1")
h1.textContent = title
let time = localStorage.getItem("time sec1")
let price = localStorage.getItem("price sec1")
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
        div.append(input)
        
        if(price == "true"){
            let input = document.createElement("input")
            input.id = `price${i}`
            input.type = "number"
            input.classList.add("priceInput")
            input.placeholder = `price${i}`
            div.append(input)
            localStorage.setItem("prices sec1", prices)
        }
        if(time == "true"){
            let input = document.createElement("input")
            input.id = `date${i}`
            input.type = "date"
            input.classList.add("timeInput")
            div.append(input)
            localStorage.setItem("times sec1", times)
        }
        localStorage.setItem("tasks sec1", tasks)
        mainDiv.append(div)
        mainDiv.append(button)
    }
}else{
    button.remove()
    let nameoftasks = JSON.parse(localStorage.getItem("tasks sec1"));
    
    for(let i = 0; i<nameoftasks.length; i++){
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.textContent = nameoftasks[i]
        div.classList.add("things")
        div.append(h1)
        mainDiv.append(div)
    }
    if(localStorage.getItem("prices sec1") == "true"){
        div.append(localStorage.getItem("prices"))
    }
    if(localStorage.getItem("times sec1") == "true"){
        div.append(localStorage.getItem("times"))
    }
}
button.addEventListener("click", ()=>{
    for(let i = 1; i<=taskNum; i++){
        tasks.push(document.querySelector(`#div${i}`).value)
        if(localStorage.getItem("prices sec1") == "true"){
            prices.push(document.querySelector(`#price${i}`).value)
        }
        if(localStorage.getItem("times sec1") == "true"){
            times.push(document.querySelector(`#date${i}`).value)
        }
    }
    console.log(tasks);
    console.log(prices);
    console.log(times);
    
    localStorage.setItem("tasks sec1", JSON.stringify(tasks))
    localStorage.setItem("times", times)
    localStorage.setItem("prices", prices)
    localStorage.setItem("sec1 saved", "true")
    location.reload()
})






// input.addEventListener("change", ()=>{
//     let selecteddate = new Date(input.value)
//     let today = new Date()
//     let diffMs = selecteddate - today
//     let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//     console.log(days);
// })