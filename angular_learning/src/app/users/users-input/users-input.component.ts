import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-input',
  templateUrl: './users-input.component.html',
  styleUrls: ['./users-input.component.scss']
})
export class UsersInputComponent implements OnInit {
  @Input() input: { name: string; sex: string; } | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
