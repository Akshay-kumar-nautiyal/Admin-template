import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'admin',component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
