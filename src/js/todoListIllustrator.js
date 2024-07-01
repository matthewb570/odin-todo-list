// Consider refactoring this to class format

import todoIllustrator from './todoIllustrator';

const todoListIllustrator = new function() {
    
    const drawTodoList = (divContainer, todoList) => {
        divContainer.appendChild(createTodoList(todoList));
    }

    const createTodoList = (todoList) => {
        const divTodoList = document.createElement('div');
        divTodoList.classList.add('todo-list');
        for (const todo of todoList) {
            console.log(todo);
            todoIllustrator.drawTodo(divTodoList, todo);
        }

        return divTodoList;
    }

    return { drawTodoList };
}

export default todoListIllustrator;