// TODO: Consider refactoring this to class format

const todoIllustrator = new function() {
    
    const drawTodo = (divContainer, todo) => {
        divContainer.appendChild(createTodoElement(todo));
    }

    const createTodoElement = (todo) => {
        const divTodo = document.createElement('div');
        divTodo.classList.add('todo');
        divTodo.appendChild(createCheckbox(todo.isDone));
        divTodo.appendChild(createTextContent(todo.title, todo.description));
        divTodo.appendChild(createDueDate(todo.dueDate));
        divTodo.appendChild(createButtons());
        setTodoPriority(divTodo, todo.priority);

        return divTodo;
    }
    
    const setTodoPriority = (divTodo, priority) => {
        switch(priority) {
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

    const createCheckbox = (isDone) => {
        const chkIsDone = document.createElement('input');
        chkIsDone.type = 'checkbox';
        chkIsDone.checked = isDone;
        return chkIsDone;
    }

    const createTextContent = (title, description) => {
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

    const createDueDate = (dueDate) => {
        const divDueDate = document.createElement('div');
        divDueDate.classList.add('todo-due-date');
        divDueDate.textContent = dueDate;

        return divDueDate;
    }

    const createButtons = () => {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('icon');
        btnEdit.classList.add('edit');

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('icon');
        btnDelete.classList.add('delete');
        
        const divButtons = document.createElement('div');
        divButtons.classList.add('button-list');
        divButtons.appendChild(btnEdit);
        divButtons.appendChild(btnDelete);
        
        return divButtons;
    }

    return { drawTodo };
}

export default todoIllustrator;