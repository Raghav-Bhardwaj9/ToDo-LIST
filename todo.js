function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.textContent = taskText;
        
        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        
        // Add click event to make the task editable
        li.addEventListener("click", function() {
            li.setAttribute("contenteditable", true);
            li.focus(); // Bring focus to the editable task
        });

        // Add blur event to save the changes when focus is lost
        li.addEventListener("blur", function() {
            li.setAttribute("contenteditable", false);
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});