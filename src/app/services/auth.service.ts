import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://192.168.1.2:5000/'

  constructor(private http: HttpClient) { }

  login(username , password) {
    let user = {username: username, password: password};
    return this.http.post(this.api + 'login', user);
  }

  register() {
    let user = {}
    return this.http.post(this.api + 'register', user);
  }
}
