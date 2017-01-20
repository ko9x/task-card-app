import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent { 
    private tasks: Task[] = [];
    private currentTask = new Task(null, false, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed, this.currentTask.hidden);
        this.tasks.push(task);
        this.currentTask.content = null;
    }
}