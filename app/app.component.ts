import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent  { 
    private tasks: Task[] = [];
    private currentTask = new Task(null, false, false);


    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed, this.currentTask.toDelete);
        this.tasks.push(task);
        this.currentTask.content = null;
    }

    onClicked(task: Task) {
        const taskIndex = this.tasks.indexOf(task);
        if(task.toDelete) {
            this.tasks.splice(taskIndex, 1);
        } 
    }
}