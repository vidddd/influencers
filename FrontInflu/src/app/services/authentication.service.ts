import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

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

  urlLogin:string = "https://influencers.tbwainnovation.com/api/users/authenticate";

  constructor(
    private _router: Router, private http:Http){}

  logout() {
    localStorage.removeItem("user");
        window.location.reload();
  }

  login(username: string, password: string) {

    this.http.post(this.urlLogin, { username: username, password: password })
             .toPromise()
             .then(res => {
                    if(res.status === 200) {
                        localStorage.setItem('user', JSON.stringify(res.json()));
                        return true;
                    } else {

                      return false;
                    }
                      //console.info(res.json());
          });
      }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
      return false;
    } else {
     return true;
    }

  }
}
