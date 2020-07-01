import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  constructor(private Form: FormBuilder) { }

  test = this.Form.group({
    displayName: [''],
    bio: [''],
    avatar: ['']
  });

  ngOnInit(): void {
  }

}
