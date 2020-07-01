import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {

  constructor(private Form: FormBuilder) { }

  changeEmailForm = this.Form.group({
    newEmail: [''],
    newEmailConfirm: [''],
    password: [''],
  });

  ngOnInit(): void {
  }

}
