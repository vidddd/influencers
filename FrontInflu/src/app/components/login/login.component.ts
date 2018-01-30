import { Component } from '@angular/core';
import { AuthenticationService, User } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';
    private email = '';
    private password = '';

    constructor(private _service:AuthenticationService) {

    }

    login() {
       if(!this._service.login(this.email, this.password)){
          //  console.log("FAILED LOGIN");
            this.errorMsg = 'Failed to login';
        } else {
           console.log("LOGIN OK");
           window.location.reload();
        }

    }
}
