import Project from "./project";

class NewProjectDialog {

    dialog;
    form;
    txtTitle;
    btnSave;
    btnClose;

    constructor() {
        this.initializeCloseButton()
        this.initializeSaveButton();
        this.initializeForm();
        this.initializeDialog();
    }

    initializeCloseButton() {
        this.btnClose = document.createElement('button');
        this.btnClose.id = 'btn-new-project-form-close';
        this.btnClose.textContent = 'Close';
        this.btnClose.addEventListener('click', () => {
            this.dialog.close();
            this.form.reset();
        })
    }

    initializeSaveButton() {
        this.btnSave = document.createElement('button');
        this.btnSave.id = 'btn-save-new-project';
        this.btnSave.type = 'submit';
        this.btnSave.textContent = 'Save';
    }

    initializeForm() {
        const divTitleLabel = document.createElement('div');
        divTitleLabel.textContent = 'Title';

        this.txtTitle = document.createElement('input');
        this.txtTitle.id = 'txt-new-project-title';
        this.txtTitle.name = 'txtTitle';
        this.txtTitle.type = 'text';

        const lblTitle = document.createElement('label');
        lblTitle.for = 'txt-title';
        lblTitle.appendChild(divTitleLabel);
        lblTitle.appendChild(this.txtTitle);


        this.form = document.createElement('form');
        this.form.id = 'form-new-project';
        this.form.action = 'dialog';
        
        this.form.appendChild(lblTitle);
        this.form.appendChild(this.btnSave);
    }

    initializeDialog() {
        this.dialog = document.createElement('dialog');
        this.dialog.id = 'dialog-new-project';
        this.dialog.appendChild(this.btnClose);
        this.dialog.appendChild(this.form);
    }

    draw(container) {
        container.appendChild(this.dialog);
    }

    openDialog(existingProject, projectList, refreshPageFunction) {
        if (existingProject !== null) {
            this.txtTitle.value = existingProject.title;
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                let index = projectList.findProjectIndex(existingProject.id);
                projectList.projects[index].title = this.txtTitle.value;
                this.dialog.close();
                this.form.reset();
                refreshPageFunction();
            };
        } else {
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                let newProject = new Project(this.txtTitle.value, new Array());
                projectList.addProject(newProject);
                this.dialog.close();
                this.form.reset();
                refreshPageFunction();
            };
        }
        this.dialog.showModal();
    }
}

export default NewProjectDialog;