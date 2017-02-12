import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { TaskService } from './service/task.service';
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {

    constructor(private taskService: TaskService) {}

    private tasks: Task[] = [];
    private currentTask = new Task(null, false, false);


    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed, this.currentTask.toDelete);
        this.taskService.addTask(task)
        this.currentTask.content = null;
        this.getTask();
    }

    getTask() {
        this.tasks = this.taskService.getTask()
    }

}