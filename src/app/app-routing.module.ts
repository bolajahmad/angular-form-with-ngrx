import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent,
    data: {
      title: 'Users Homepage'
    }
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    data: {
      title: 'Add a New User'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
