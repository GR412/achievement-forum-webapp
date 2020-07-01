import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../../services/register.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private Form: FormBuilder) { }

  RegisterForm = this.Form.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    username: [''],
    password: [''],
    passwordConfirm: ['']
  });

  ngOnInit(): void {
  }

  get email() {
    return this.RegisterForm.get('email');
  }

  onRegisterSubmit() {
    this.registerService.signUp(this.RegisterForm.value).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
    console.log(this.RegisterForm.value);
  }
}
