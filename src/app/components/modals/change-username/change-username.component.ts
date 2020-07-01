import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.scss']
})
export class ChangeUsernameComponent implements OnInit {

  constructor(private Form: FormBuilder) { }

  changeUserNameForm = this.Form.group({
    newUsername: [''],
    password: [''],
  });

  ngOnInit(): void {
  }

}
