import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('david.alvarez@tbwa.com','Esplandiu.11'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
        window.location.reload();
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);

    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['home']);
      return true;
    }
    return false;

  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
      return false;
    } else {
     return true;
    }

  }
}
