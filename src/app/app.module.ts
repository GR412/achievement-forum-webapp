import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthenticateService } from './authenticate.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SiteOptionsDropdownComponent } from './components/site-options-dropdown/site-options-dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/modals/log-in/log-in.component';
import { SignUpComponent } from './components/modals/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

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
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
