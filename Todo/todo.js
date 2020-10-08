import { qs } from './utilities.js';
const todos = [];

function saveTodos(key) {
    saveToLS(key, todos);
}
class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;


    }


    addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        todos.push(newTodo);
        saveTodos(key);
    }
    completeTodo(todo) {

    }
}

export default Todo;