import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';

const routes: Routes  = [{path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class AppRoutingModule {}
export const routingComponents = [HomeComponent, AdminComponent, LoginComponent];
