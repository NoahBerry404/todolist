import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewListComponent } from './view-list/view-list.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: 'add-item', component: AddItemComponent },
  { path: 'view-list', component: ViewListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
