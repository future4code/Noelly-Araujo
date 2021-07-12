const tasks = ["Estudar", "Praticar exercicíos", "Tomar água"]

const task = process.argv[2]

if(!task){
    return console.log(`Was expecting at least 1 parameter for new task`)
}

tasks.push(task)

console.log(`Task ${task} added successfuly`)
console.log(tasks)