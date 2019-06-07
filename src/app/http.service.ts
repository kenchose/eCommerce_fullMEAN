import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  register(newUser) {
    return this._http.post('/register', newUser);
  }

  login(user) {
    console.log(user)
    return this._http.post('/login', user);
  }
}
