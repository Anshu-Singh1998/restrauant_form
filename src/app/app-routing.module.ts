import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddResturantComponent} from './add-resturant/add-resturant.component'
import {UpdateResturantComponent} from './update-resturant/update-resturant.component'
import {LoginResturantComponent} from './login-resturant/login-resturant.component'
import {RegisterComponent} from './register/register.component'
import {ListComponent} from './list/list.component'

const routes: Routes = [
  {
    path:'add',
    component:AddResturantComponent
  },
  {
    path:'update',
    component:UpdateResturantComponent
  },
  {
    path:'login',
    component:LoginResturantComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'list',
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
