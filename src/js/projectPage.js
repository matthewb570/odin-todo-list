import TodoPageComponent from './todoPageComponent.js';

class ProjectPage {
    static createPage(container, project) {
        container.appendChild(ProjectPage.drawPageHeader(project.title));
        container.appendChild(ProjectPage.drawPageContent(project));
    }

    // TODO: Replace "draw" with "create" throughout
    static drawPageHeader(title) {
        const divPageTitle = document.createElement('div');
        divPageTitle.id = 'page-title';
        divPageTitle.textContent = title;

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add-todo';
        btnAdd.type = 'button';
        btnAdd.classList.add('icon', 'plus');
        btnAdd.textContent = 'Add';

        const btnBack = document.createElement('button');
        btnBack.id = 'btn-back';
        btnBack.type = 'button';
        btnBack.classList.add('icon', 'back');
        btnBack.textContent = 'Back';

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