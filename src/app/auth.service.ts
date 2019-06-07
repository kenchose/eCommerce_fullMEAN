// import { Injectable } from '@angular/core';
// import { HttpHeaders} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   authToken:any;
//   user:any;
//   constructor(private _httpHeaders:HttpHeaders) { }

//   registerUser(user){ //function to register user reaching innto backend api
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     return this.user.post('http://localhost:8000/users/register', user, {headers:headers})
//       .map(res => res.json());
//   }
//       // const httpOptions = {
//       //   headers: new HttpHeaders({
//       //     'Content-Type':  'application/json',
//       //     'Authorization': 'my-auth-token'
//       //   })
//       // };
      
//       // this._httpHeaders.post(
//       //    "http://localhost:3000/contacts",
//       //    JSON.stringify({id: 4, name: 'some'}),
//       //    httpOptions 
//       // ).subscribe();
// }
