import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  signUp(registerData) {
    return this.http.post<any>('/api/achievement-forum-api/src/public/register', registerData);
  }
}
