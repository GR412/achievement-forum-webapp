import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private validationMessage: string;

  constructor(private Auth: AuthenticateService) { }

  ngOnInit() {
  }

  /*ngOnChanges(changes: SimpleChanges): void {

  }*/

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.postUserDetails(username, password).subscribe(data => {
        if (data.error) {
          this.validationMessage = data.message;
        } else {
          this.validationMessage = data.message;
        }
      }
    );
  }

}

