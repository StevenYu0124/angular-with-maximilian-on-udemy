import { dummyTasks } from './dummy-tasks';
import { Task } from './task/task.model';
import { NewTask } from './new-task/new-task.model';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private readonly _tasks = signal<Task[]>(dummyTasks);

    readonly tasks = this._tasks.asReadonly();

    add(newTask: NewTask): Task {
        const task: Task = {
            ...newTask,
            id: Math.random().toString(),
        };
        this._tasks.update(tasks => tasks.concat(task));
        return task;
    }

    complete(taskId: string): void {
        this._tasks.update(tasks => tasks.filter(task => task.id !== taskId));
    }
}