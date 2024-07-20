class ProjectsPage {
    static createPage(divContainer, projectList) {
        divContainer.appendChild(ProjectsPage.drawPageHeader());
        divContainer.appendChild(ProjectsPage.drawPageContent(projectList));
    }

    static drawPageHeader() {
        const divPageTitle = document.createElement('div');
        divPageTitle.id='page-title';
        divPageTitle.textContent = 'Projects';

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add';
        btnAdd.type='button'
        btnAdd.classList.add('icon');
        btnAdd.textContent = 'Add';

        const headPageHeader = document.createElement('header');
        headPageHeader.appendChild(divPageTitle);
        headPageHeader.appendChild(btnAdd);

        return headPageHeader;
    
    }

    static drawPageContent(projectList) {
        const divPageContent = document.createElement('div');
        divPageContent.id = 'content';

        divPageContent.appendChild(ProjectsPage.drawProjectList(projectList));
        
        return divPageContent;
    }

    static drawProjectList(projectList) {
        const divProjectList = document.createElement('div');
        divProjectList.classList.add('project-list');
        
        projectList.projects.forEach(project => divProjectList.appendChild(ProjectsPage.drawProject(project)));

        return divProjectList;
    }

    static drawProject(project) {
        const divProject = document.createElement('div');
        divProject.classList.add('project');
        divProject.id = project.id;

        divProject.appendChild(ProjectsPage.drawProjectTitle(project.title));
        divProject.appendChild(ProjectsPage.drawProjectButtons());

        return divProject;
    }

    static drawProjectTitle(projectTitle) {
        const divProjectTitle = document.createElement('div');
        divProjectTitle.classList.add('project-title');

        divProjectTitle.textContent = projectTitle;

        return divProjectTitle;
    }

    static drawProjectButtons() {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('edit', 'icon');
        btnEdit.type='button';

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete', 'icon');
        btnDelete.type='button';
        
        const divProjectButtons = document.createElement('div');
        divProjectButtons.classList.add('button-list');
        divProjectButtons.appendChild(btnEdit);
        divProjectButtons.appendChild(btnDelete);

        return divProjectButtons;
    }
}

export default ProjectsPage;