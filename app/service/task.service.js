"use strict";
var TaskService = (function () {
    function TaskService() {
        this.tasks = [];
    }
    TaskService.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskService.prototype.getTask = function () {
        return this.tasks;
    };
    TaskService.prototype.removeTask = function (task) {
        var taskIndex = this.tasks.indexOf(task);
        if (task.toDelete) {
            this.tasks.splice(taskIndex, 1);
        }
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map