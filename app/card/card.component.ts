import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})

export class CardComponent { 
  @Input() private task: Task;

 

  statusToggle() {
    this.task.completed = !this.task.completed;
  }

  deleteCard() {
    this.task.toDelete = !this.task.toDelete;
  }

}