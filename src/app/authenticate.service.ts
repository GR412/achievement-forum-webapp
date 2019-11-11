import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  postUserDetails(username, password) {
    return this.http.post('/api/achievement-forum-api/src/public/register',
      {username, password});
  }

  /*getStrings() {
    return this.http.get('/api/achievement-forum-api/src/public/getStrings');
  }*/

  /*getUserDetails(username, password) {
    return this.http.post('/api/auth.php', {username, password}).subscribe(data => {
      console.log(data, 'is what we recieved');
    });
  }*/
}
