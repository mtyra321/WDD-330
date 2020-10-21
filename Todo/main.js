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



//qs('#addButton').addEventListener('touchend', addButton);
let Button = qs('#addButton');
Button.addEventListener('click', addButton);
qs('body').addEventListener('onload', myTodo.displayAllTodos(myTodo.key));

function addButton() {
    console.log("add");
    const inputElement = qs('#Task').value;

    console.log("value is " + inputElement);
    myTodo.addNewTodo(inputElement, myTodo.key);
    myTodo.displayAllTodos(myTodo.key);
    qs('#Task').value = "";
}


import Todo from "./todo.js";