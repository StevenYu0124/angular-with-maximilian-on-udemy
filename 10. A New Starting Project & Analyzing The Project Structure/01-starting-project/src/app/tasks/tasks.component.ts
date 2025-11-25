import { Component, Input, input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
}
