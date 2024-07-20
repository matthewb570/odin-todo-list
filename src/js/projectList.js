class ProjectList {
    constructor(projects) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(id) {
        let indexToRemove = this.projects.findIndex(project => project.id === id);
        this.projects.splice(indexToRemove, 1);
    }
}

export default ProjectList;