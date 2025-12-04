import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { User } from './user/user.model';
import { TasksComponent} from "./tasks/tasks.component";
import { type Task } from './tasks/task/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks: Task[] = [];
  selectedUser? : User;
  

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
