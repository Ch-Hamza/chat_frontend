import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LdapService {

  api = 'http://192.168.1.2:5000/'

  constructor(private http: HttpClient) { }

  find_all() {
    return this.http.get(this.api + 'user');
  }

  find_by_id(id) {
    return this.http.get(this.api + 'user/' + id);
  }

  add_user(user) {
    return this.http.post(this.api + 'user', user)
  }

  modify_user(user) {
    return this.http.put(this.api + 'user/' + user.id, user)
  }

  delete_by_id(id) {
    return this.http.delete(this.api + 'user/' + id);
  }
}
