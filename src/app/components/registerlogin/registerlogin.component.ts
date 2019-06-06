import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router'
import { ValidateService } from './../../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-registerlogin',
  templateUrl: './registerlogin.component.html',
  styleUrls: ['./registerlogin.component.sass']
})
export class RegisterloginComponent implements OnInit {
  newUser:any;
  constructor(
    private _httpService:HttpService, 
    private router:Router, 
    private _validateService:ValidateService, 
    private _flashMessage:FlashMessagesService
    ) { 
    this.newUser = {first_name:'', last_name:'', email:'', password:'', password_confirmation:''}
  }
  ngOnInit() {
  }

  componentRegister(){
    let user = this.newUser
    if(!this._validateService.validatePasswordConfirmation(user)){
      this._flashMessage.show("Password and password confirmation do not match.", {cssClass: 'alert-danger', timeout:8000});
      return false;
    }
    let obs = this._httpService.register(this.newUser);
    obs.subscribe((data) => {
      console.log(data)
      this.newUser = {first_name:'', last_name:'', email:'', password:'', password_confirmation:''};
    });
  }
}
