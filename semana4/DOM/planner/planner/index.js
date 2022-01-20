function createTask () {
    const myInputTask = document.getElementById("tarefa")
    const optionsDays = document.getElementById("dias-semana")
    const optionsHour = document.getElementById("hora-do-dia")


    if(myInputTask.value !== ""){
        const task= document.getElementById(optionsDays.value)
        task.innerHTML += `<li onclick="done(this)"> ${optionsHour.value} - ${myInputTask.value} </li>`
        myInputTask.value = ""
    } else {
        alert ("Informe uma tarefa para iniciar sua lista")
    }
}

function done () {
    task.style.textDecoration = "line-through"
    task.style.color = "red"
}

function cleanTasks () {
    const allTasks = document.getElementsByTagName("ul")

    for(let i = 0; i < allTasks; i++) {
        allTasks[i].innerHTML = ""
    }
}