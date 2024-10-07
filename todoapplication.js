let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueno: 1
    },
    {
        text: "Learn CSS",
        uniqueno: 2
    },
    {
        text: "Learn JavaScript",
        uniqueno: 3
    }
];
let f4 = todoList.length

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + todo.uniqueno;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput" + todo.uniqueno);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = "label" + todo.uniqueno
    labelContainer.appendChild(labelElement);
    inputElement.onclick = function() {
        labelElement.classList.toggle("colorchange")
    }

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.id = "delete" + todo.uniqueno
    deleteIcon.onclick = function() {
        todoItemsContainer.removeChild(todoElement)
    }
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}
let f1 = document.getElementById("addTodoButton")
let f2 = document.getElementById("todoUserInput");
f1.onclick = function() {
    let f3 = f2.value
    addbutton(f3)
}

function addbutton(f3) {
    let array = [{
        text: f3,
        uniqueno: f4 + 1
    }]
    for (let i of array) {
        createAndAppendTodo(i)
    }
}