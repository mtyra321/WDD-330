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

    z() {
        console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    }

    clearTodos() {

    }
    a() {
        console.log("aaaaaaaaaaaaaaaaaaaaa");
        return false;
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
            text.class = "text";
            //checkmark button
            let checkButt = this.configureCheckButt(element);
            //delete button
            let deleteButt = this.configureDeleteButt(element);
            //  deleteButt.setAttribute('onClick', 'this.z');
            //deleteButt.onclick = this.z;

            //  checkButt.setAttribute('onClick', "this.a");
            deleteButt = tester(deleteButt);
            // deleteButt.onclick = function() { this.z(); };
            // console.log(deleteButt.onclick);
            // deleteButt.onclick = function() {
            //     console.log("asdfhj");
            // };
            //div to hold everything
            let div = this.configureDiv();
            //adding the check button, text, and delete button to the div
            // div.appendChild(checkButt);
            // div.appendChild(text);
            // div.appendChild(deleteButt);
            div.innerHTML = checkButt.outerHTML + text.outerHTML + deleteButt.outerHTML;

            //adding the div to the bullet and the bullet to the list
            list.appendChild(div);
        }

    }

    configureDiv() {
        let div = document.createElement("div");
        div.classList.add('e');
        // div.class = "flex-container";
        return div;
    }


    configureDeleteButt(element) {
        let deleteButt = document.createElement("button");
        deleteButt.textContent = "Delete";
        deleteButt.classList.add('deleteButt');


        return deleteButt;
    }
    configureCheckButt(element) {
        let checkButt = document.createElement("button");
        checkButt.textContent = "Check Off";
        checkButt.classList.add('checkButt');

        return checkButt;
    }




}


function tester(deleteButt) {
    deleteButt.addEventListener('click', w);
    console.log("test");
    return deleteButt;
}

function w() {
    console.log("w");
}
export default Todo;