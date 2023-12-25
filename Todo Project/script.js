// Finding Elements
const todoBody = document.querySelector(".elements-todo");
const todoForm = document.querySelector(".form-todo");
const todoInputs = document.querySelector("#input-todo");
const todoButton = document.querySelector("#button-todo");
const todoList = document.getElementById("list-todo");
const todoMessage = document.getElementById("message");

// Load Data from LocalStorage
const dataFromLocalStorage = () => {
    return localStorage.getItem("MyTodos") ? JSON.parse(localStorage.getItem("MyTodos")) : [];
}

// Show Message
const showMessage = (text,status) => {
    todoMessage.textContent=text;
    todoMessage.classList.add(`message-${status}`);
    setTimeout(()=>{
        todoMessage.textContent="";
        todoMessage.classList.remove(`message-${status}`);
    },1000)
}

// Delete Todos
const deleteTobo = (e) => {
    const item = e.target.parentElement.parentElement;
    todoList.removeChild(item);
    const todoID = item.id;
    let todos = dataFromLocalStorage();
    todos = todos.filter((todo)=> todo.todoId !== item.id);
    localStorage.setItem("MyTodos",JSON.stringify(todos));
    showMessage("Todo is deleted","danger")
}

// Creating New Todos
const createTodo = (todoId, inputValue) => {
    const todoElements = document.createElement("li");
    todoElements.id = todoId;
    todoElements.classList.add("list-style")
    todoElements.innerHTML = `
    <span>${inputValue}</span>
    <button class="button-todo" id="delete-button"><i class="fa-solid fa-trash"></i></button>
    `;
    todoList.appendChild(todoElements);
    const deleteBtn = todoElements.querySelector("#delete-button");
    deleteBtn.addEventListener("click",deleteTobo);
}

// Adding Todo
const addTodo = (event) => {
    event.preventDefault();
    const text = "Todo added successfully"
    const inputValue = todoInputs.value;
    const todoId = Date.now().toString();
    createTodo(todoId, inputValue);
    showMessage(text,"success");

    // Save Todos in LocalStorage
    const todoItems = dataFromLocalStorage();
    todoItems.push({todoId, inputValue});
    localStorage.setItem("MyTodos",JSON.stringify(todoItems));
    todoInputs.value=" ";
}

// Load Todos
const loadTodo = () => {
    const data = dataFromLocalStorage();
    data.map((todo) => createTodo(todo.todoId, todo.inputValue));
}

// Adding Listeners
todoForm.addEventListener("submit",addTodo);
window.addEventListener("DOMContentLoaded",loadTodo)
