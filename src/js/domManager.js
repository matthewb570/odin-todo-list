//TODO: Consider refactoring this to class format

import todoIllustrator from './todoIllustrator.js';
import todoListIllustrator from './todoListIllustrator.js';

const domManager = new function() {
    return { 'drawTodo': todoIllustrator.drawTodo, 'drawTodoList': todoListIllustrator.drawTodoList };
}

export default domManager;