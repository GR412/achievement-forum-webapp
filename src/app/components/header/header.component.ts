import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { LogInComponent } from '../modals/log-in/log-in.component';
import { SignUpComponent } from '../modals/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public siteOptionsToggle = false;
  public buttonClicked = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleSiteOptions() {
    this.siteOptionsToggle = !this.siteOptionsToggle;
  }

  showLogInModal() {
    this.dialog.open(LogInComponent);
  }

  showSignUpModal() {
    this.dialog.open(SignUpComponent);
  }
}
