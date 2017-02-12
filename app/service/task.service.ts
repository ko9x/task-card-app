import { Task } from '../model/task';

export class TaskService {
    private tasks: Task[] = [];

    addTask(task: Task) {
        this.tasks.push(task);
    }

    getTask() {
        return this.tasks;
    }

    removeTask(task: Task) {
        const taskIndex = this.tasks.indexOf(task);
        if (task.toDelete) {
            this.tasks.splice(taskIndex, 1);
        }
    }
}

