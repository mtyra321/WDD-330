import { qs, saveToLS, getFromLS } from './utilities.js';

var todos;

function saveTodos(key) {
    saveToLS(key, todos);
}
class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;
        //  this.displayAllTodos(todos);
        todos = [];
    }


    addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        todos.push(newTodo);

        saveTodos(this.key);
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
        console.log("inside display all");
        todos = getFromLS(key);

        console.log("Length " + todos.length);
        let list = qs('#todoList');
        list.innerHTML = "";
        for (let index = 0; index < todos.length; index++) {
            let element = todos[index];
            //grabbing the text from the todo object
            let div = this.createListItem(element);
            list.appendChild(div);

        }

    }
    displayActiveTodos() {

        console.log("active");
        let list = qs('#todoList');
        list.innerHTML = "";
        for (let index = 0; index < todos.length; index++) {
            const element = todos[index];
            console.log(element.completed);
            if (element.completed == false) {
                console.log("in if");

                let div = this.createListItem(element);

                list.appendChild(div);
            }

        }

    }

    displayCompletedTodos() {

        console.log("complete");
        let list = qs('#todoList');
        list.innerHTML = "";
        for (let index = 0; index < todos.length; index++) {
            const element = todos[index];
            if (element.completed == true) {
                let div = this.createListItem(element);
                list.appendChild(div);

            }

        }
    }
    createListItem(element) {
        console.log("Inside createListItem");
        let text = document.createElement("p");
        text.textContent = element.text;
        text.class = "text";
        //checkmark button
        let checkButt = this.configureCheckButt(element);
        //delete button
        let deleteButt = this.configureDeleteButt(element);
        deleteButt.addEventListener('click', function() {
            z();
        });
        //div to hold everything
        let div = this.configureDiv();
        //adding the check button, text, and delete button to the div

        div.innerHTML = checkButt.outerHTML + text.outerHTML + deleteButt.outerHTML;
        return div;

    }



    configureDiv() {
        let div = document.createElement("div");
        div.classList.add('e');
        return div;
    }


    configureDeleteButt(element) {
        var deleteButt = document.createElement("button");
        deleteButt.textContent = "Delete";
        deleteButt.classList.add('deleteButt');
        console.log("COnfigure butt");
        deleteButt.addEventListener('click', Todo.z);

        return deleteButt;
    }
    configureCheckButt(element) {
        var checkButt = document.createElement("button");
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