import { v4 as uuidv4 } from 'uuid';

class Todo {
    constructor(title, description, dueDate, priority, isDone) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
    }

    reverseIsDone() {
        this.isDone = !this.isDone;
    }
}

export default Todo;