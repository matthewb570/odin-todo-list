class ProjectList {
    constructor(projects) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    findProjectIndex(id) {
        return this.projects.findIndex(project => project.id === id);
    }

    removeProject(id) {
        let indexToRemove = this.findProjectIndex(id);
        this.projects.splice(indexToRemove, 1);
    }
}

export default ProjectList;