import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validatePasswordConfirmation(user){
    if(user.password != user.password_confirmation){
      return false;
    } else {
      return true
    }
  }
}
