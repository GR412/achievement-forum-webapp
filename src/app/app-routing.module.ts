import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileSettingsComponent } from './pages/settings/profile/profile-settings.component';
import { AccountSettingsComponent } from './pages/settings/account/account-settings.component';
import { SecuritySettingsComponent } from './pages/settings/security/security-settings.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'leaderboards', component: LeaderboardsComponent},
  {path: 'tracker', component: TrackerComponent},
  {path: 'home', component: HomeComponent},
  {path: 'settings', component: SettingsComponent,
    children:
      [
        {path: '', pathMatch: 'full', redirectTo: 'profile'}, // Set the default settings route to be the child profile route
        {path: 'profile', component: ProfileSettingsComponent},
        {path: 'account', component: AccountSettingsComponent},
        {path: 'security', component: SecuritySettingsComponent}
      ]},
  {path: '**', component: PageNotFoundComponent}]; // must always be at the bottom

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents =
  [
    HomeComponent,
    TrackerComponent,
    LeaderboardsComponent,
    SettingsComponent,
    ProfileSettingsComponent,
    AccountSettingsComponent,
    SecuritySettingsComponent,
    PageNotFoundComponent
  ];
