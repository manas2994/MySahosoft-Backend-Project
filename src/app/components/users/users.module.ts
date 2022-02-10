import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    ListuserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
