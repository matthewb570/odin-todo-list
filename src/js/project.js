import { v4 as uuidv4 } from 'uuid';

class Project {
    constructor(title, todos) {
        this.id = uuidv4();
        this.title = title;
        this.todos = todos;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        let indexToRemove = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(indexToRemove, 1);
    }
}

export default Project;