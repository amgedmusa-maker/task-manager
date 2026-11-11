const taskForm = document.querySelector("#taskForm")
const taskTitle = document.querySelector("#taskTitle")
const taskCategory = document.querySelector("#taskCategory")
const taskPriority = document.querySelector("#taskPriority")
const formMessage = document.querySelector("#formMessage")

const totalTasksElement = document.querySelector("#totalTasks");
const completedTasksElement = document.querySelector("#completedTasks");
const remainingTasksElement = document.querySelector("#remainingTasks");


taskForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event){
    event.preventDefault();
    const title = taskTitle.value.trim();
    const category = taskCategory.value;
    const priority = taskPriority.value;

    if (title === ""){
        formMessage.textContent = "Task title is required";
        return;}
    if (category === ""){
        formMessage.textContent = "Please choose a category";
        return;}
    if (priority === ""){
        formMessage.textContent = "Please choose a priority";
        return;}
    console.log(title, category, priority)

    const newTask = { id: crypto.randomUUID(), title, category, priority, completed: false, createdAt: new Date().toISOString()};

tasks.push(newTask);
saveTasks();
renderTasks();
taskForm.reset();
taskTitle.focus();
formMessage.textContent = "Task added successfully.";
}

const taskList = document.querySelector("#taskList")

function renderTasks(){
    taskList.textContent = "";
    const visibleTasks = getVisibleTasks();
    if (visibleTasks.length === 0){
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "No tasks to display.";
        taskList.append(emptyMessage);
    }
    visibleTasks.forEach(function(task){
        const listItem = document.createElement("li");
        const title = document.createElement("h3");
        const details = document.createElement("p");
        const action = document.createElement("div");

                // completeButton
                
        const completeButton = document.createElement("button");
              completeButton.type = "button";
              completeButton.textContent = task.completed
                ? "Mark Incompleted"
                : "Mark Completed";
        const DeleteteButton = document.createElement("button");
              DeleteteButton.type = "button"
              DeleteteButton.textContent = "Delete";

                    // Complete Event
        completeButton.addEventListener("click", function(){
                toggleTask(task.id)})

                    // Complete Event
        DeleteteButton.addEventListener("click", function(){
                deleteTask(task.id)

        })
        title.textContent = task.title;
        details.textContent = `${task.category} - ${task.priority}`

        if (task.completed){
            listItem.classList.add("completed")}
        action.append(completeButton, DeleteteButton)
        listItem.append(title, details, completeButton, DeleteteButton, action)
        taskList.append(listItem);        


    });
updateStatistics();

}
                
                // Toggle-Function
function toggleTask(taskId){
        const task = tasks.find(function(item){
            return item.id === taskId;
        })
        if (!task) {return;}
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }

            // Deielr-Function
function deleteTask(taskId){
        tasks = tasks.filter(function(item){
            return item.id !== taskId;
        })
        saveTasks();
        renderTasks();
}
const searchInput = document.querySelector("#searchTasks");
const statusFilter = document.querySelector("#statusFilter");
let searchTerm = "";
let selectedStatus = "all";
let tasks = loadTasks();


            // Events

searchInput.addEventListener("input", function(){
    searchTerm = searchInput.value.trim().toLowerCase();
    renderTasks();
});
statusFilter.addEventListener("change", function(){
    selectedStatus = statusFilter.value;
    renderTasks();
})

                // Filter-Function
function getVisibleTasks() {
    return tasks.filter(function(task) {
        const matchesSearch = task.title
            .toLowerCase()
            .includes(searchTerm);

        const matchesStatus =
            selectedStatus === "all" ||
            (selectedStatus === "completed" && task.completed) ||
            (selectedStatus === "active" && !task.completed);
        return matchesSearch && matchesStatus;
    
    });
}
                // Statistics


    function updateStatistics(){
        const completedCount = tasks.filter(function(task){
            return task.completed
        }).length
    
        totalTasksElement.textContent = tasks.length;
        completedTasksElement.textContent = completedCount;
        remainingTasksElement.textContent = tasks.length - completedCount;
    
    }

                    // SaveFunction
    function saveTasks(){
        localStorage.setItem("amged-learning-tasks", JSON.stringify(tasks));
    }




    // let tasks = loadTasks();

    function loadTasks() {
        const savedTasks = localStorage.getItem( "amged-learning-tasks" );
        if (!savedTasks) { return []; }
         try {
            const parsedTasks = JSON.parse(savedTasks);
            return Array.isArray(parsedTasks) ? parsedTasks : []; 
        }
            catch (error) {
                 console.error("Could not load saved tasks.", error); return []; }
        }

        renderTasks();

                    // ClearDataButton
    clearTasksButton = document.querySelector("#clearTasksButton")
    clearTasksButton.addEventListener("click", function(){
        const shouldClear = window.confirm("Delete all learning tasks?");
        if (!shouldClear){
            return;
        }
        tasks = [];
        saveTasks();
        renderTasks();
    })

    console.log(getVisibleTasks());