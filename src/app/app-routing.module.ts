import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

const routes: Routes  = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}]; // must always be at the bottom

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class AppRoutingModule {}
export const routingComponents = [HomeComponent, AdminComponent, LoginComponent, PageNotFoundComponent];
