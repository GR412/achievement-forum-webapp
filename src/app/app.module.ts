import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { RegisterService } from './services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SiteOptionsDropdownComponent } from './components/site-options-dropdown/site-options-dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/modals/log-in/log-in.component';
import { RegisterComponent } from './components/modals/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileSettingsComponent } from './pages/settings/profile/profile-settings.component';
import { AccountSettingsComponent } from './pages/settings/account/account-settings.component';
import { SecuritySettingsComponent } from './pages/settings/security/security-settings.component';
import { ChangeUsernameComponent } from './components/modals/change-username/change-username.component';
import { ChangeEmailComponent } from './components/modals/change-email/change-email.component';
import { ChangePasswordComponent } from './components/modals/change-password/change-password.component';
import { DeleteAccountComponent } from './components/modals/delete-account/delete-account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    HeaderComponent,
    TopNavComponent,
    SiteOptionsDropdownComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent,
    SettingsComponent,
    ProfileSettingsComponent,
    AccountSettingsComponent,
    SecuritySettingsComponent,
    ChangeUsernameComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    ProfileComponent
  ],
  entryComponents: [LogInComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
