import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public siteOptionsToggle = false;
  public buttonClicked = false;
  // public toggleCount = 0;
  public LogInModal;
  public signUpModal;

  constructor() { }

  ngOnInit() {
  }

  toggleSiteOptions() {

   /* if (this.toggleCount === 1) {*/
    this.siteOptionsToggle = !this.siteOptionsToggle;
   /* } else if (this.toggleCount === 2) {
    this.siteOptionsToggle = false;*/
 // }
  }

  showLogInModal() {
    // document.querySelector('log-in-modal').style.
    // document.getElementById('log-in-modal').style.display = 'block';
    // modal.style.display = 'block';
    // this.buttonClicked = !this.buttonClicked;
  }

  showSignUpModal() {

  }
}
