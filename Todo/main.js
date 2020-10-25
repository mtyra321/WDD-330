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
qs('body').addEventListener('onload', myTodo.displayAllTodos(myTodo.key));
qs('#All').addEventListener('click', function() {
    myTodo.displayAllTodos(myTodo.key);
});
qs('#Completed').addEventListener('click', myTodo.displayCompletedTodos);
qs('#Active').addEventListener('click', myTodo.displayActiveTodos);

function addButton() {
    console.log("add");
    const inputElement = qs('#Task').value;

    console.log("value is " + inputElement);
    myTodo.addNewTodo(inputElement, myTodo.key);
    myTodo.displayAllTodos(myTodo.key);
    qs('#Task').value = "";
}


import Todo from "./todo.js";