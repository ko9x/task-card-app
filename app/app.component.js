"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./service/task.service');
var task_1 = require('./model/task');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.tasks = [];
        this.currentTask = new task_1.Task(null, false, false);
    }
    AppComponent.prototype.addTask = function () {
        var task = new task_1.Task(this.currentTask.content, this.currentTask.completed, this.currentTask.toDelete);
        this.taskService.addTask(task);
        this.currentTask.content = null;
        this.getTask();
    };
    AppComponent.prototype.getTask = function () {
        this.tasks = this.taskService.getTask();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map