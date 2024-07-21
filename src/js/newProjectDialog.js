import Project from "./project";

class NewProjectDialog {
    static createNewProjectDialog(projectList, createProjectsPage) {
        const dialogNewProject = document.createElement('dialog');
        dialogNewProject.id = 'dialog-new-project';

        dialogNewProject.appendChild(NewProjectDialog.createCloseButton((event) => {
            dialogNewProject.close();
        }));

        dialogNewProject.appendChild(NewProjectDialog.createForm(projectList, dialogNewProject, createProjectsPage));

        return dialogNewProject;
    }

    static createForm(projectList, dialogNewProject, createProjectsPage) {
        const divTitleLabel = document.createElement('div');
        divTitleLabel.textContent = 'Title';

        const txtTitle = document.createElement('input');
        txtTitle.id = 'txt-new-project-title';
        txtTitle.name = 'txtTitle';
        txtTitle.type = 'text';

        const lblTitle = document.createElement('label');
        lblTitle.for = 'txt-title';
        lblTitle.appendChild(divTitleLabel);
        lblTitle.appendChild(txtTitle);
        
        const formNewProject = document.createElement('form');
        formNewProject.id = 'form-new-project';
        formNewProject.action = 'dialog';
        
        formNewProject.appendChild(lblTitle);

        const saveFunction = (event) => {
            event.preventDefault();
            
            if (formNewProject.reportValidity()) {
                let project = new Project(txtTitle.value, new Array());
                projectList.addProject(project);

                createProjectsPage();

                dialogNewProject.close();
                formNewProject.reset();
            }
        }

        formNewProject.appendChild(NewProjectDialog.createSaveButton(saveFunction));

        return formNewProject;
    }

    static createCloseButton(closeFunction) {
        const btnClose = document.createElement('button');
        btnClose.id = 'btn-new-project-form-close';
        btnClose.textContent = 'Close';
        btnClose.addEventListener('click', closeFunction);

        return btnClose;
    }

    static createSaveButton(saveFunction) {
        const btnSave = document.createElement('button');
        btnSave.id = 'btn-save-new-project';
        btnSave.type = 'submit';
        btnSave.textContent = 'Save';
        btnSave.addEventListener('click', saveFunction);

        return btnSave;
    }
}

export default NewProjectDialog;