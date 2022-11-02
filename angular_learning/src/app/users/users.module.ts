import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersInputComponent } from './users-input/users-input.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
