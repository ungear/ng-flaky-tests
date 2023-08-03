import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-header',
  template: `
  <div *ngIf="user">
    <div class="name">
      {{ user.name }}
    </div>
    <a class="backoffice-link" *ngIf="user.isAdmin" href="/backoffice"></a>
  </div>
`,
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser;
  }
}
