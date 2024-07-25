import Todo from "./todo";
import Project from "./project";
import ProjectList from "./projectList";

class LocalStorageUtils {
    
    static writeProjectList(projectList) {
        localStorage.projectList = JSON.stringify(projectList);
    }

    static readProjectList() {
        if (localStorage.projectList !== undefined && localStorage.projectList !== null) {
            const projectListRawObject = JSON.parse(localStorage.projectList);
            return this.parseProjectListRawObject(projectListRawObject);
        }

        return new ProjectList(new Array());
    }

    static parseProjectListRawObject(projectListRawObject) {
        const projects = new Array();
        projectListRawObject.projects.forEach(projectRawObject => projects.push(this.parseProjectRawObject(projectRawObject)));
        return new ProjectList(projects);
    }

    static parseProjectRawObject(projectRawObject) {
        const todos = new Array();
        projectRawObject.todos.forEach(todoRawObject => todos.push(this.parseTodoRawObject(todoRawObject)));
        
        const project = new Project(projectRawObject.title, todos);
        project.id = projectRawObject.id;
        
        return project;
    }

    static parseTodoRawObject(todoRawObject) {
        const todo = new Todo(todoRawObject.title, todoRawObject.description, todoRawObject.dueDate, todoRawObject.priority, todoRawObject.isDone);
        todo.id = todoRawObject.id;
        return todo;
    }
}

export default LocalStorageUtils;