import { dummyTasks } from './dummy-tasks';
import { Task } from './task/task.model';
import { NewTask } from './new-task/new-task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private readonly _tasks = signal<Task[]>(dummyTasks);
    readonly tasks = this._tasks.asReadonly();
    constructor() {
        const tasksString = localStorage.getItem('tasks');
        if (tasksString) {
            this._tasks.set(JSON.parse(tasksString));
        } else {
            this.save();
        }
    }

    add(newTask: NewTask): Task {
        const task: Task = {
            ...newTask,
            id: Math.random().toString(),
        };
        this._tasks.update(tasks => tasks.concat(task));
        this.save();
        return task;
    }

    complete(taskId: string): void {
        this._tasks.update(tasks => tasks.filter(task => task.id !== taskId));
        this.save();
    }

    private save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    }
}