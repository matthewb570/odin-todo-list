import Todo from "./todo";

class NewTodoDialog {

    dialog;
    form;
    header;
    txtTitle;
    txtDescription;
    selPriority;
    dtDueDate;
    btnSave;
    btnClose;

    constructor() {
        this.initializeCloseButton();
        this.initializeSaveButton();
        this.initializeHeader();
        this.initializeForm();
        this.initializeDialog();
    }

    initializeHeader() {
        const dialogTitle = document.createElement('div');
        dialogTitle.classList.add('dialog-title');
        dialogTitle.textContent = 'Todo Details';
        
        this.header = document.createElement('div');
        this.header.classList.add('dialog-header');
        this.header.appendChild(dialogTitle);
        this.header.appendChild(this.btnClose);
    }

    initializeCloseButton() {
        this.btnClose = document.createElement('button');
        this.btnClose.id = 'btn-new-todo-form-close';
        this.btnClose.classList.add('icon', 'close');
        this.btnClose.type = 'button';
        this.btnClose.onclick = () => {
            this.dialog.close();
            this.form.reset();
        };
    }

    initializeSaveButton() {
        this.btnSave = document.createElement('button');
        this.btnSave.id = 'btn-new-todo-form-save';
        this.btnSave.type = 'submit';
        this.btnSave.textContent = 'Save';
    }

    initializeForm() {
        const lblTitle = this.createFormTitleComponent();
        const lblPriority = this.createFormPriorityComponent();
        const lblDueDate = this.createFormDueDateComponent();
        const lblDescription = this.createFormDescriptionComponent();

        const divColumn1 = document.createElement('div');
        divColumn1.classList.add('form-column');
        divColumn1.appendChild(lblTitle);
        divColumn1.appendChild(lblPriority);
        divColumn1.appendChild(lblDueDate);

        const divColumn2 = document.createElement('div');
        divColumn2.classList.add('form-column');
        divColumn2.appendChild(lblDescription);

        const divFormColumns = document.createElement('div');
        divFormColumns.classList.add('form-columns');
        divFormColumns.appendChild(divColumn1);
        divFormColumns.appendChild(divColumn2);

        this.form = document.createElement('form');
        this.form.id = 'form-new-todo';
        this.form.action = 'dialog';

        this.form.appendChild(divFormColumns);
        this.form.appendChild(this.btnSave);
    }

    createFormTitleComponent() {
        const divTitleLabel = document.createElement('div');
        divTitleLabel.textContent = 'Title';

        this.txtTitle = document.createElement('input');
        this.txtTitle.id = 'txt-new-todo-title';
        this.txtTitle.name = 'txtTitle';
        this.txtTitle.type = 'text';
        this.txtTitle.required = true;

        const lblTitle = document.createElement('label');
        lblTitle.for = 'txt-new-todo-title';
        lblTitle.appendChild(divTitleLabel);
        lblTitle.appendChild(this.txtTitle);

        return lblTitle;
    }

    createFormPriorityComponent() {
        const divPriorityLabel = document.createElement('div');
        divPriorityLabel.textContent = 'Priority';

        const optLow = document.createElement('option');
        optLow.value = '0';
        optLow.textContent = 'Low';

        const optMedium = document.createElement('option');
        optMedium.value = '1';
        optMedium.textContent = 'Medium';

        const optHigh = document.createElement('option');
        optHigh.value = '2';
        optHigh.textContent = 'High';

        this.selPriority = document.createElement('select');
        this.selPriority.id = 'sel-new-todo-priority';
        this.selPriority.name = 'selPriority';
        this.selPriority.appendChild(optLow);
        this.selPriority.appendChild(optMedium);
        this.selPriority.appendChild(optHigh);

        const lblPriority = document.createElement('label');
        lblPriority.for = 'sel-new-todo-priority';
        lblPriority.appendChild(divPriorityLabel);
        lblPriority.appendChild(this.selPriority);

        return lblPriority;
    }

    createFormDueDateComponent() {
        const divDueDateLabel = document.createElement('div');
        divDueDateLabel.textContent = 'Due Date';

        this.dtDueDate = document.createElement('input');
        this.dtDueDate.id = 'dt-new-todo-due-date';
        this.dtDueDate.name = 'dtDueDate';
        this.dtDueDate.type = 'date';

        const lblDueDate = document.createElement('label');
        lblDueDate.for = 'dt-new-todo-due-date';
        lblDueDate.appendChild(divDueDateLabel);
        lblDueDate.appendChild(this.dtDueDate);

        return lblDueDate;
    }

    createFormDescriptionComponent() {
        const divDescriptionLabel = document.createElement('div');
        divDescriptionLabel.textContent = 'Description';

        this.txtDescription = document.createElement('textarea');
        this.txtDescription.id = 'txt-new-todo-description';
        this.txtDescription.name = 'txtDescription';
        this.txtDescription.required = true;

        const lblDescription = document.createElement('label');
        lblDescription.for = 'txt-new-todo-description';
        lblDescription.appendChild(divDescriptionLabel);
        lblDescription.appendChild(this.txtDescription);

        return lblDescription;
    }

    initializeDialog() {
        this.dialog = document.createElement('dialog');
        this.dialog.id = 'dialog-new-todo';
        this.dialog.appendChild(this.header);
        this.dialog.appendChild(this.form);
    }

    draw(container) {
        container.appendChild(this.dialog);
    }

    openDialog(existingTodo, project, refreshPageFunction, dataPersistenceFunction) {
        if (existingTodo !== null) {
            this.txtTitle.value = existingTodo.title;
            this.selPriority.value = existingTodo.priority;
            this.dtDueDate.value = existingTodo.dueDate;
            this.txtDescription.value = existingTodo.description;
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                if (this.form.reportValidity()) {
                    let index = project.findTodoIndex(existingTodo.id);
                    project.todos[index].title = this.txtTitle.value;
                    project.todos[index].priority = this.selPriority.value;
                    project.todos[index].dueDate = this.dtDueDate.value;
                    project.todos[index].description = this.txtDescription.value;
                    dataPersistenceFunction();
                    this.dialog.close();
                    this.form.reset();
                    refreshPageFunction();
                }
            };
        } else {
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                if (this.form.reportValidity()) {
                    let newTodo = new Todo(this.txtTitle.value, this.txtDescription.value, this.dtDueDate.value, this.selPriority.value, false);
                    project.addTodo(newTodo);
                    dataPersistenceFunction();
                    this.dialog.close();
                    this.form.reset();
                    refreshPageFunction();
                }
            };
        }
        this.dialog.showModal();
    }
}

export default NewTodoDialog;