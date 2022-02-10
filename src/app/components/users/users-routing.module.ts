import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [{
  path: '', children: [
    { path: 'add-user', component: AddUserComponent },
    { path: 'list-user', component: ListuserComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
