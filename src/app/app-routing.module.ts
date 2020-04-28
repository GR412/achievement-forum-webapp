import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'leaderboards', component: LeaderboardsComponent},
  {path: 'tracker', component: TrackerComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}]; // must always be at the bottom

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class AppRoutingModule {}
export const routingComponents = [HomeComponent, TrackerComponent, LeaderboardsComponent, PageNotFoundComponent];
