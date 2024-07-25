import '../styles/styles.css';
import ProjectsPage from './projectsPage.js';
import LocalStorageUtils from './localStorageUtils.js';

const body = document.querySelector('body');

const projectList = LocalStorageUtils.readProjectList();
const dataPersistenceFunction = () => LocalStorageUtils.writeProjectList(projectList);

const projectsPage = new ProjectsPage(body, projectList, dataPersistenceFunction);
projectsPage.draw();