import '../styles/styles.css';
import Project from './project.js';
import Todo from './todo.js';
import ProjectsPage from './projectsPage.js';
import ProjectList from './projectList.js';

// TODO: Refactor/reorganize this code as needed

// TODO: Add file read/write functionality
// TODO: Revise date formatting (optional)

const todo = new Todo('A task to complete', 'Involves various steps that need to be completed in a certain order.', '2024-07-21', 0, false);
const project = new Project('Project 1', new Array(todo));
console.log(project);
project.addTodo(new Todo('Something', 'Something', '2024-07-22', 0, false));
console.log(project);

const body = document.querySelector('body');

const projectsPage = new ProjectsPage(body, new ProjectList(new Array(project)));
projectsPage.draw();