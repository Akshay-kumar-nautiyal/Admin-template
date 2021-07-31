import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'admin',component:SidebarComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'account',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
