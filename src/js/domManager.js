//TODO: Consider refactoring this to class format

import todoIllustrator from './todoIllustrator.js';

const domManager = new function() {
    return { 'drawTodo': todoIllustrator.drawTodo };
}

export default domManager;