import TodoPageComponent from './todoPageComponent.js';
import DomUtils from './domUtils.js';
import Todo from './todo.js';

class ProjectPage {
    static createPage(container, project, returnFunction) {
        DomUtils.clearContainer(container);
        container.appendChild(ProjectPage.drawPageHeader(container, project, returnFunction));
        container.appendChild(ProjectPage.drawPageContent(project));
    }

    // TODO: Replace "draw" with "create" throughout
    static drawPageHeader(container, project, returnFunction) {
        const divPageTitle = document.createElement('div');
        divPageTitle.id = 'page-title';
        divPageTitle.textContent = project.title;

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add-todo';
        btnAdd.type = 'button';
        btnAdd.classList.add('icon', 'plus');
        btnAdd.textContent = 'Add';
        btnAdd.addEventListener('click', function() {
            // TODO: Replace with actual logic
            project.addTodo(new Todo('Title', 'Description', '07/22/2024', 1, false));
            ProjectPage.createPage(container, project, returnFunction);
        });

        const btnBack = document.createElement('button');
        btnBack.id = 'btn-back';
        btnBack.type = 'button';
        btnBack.classList.add('icon', 'back');
        btnBack.textContent = 'Back';
        btnBack.addEventListener('click', returnFunction);

        const headPageHeader = document.createElement('header');
        headPageHeader.appendChild(divPageTitle);
        headPageHeader.appendChild(btnAdd);
        headPageHeader.appendChild(btnBack);

        return headPageHeader;
    }

    static drawPageContent(project) {
        const divPageContent = document.createElement('div');
        divPageContent.id = 'content';

        divPageContent.appendChild(ProjectPage.drawTodoList(project.todos));

        return divPageContent;
    }

    static drawTodoList(todos) {
        const divTodoList = document.createElement('div');
        divTodoList.classList.add('todo-list');
        
        todos.forEach(todo => divTodoList.appendChild(TodoPageComponent.createTodoElement(todo)));

        return divTodoList;
    }
}

export default ProjectPage;