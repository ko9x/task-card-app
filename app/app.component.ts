import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    private tasks = [
        new Task(
             "buy a monkey",
             false
        ),
        new Task(
            "teach monkey to kill my enemies",
            false
        )
    ]
}