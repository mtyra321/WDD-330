//add
//remove
//complete
//sort
//due date
//write to data store
//save to data store
//remove from data store

//display



import { qs } from './utilities.js';

const myTodo = new Todo("#todoList", "todos");

document.getElementById("Task").addEventListener("keydown", function(e) {
    if (e.key === "Enter") { //checks whether the pressed key is "Enter"
        e.preventDefault();
        addButton();
    }

});

//qs('#addButton').addEventListener('touchend', addButton);
let Button = qs('#addButton');
Button.addEventListener('click', addButton);
qs('body').addEventListener('onload', displayAllTodos(myTodo.key));
qs('#All').addEventListener('click', function() {
    displayAllTodos(myTodo.key);
});
qs('#Completed').addEventListener('click', function() { displayCompletedTodos(myTodo.key) });
qs('#Active').addEventListener('click', function() {
    displayActiveTodos(myTodo.key)
});

function addButton() {
    const inputElement = qs('#Task').value;

    myTodo.addNewTodo(inputElement, myTodo.key);
    displayAllTodos(myTodo.key);
    qs('#Task').value = "";
}

function displayAllTodos(key) {
    myTodo.todos = myTodo.grabTodos(key);
    if (myTodo.todos == null) {
        myTodo.todos = [];
    }
    let list = qs('#todoList');
    list.innerHTML = "";
    for (let index = 0; index < myTodo.todos.length; index++) {
        let element = myTodo.todos[index];
        //grabbing the text from the todo object
        let div = createListItem(myTodo.todos[index], index);
        list.appendChild(div);

    }
}

function displayActiveTodos(key) {
    myTodo.todos = myTodo.grabTodos(key);

    console.log("active");
    let list = qs('#todoList');
    list.innerHTML = "";
    for (let index = 0; index < myTodo.todos.length; index++) {
        const element = myTodo.todos[index];
        if (element.completed == false) {

            let div = createListItem(element, index);
            list.appendChild(div);
        }

    }

}

function createListItem(element, index) {
    let text = document.createElement("p");
    text.textContent = element.text;
    text.class = "text";
    if (element.completed == true) {
        text.textDecoration = "line-through";
    }
    //checkmark button
    let checkButt = configureCheckButt(element, index);
    //delete button
    let deleteButt = configureDeleteButt(element, index);
    //div to hold everything
    let div = configureDiv(index);
    //adding the check button, text, and delete button to the div
    div.appendChild(checkButt);
    div.appendChild(text);
    div.appendChild(deleteButt);

    return div;

}

function displayCompletedTodos(key) {
    myTodo.todos = myTodo.grabTodos(key);

    let list = qs('#todoList');
    list.innerHTML = "";
    for (let index = 0; index < myTodo.todos.length; index++) {
        const element = myTodo.todos[index];
        if (element.completed == true) {
            let div = createListItem(element, index);
            list.appendChild(div);

        }

    }
}

function configureDiv(index) {
    let div = document.createElement("div");
    div.classList.add('e');
    div.id = "div" + index;
    return div;
}


function configureDeleteButt(element, index) {
    var deleteButt = document.createElement("button");
    deleteButt.textContent = "Delete";
    deleteButt.classList.add('deleteButt');
    deleteButt.addEventListener('click', function() {
        myTodo.deleteTodo(element, index);
    });

    return deleteButt;
}

function configureCheckButt(element, index) {

    var checkButt = document.createElement("button");
    checkButt.textContent = "Check Off";
    checkButt.classList.add('checkButt');
    console.log(element.completed);
    console.log(element.completed);
    if (element.completed == true) {
        checkButt.style.backgroundColor = "#7FFF00";
        checkButt.textContent = "Complete";

    } else {
        checkButt.style.backgroundColor = "#FF0000";
        checkButt.textContent = "Check Off";

    }
    checkButt.addEventListener('click', function() {
        let complete = myTodo.completeTodo(element);
        if (complete == true) {
            checkButt.style.backgroundColor = "#7FFF00";
            checkButt.textContent = "Complete";
        } else {
            checkButt.style.backgroundColor = "#FF0000";
            checkButt.textContent = "Check Off";

        }
    });
    return checkButt;
}




import Todo from "./todo.js";