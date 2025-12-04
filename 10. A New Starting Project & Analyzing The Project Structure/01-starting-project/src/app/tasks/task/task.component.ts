import { Component, inject, input, output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();

  constructor(private _tasksService: TasksService) { }

  onCompleteTask() {
    this._tasksService.complete(this.task().id);
  }
}
