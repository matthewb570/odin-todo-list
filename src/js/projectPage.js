import TodoPageComponent from './todoPageComponent.js';
import DomUtils from './domUtils.js';
import Todo from './todo.js';
import NewTodoDialog from './newTodoDialog.js';

class ProjectPage {
    
    parentContainer;
    project;
    returnFunction;
    newTodoDialog;
    pageHeader;

    constructor(parentContainer, project, returnFunction) {
        this.parentContainer = parentContainer;
        this.project = project;
        this.returnFunction = returnFunction;
        this.newTodoDialog = new NewTodoDialog();
        this.initializePageHeader();
    }
    
    initializePageHeader() {
        const divPageTitle = document.createElement('div');
        divPageTitle.id = 'page-title';
        divPageTitle.textContent = this.project.title;

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add-todo';
        btnAdd.type = 'button';
        btnAdd.classList.add('icon', 'plus');
        btnAdd.textContent = 'Add';
        btnAdd.onclick = () => {
            this.newTodoDialog.openDialog(null, this.project, this.draw.bind(this));
        };

        const btnBack = document.createElement('button');
        btnBack.id = 'btn-back';
        btnBack.type = 'button';
        btnBack.classList.add('icon', 'back');
        btnBack.textContent = 'Back';
        btnBack.onclick = this.returnFunction;

        this.pageHeader = document.createElement('header');
        this.pageHeader.appendChild(divPageTitle);
        this.pageHeader.appendChild(btnAdd);
        this.pageHeader.appendChild(btnBack);
    }

    draw() {
        DomUtils.clearContainer(this.parentContainer);

        this.parentContainer.appendChild(this.pageHeader);
        this.parentContainer.appendChild(this.createPageContent());
        this.newTodoDialog.draw(this.parentContainer);
    }
    
    createPageContent() {
        const divPageContent = document.createElement('div');
        divPageContent.id = 'content';

        divPageContent.appendChild(this.createTodoList());

        return divPageContent;
    }

    createTodoList() {
        const divTodoList = document.createElement('div');
        divTodoList.classList.add('todo-list');

        this.project.todos.forEach(todo => {
            const editFunction = () => {
                this.newTodoDialog.openDialog(todo, this.project, this.draw.bind(this));
            }
            const deleteFunction = () => {
                this.project.removeTodo(todo.id);
                this.draw();
            }
            divTodoList.appendChild(TodoPageComponent.createTodoElement(todo, editFunction, deleteFunction));
        });

        return divTodoList;
    }
}

export default ProjectPage;