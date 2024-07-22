class TodoDomUtils {

    static createTodoElement(todo, editFunction, deleteFunction) {
        const divTodo = document.createElement('div');
        divTodo.classList.add('todo');
        divTodo.appendChild(this.createCheckbox(todo.isDone));
        divTodo.appendChild(this.createTextContent(todo.title, todo.description));
        divTodo.appendChild(this.createDueDate(todo.dueDate));
        divTodo.appendChild(this.createButtons(editFunction, deleteFunction));
        this.setTodoPriority(divTodo, todo.priority);

        return divTodo;
    }
    
    static setTodoPriority(divTodo, priority) {
        switch(parseInt(priority)) {
            case 0:
                divTodo.classList.add('low-priority');
                break;
            case 1:
                divTodo.classList.add('medium-priority');
                break;
            case 2:
                divTodo.classList.add('high-priority');
                break;
        }
    }

    static createCheckbox(isDone) {
        const chkIsDone = document.createElement('input');
        chkIsDone.type = 'checkbox';
        chkIsDone.checked = isDone;
        return chkIsDone;
    }

    static createTextContent(title, description) {
        const divTitle = document.createElement('div');
        divTitle.classList.add('todo-title');
        divTitle.textContent = title;

        const divDescription = document.createElement('div');
        divDescription.classList.add('todo-description');
        divDescription.textContent = description;

        const divTextContent = document.createElement('div');
        divTextContent.classList.add('todo-text-content');
        divTextContent.appendChild(divTitle);
        divTextContent.appendChild(divDescription);

        return divTextContent;
    }

    static createDueDate(dueDate) {
        const divDueDate = document.createElement('div');
        divDueDate.classList.add('todo-due-date');
        divDueDate.textContent = dueDate;

        return divDueDate;
    }

    static createButtons(editFunction, deleteFunction) {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('icon');
        btnEdit.classList.add('edit');
        btnEdit.onclick = editFunction;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('icon');
        btnDelete.classList.add('delete');
        btnDelete.onclick = deleteFunction;
        
        const divButtons = document.createElement('div');
        divButtons.classList.add('button-list');
        divButtons.appendChild(btnEdit);
        divButtons.appendChild(btnDelete);
        
        return divButtons;
    }
}

export default TodoDomUtils;