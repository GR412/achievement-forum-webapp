import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private Form: FormBuilder) { }

  deleteAccountForm = this.Form.group({
    email: [''],
    password: [''],
    typeDelete: ['']
  });

  ngOnInit(): void {
  }

}
