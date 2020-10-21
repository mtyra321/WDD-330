import { qs, saveToLS, getFromLS } from './utilities.js';

var todos = [];

function saveTodos(key) {
    saveToLS(key, todos);
}
class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;


    }


    addNewTodo(text, key) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        todos.push(newTodo);
        saveTodos(key);
    }

    getText() {
        return this.text;
    }

    completeTodo(todo) {

    }
    deleteTodo() {

    }

    clearTodos() {

    }

    displayAllTodos(key) {
        todos = getFromLS(key);
        console.log("Length " + todos.length);
        let list = qs('#todoList');
        list.innerHTML = "";
        for (let index = 0; index < todos.length; index++) {
            let element = todos[index];
            //grabbing the text from the todo object
            let text = document.createElement("p");
            text.textContent = element.text;
            //creating a bullet object for the list
            let bullet = document.createElement("li");
            //checkmark button
            let checkButt = document.createElement("button");
            checkButt.textContent = "  ";


            //delete button
            let deleteButt = document.createElement("button");
            deleteButt.textContent = "X";
            //div to hold everything
            let div = document.createElement("div");
            //adding the check button, text, and delete button to the div
            div.appendChild(checkButt);
            div.appendChild(text);
            div.appendChild(deleteButt);
            //adding the div to the bullet and the bullet to the list
            bullet.innerHTML = div.innerHTML;
            list.appendChild(bullet);
        }

    }



}

export default Todo;