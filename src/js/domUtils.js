class DomUtils {
    static clearContainer(containerElement) {
        while (containerElement.lastChild) {
            containerElement.removeChild(containerElement.lastChild);
        }
    }
}

export default DomUtils;