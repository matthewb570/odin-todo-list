import ProjectPage from './projectPage.js';
import DomUtils from './domUtils.js';
import NewProjectDialog from './newProjectDialog.js';

class ProjectsPage {

    parentContainer;
    projectList;
    newProjectDialog;
    pageHeader;
    dataPersistenceFunction;
    
    constructor(parentContainer, projectList, dataPersistenceFunction) {
        this.parentContainer = parentContainer;
        this.projectList = projectList;
        this.newProjectDialog = new NewProjectDialog();
        this.initializePageHeader();
        this.dataPersistenceFunction = dataPersistenceFunction;
    }

    initializePageHeader() {
        const divPageTitle = document.createElement('div');
        divPageTitle.id = 'page-title';
        divPageTitle.textContent = 'Projects';

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add';
        btnAdd.type = 'button'
        btnAdd.classList.add('icon', 'add');
        btnAdd.onclick = () => {
            this.newProjectDialog.openDialog(null, this.projectList, this.draw.bind(this), this.dataPersistenceFunction);
        };

        this.pageHeader = document.createElement('header');
        this.pageHeader.appendChild(divPageTitle);
        this.pageHeader.appendChild(btnAdd);
    }

    createPageContent() {
        const pageContent = document.createElement('div');
        pageContent.id = 'content';

        pageContent.appendChild(this.createDivProjectList());

        return pageContent;
    }

    createDivProjectList() {
        const divProjectList = document.createElement('div');
        divProjectList.classList.add('project-list');
        
        this.projectList.projects.forEach(project => divProjectList.appendChild(this.createProject(project)));

        return divProjectList;
    }

    draw() {
        DomUtils.clearContainer(this.parentContainer);
        
        this.parentContainer.appendChild(this.pageHeader);
        this.parentContainer.appendChild(this.createPageContent());
        this.newProjectDialog.draw(this.parentContainer);
    }

    createProject(project) {
        const divProject = document.createElement('div');
        divProject.classList.add('project');
        divProject.id = project.id;

        divProject.appendChild(this.createProjectTitle(project));
        divProject.appendChild(this.createProjectButtons(project));

        divProject.onclick = () => {
            const projectPage = new ProjectPage(this.parentContainer, project, this.draw.bind(this), this.dataPersistenceFunction);
            projectPage.draw();
        };

        return divProject;
    }

    createProjectTitle(project) {
        const divProjectTitle = document.createElement('div');
        divProjectTitle.classList.add('project-title');

        divProjectTitle.textContent = project.title;

        return divProjectTitle;
    }

    createProjectButtons(project) {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('edit', 'icon');
        btnEdit.type='button';

        btnEdit.addEventListener('click', (event) => {
            event.stopPropagation();
            this.newProjectDialog.openDialog(project, this.projectList, this.draw.bind(this), this.dataPersistenceFunction);
        });

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete', 'icon');
        btnDelete.type='button';
        btnDelete.addEventListener('click', (event) => {
            event.stopPropagation();
            this.projectList.removeProject(project.id);
            this.dataPersistenceFunction();
            this.draw();
        });
        
        const divProjectButtons = document.createElement('div');
        divProjectButtons.classList.add('button-list');
        divProjectButtons.appendChild(btnEdit);
        divProjectButtons.appendChild(btnDelete);

        return divProjectButtons;
    }
}

export default ProjectsPage;