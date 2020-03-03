import {Component, OnInit} from '@angular/core';
import { AuthenticateService } from '../../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private validationMessage: string;
  private usernameMessage: string;
  private passwordMessage: string;

  constructor(private auth: AuthenticateService) {}

  ngOnInit() {

  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.auth.postUserDetails(username, password).subscribe(data => {
        // @ts-ignore
      if (data.usernameError || data.passwordError) {
        // @ts-ignore
        this.usernameMessage = data.usernameMessage;
        // @ts-ignore
        this.passwordMessage = data.passwordMessage;
      } else {
        // @ts-ignore
        this.usernameMessage = ' ';
        this.passwordMessage = ' ';
      }
      }
    );
  }

}

