import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersInput=[{name: 'dennis', sex:'male'}];
  constructor() { }

  ngOnInit(): void {
  }

}
