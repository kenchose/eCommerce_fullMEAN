import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:IndexComponent},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
