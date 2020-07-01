import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private Form: FormBuilder) { }

  changePasswordForm = this.Form.group({
    currentPassword: [''],
    newPassword: [''],
    newPasswordConfirm: ['']
  });

  ngOnInit(): void {
  }

}
