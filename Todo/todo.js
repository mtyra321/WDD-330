import { qs, saveToLS, getFromLS } from './utilities.js';

var todos;

function saveTodos(key) {
    console.log("saving");
    saveToLS(key, todos);
}

function loadTodos(key) {
    console.log("loading");
    return getFromLS(key);
}
class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;
        //  this.displayAllTodos(todos);
        todos = [];
        todos = getFromLS(key);
    }


    addNewTodo(text, key) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        if (todos == null) {
            todos = [];
        }
        newTodo.id = newTodo.id.toString();
        todos.push(newTodo);
        saveTodos(key);
    }
    grabTodos(key) {
        return loadTodos(key);
    }

    completeTodo(todo) {
        let complete = false;
        for (let index = 0; index < todos.length; index++) {
            const element = todos[index];
            if (todos[index].id == todo.id) {
                if (todos[index].completed == false) {
                    todos[index].completed = true;
                    console.log("changed to true");
                    todos[index].text.strike();
                    complete = true;

                } else {
                    todos[index].completed = false;

                }

            }


        }

        saveTodos(this.key);
        loadTodos(this.key);
        return complete;
    }



    clearTodos() {

    }

    deleteTodo(element, index) {
        let div = document.getElementById("div" + index);
        div.remove();
        todos.splice(index, 1);
        saveTodos(this.key);
    }



}




export default Todo;