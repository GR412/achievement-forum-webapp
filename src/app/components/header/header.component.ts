import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public siteOptionsToggle = false;
  public toggleCount = 0;

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
}
