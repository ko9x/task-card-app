"use strict";
var Task = (function () {
    function Task(content, completed, toDelete) {
        this.content = content;
        this.completed = completed;
        this.toDelete = toDelete;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map