import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router'
// import { AuthService } from './../../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-registerlogin',
  templateUrl: './registerlogin.component.html',
  styleUrls: ['./registerlogin.component.sass']
})
export class RegisterloginComponent implements OnInit {
  newUser:any;
  oldUser:any;
  constructor(
    private _httpService:HttpService, 
    private _router:Router, 
    private _flashMessage:FlashMessagesService,
    // private _authService:AuthService
    ) { 
    this.newUser = {first_name:'', last_name:'', email:'', password:'', password_confirmation:''};
    this.oldUser = {email:'', password:''};
  }
  ngOnInit() {
  }

  componentRegister(){
    let obs = this._httpService.register(this.newUser);
    if(this.newUser.password != this.newUser.password_confirmation){
      this._flashMessage.show("Password and password confirmation do not match.", {cssClass: 'alert-danger', timeout:8000});
      // this._router.navigate['/registerlogin'];
    } else {

      this._flashMessage.show("Password match.", {cssClass: 'alert-success', timeout:8000});
    }
    obs.subscribe((data => {


      // this._authService.registerUser(data)
      // .subscribe(user => {
      //   if(user.success){
      //     this._flashMessage.show("Successfully registered", {cssClass: 'alert-success', timeout:8000});
      //     console.log("successfully pass auth" + user);
      //   } else {
      //     this._flashMessage.show("WARNING DID NOT Successfully REGISETR", {cssClass: 'alert-danger', timeout:8000});
      //     this._router.navigate['/register'];
      //   }
      // })
      this.newUser = {first_name:'', last_name:'', email:'', password:'', password_confirmation:''};
      // this._router.navigate['/login'];
    }));
  }

  componentSignIn(){
    let obs = this._httpService.login(this.oldUser);
    obs.subscribe((data => {
      console.log(data);
      this.oldUser = {email:'', password:''};
    }))
  }
}
