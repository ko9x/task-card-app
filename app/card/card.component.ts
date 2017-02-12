import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
import { AppComponent } from '../app.component';
import {  TaskService } from '../service/task.service';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})

export class CardComponent { 

  constructor(private taskService: TaskService) { }

  @Input() private task: Task;

 

  statusToggle() {
    this.task.completed = !this.task.completed;
  }

  deleteCard() {
    this.task.toDelete = !this.task.toDelete;
    this.taskService.removeTask(this.task);
  }

  



}