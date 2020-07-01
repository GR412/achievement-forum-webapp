import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private Form: FormBuilder) { }

  logUpForm = this.Form.group({
    username: [''],
    password: ['']
  });

  ngOnInit(): void {
  }

}
