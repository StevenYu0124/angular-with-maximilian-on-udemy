import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();
  title = signal('');
  summary = signal('');
  dueDate = signal('');
  private _tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    const newTask: NewTask = {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
      userId: this.userId()
    };
    this._tasksService.add(newTask);
    this.close.emit();
  }
}
