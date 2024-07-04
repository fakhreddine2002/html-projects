let todoInput = document.querySelector("#todo-input");
let todoInputContainer = document.querySelector(".todo-input");
let addBtn = document.querySelector("#add-Btn");
let errorMsg = document.querySelector(".error-msg");
let todoList = document.querySelector(".todo-list");
errorMsg.style.display="none";
addBtn.addEventListener("click",addTodo);

todoInput.addEventListener("keypress",yinzil);

function yinzil(e){
    if(e.key == "Enter"){
        addTodo();
    }
}

function addTodo(){
    let text = todoInput.value;
    // verification
    if(text==""){
        errorMsg.style.display="inline";
        todoInput.style.borderColor = "red";
        return;
    }
    errorMsg.style.display = "none";
    todoInput.style.borderColor = "black";
    //l'ajout de l'input
    let div = CreateTodo(text);
    todoList.appendChild(div);
    todoInput.value = "";
    
}


function CreateTodo(text){
    let div = document.createElement("div");
    let checkbox = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

    button.innerText = "X";
    checkbox.type = "checkbox";
    span.innerText = text;

    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(button);
    div.classList.add("todo");

    return(div);
}

