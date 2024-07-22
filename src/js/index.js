import '../styles/styles.css';
import Project from './project.js';
import Todo from './todo.js';
import ProjectsPage from './projectsPage.js';
import ProjectList from './projectList.js';

// TODO: Refactor/reorganize this code as needed

// TODO: Update styles
// TODO: Add file read/write functionality
// TODO: Revise date formatting (optional)

const todo = new Todo('A task to complete', 'Involves various steps that need to be completed in a certain order.', '2024-07-21', 0, false);
const project = new Project('Project 1', new Array(todo));
console.log(project);
project.addTodo(new Todo('Something', 'Something', '2024-07-22', 0, false));
console.log(project);
// project.removeTodo(todo.id);
// console.log(project);

const divContent = document.querySelector('#content');
const body = document.querySelector('body');

const projectsPage = new ProjectsPage(body, new ProjectList(new Array(project)));
projectsPage.draw();

// ProjectsPage.createPage(body, new ProjectList(new Array(project)));
// ProjectPage.createPage(body, project);

// const todo1 = new Todo('A task to complete', 'Involves various steps that need to be completed in a certain order.', '07/05/2024', 0, true);
// const todo2 = new Todo('Another task to complete', 'Involves additional steps that need to be completed in a certain order.', '07/06/2024', 1, false);
// const todo3 = new Todo('One more task to complete', 'Involves even more steps that need to be completed in a certain order.', '07/07/2024', 2, true);
// const todo4 = new Todo('A task to complete', 'Involves various steps that need to be completed in a certain order.', '07/05/2024', 0, true);
// const todo5 = new Todo('Another task to complete', 'Involves additional steps that need to be completed in a certain order.', '07/06/2024', 1, false);
// const todo6 = new Todo('One more task to complete', 'Involves even more steps that need to be completed in a certain order.', '07/07/2024', 2, true);
// const todo7 = new Todo('A task to complete', 'Involves various steps that need to be completed in a certain order.', '07/05/2024', 0, true);
// const todo8 = new Todo('Another task to complete', 'Involves additional steps that need to be completed in a certain order.', '07/06/2024', 1, false);
// const todo9 = new Todo('One more task to complete', 'Involves even more steps that need to be completed in a certain order.', '07/07/2024', 2, true);

// const todoList = new Array(todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9);

const todoList = new Array();

// domManager.drawTodoList(divContent, todoList);

const dialogAddTodo = document.querySelector('#dialog-add-todo');
const btnAdd = document.querySelector('#btn-add');
const btnClose = document.querySelector('#btn-close');
const btnSave = document.querySelector('#btn-save');

const txtTitle = document.querySelector('#txt-title');
const txtDescription = document.querySelector('#txt-description');
const dtDueDate = document.querySelector('#dt-due-date');
const selPriority = document.querySelector('#sel-priority');
const formAddTodo = document.querySelector('#form-add-todo');

// btnAdd.addEventListener('click', handleDialogOpen);
btnClose.addEventListener('click', handleDialogClose);
btnSave.addEventListener('click', handleSave);

function handleDialogOpen(event) {
    dialogAddTodo.showModal();
}

function handleDialogClose(event) {
    dialogAddTodo.close();
}

function handleSave(event) {
    event.preventDefault();

    if (formAddTodo.reportValidity()) {
        let todo = new Todo(txtTitle.value, txtDescription.value, dtDueDate.value, selPriority.value, false);
        todoList.push(todo);

        while (divContent.lastChild) {
            divContent.removeChild(divContent.lastChild);
        }
        domManager.drawTodoList(divContent, todoList);

        dialogAddTodo.close();
        formAddTodo.reset();
    }
}