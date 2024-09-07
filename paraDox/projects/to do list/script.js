const inputValue = document.getElementById("inputValue");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener('click', () => {
    console.log("clicked")

    const taskValue = inputValue.value.trim();

    if (taskValue) {
        let li = document.createElement('li');
        li.textContent = taskValue;

        let deleteButto = document.createElement('button')
        deleteButto.textContent = 'Delete';
        deleteButto.onclick = function () {
            taskList.removeChild(li);
        }

        li.appendChild(deleteButto);
        taskList.appendChild(li);


        taskValue.value = ""
    } else {
        alert("please enter task name")
    }

})
