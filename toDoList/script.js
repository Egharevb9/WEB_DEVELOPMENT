let taskname = document.getElementById("taskname")
let priority = document.getElementById("priority")
let dateInpute = document.getElementById(" dateInpute")


let form =document.getElementById("form ")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let newTasks = JSON.parse(localStorage.getItem()) || []
    let taskObject = {
        name: taskname.value,
        priority: priority.value,
        date:dateInpute.value
    }
    newTasks.push(taskObject)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    form.reset()
})
function renderData(){
    let container = document.getElementById('tasklist')
    let tasks = JSON.parse(localStorage.getElementById('tasks'))
    tasks.map(function(task){
        tasklist.inn
    })
}
 renderData(tasks)
