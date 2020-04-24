import {Component, OnInit} from '@angular/core';
import { AuthenticateService } from '../../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {
  public validationMessage: string;
  public usernameMessage: string;
  public passwordMessage: string;

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

