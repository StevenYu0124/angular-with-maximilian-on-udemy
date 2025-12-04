import { Component, computed, input, output, signal, ɵunwrapWritableSignal } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  tasks = computed(() => this._taskService.tasks().filter(task => task.userId === this.user().id));
  addTask = output<void>();
  isAddingTask = false;

  constructor(private _taskService: TasksService) {}

  startAddingTask() {
    this.isAddingTask = true;
  }

  stopAddingTask() {
    this.isAddingTask = false;
  }
}
