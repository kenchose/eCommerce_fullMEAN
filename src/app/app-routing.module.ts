import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component'; 
import { RegisterloginComponent } from './components/registerlogin/registerlogin.component';
// import { RegisterLoginComponent } from './components/register-login/register-login.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:IndexComponent},
  {path:"registerlogin", component:RegisterloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
