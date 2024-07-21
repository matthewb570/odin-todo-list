import ProjectPage from './projectPage.js';
import DomUtils from './domUtils.js';
import NewProjectDialog from './newProjectDialog.js';

class ProjectsPage {
    static createPage(divContainer, projectList) {
        DomUtils.clearContainer(divContainer);
        
        const dialogNewProjectDialog = NewProjectDialog.createNewProjectDialog(projectList, () => ProjectsPage.createPage(divContainer, projectList));
        divContainer.appendChild(ProjectsPage.drawPageHeader(() => dialogNewProjectDialog.showModal()));
        divContainer.appendChild(ProjectsPage.drawPageContent(divContainer, projectList));
        divContainer.appendChild(dialogNewProjectDialog);
    }

    static drawPageHeader(addFunction) {
        const divPageTitle = document.createElement('div');
        divPageTitle.id='page-title';
        divPageTitle.textContent = 'Projects';

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add';
        btnAdd.type = 'button'
        btnAdd.classList.add('icon');
        btnAdd.textContent = 'Add';
        btnAdd.addEventListener('click', addFunction);

        const headPageHeader = document.createElement('header');
        headPageHeader.appendChild(divPageTitle);
        headPageHeader.appendChild(btnAdd);

        return headPageHeader;
    }

    static drawPageContent(projectPageContainer, projectList) {
        const divPageContent = document.createElement('div');
        divPageContent.id = 'content';

        divPageContent.appendChild(ProjectsPage.drawProjectList(projectPageContainer, projectList));
        
        return divPageContent;
    }

    static drawProjectList(projectPageContainer, projectList) {
        const divProjectList = document.createElement('div');
        divProjectList.classList.add('project-list');
        
        projectList.projects.forEach(project => divProjectList.appendChild(ProjectsPage.drawProject(projectPageContainer, project, projectList)));

        return divProjectList;
    }

    static drawProject(projectPageContainer, project, projectList) {
        const divProject = document.createElement('div');
        divProject.classList.add('project');
        divProject.id = project.id;

        divProject.appendChild(ProjectsPage.drawProjectTitle(project));
        divProject.appendChild(ProjectsPage.drawProjectButtons(projectPageContainer, project, projectList));

        const projectsPageReturnFunction = () => {
            ProjectsPage.createPage(projectPageContainer, projectList);
        }

        divProject.addEventListener('click', function() {
            ProjectPage.createPage(projectPageContainer, project, projectsPageReturnFunction);
        });

        return divProject;
    }

    static drawProjectTitle(project) {
        const divProjectTitle = document.createElement('div');
        divProjectTitle.classList.add('project-title');

        divProjectTitle.textContent = project.title;

        return divProjectTitle;
    }

    static drawProjectButtons(projectPageContainer, project, projectList) {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('edit', 'icon');
        btnEdit.type='button';

        btnEdit.addEventListener('click', function(event) {
            event.stopPropagation();
            // TODO: Add full handling
        });

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete', 'icon');
        btnDelete.type='button';
        btnDelete.addEventListener('click', function(event) {
            event.stopPropagation();
            projectList.removeProject(project.id);
            ProjectsPage.createPage(projectPageContainer, projectList)
        });
        
        const divProjectButtons = document.createElement('div');
        divProjectButtons.classList.add('button-list');
        divProjectButtons.appendChild(btnEdit);
        divProjectButtons.appendChild(btnDelete);

        return divProjectButtons;
    }
}

export default ProjectsPage;