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

    constructor(
        private _service:AuthenticationService) {}

    login() {
       if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        } else {
           window.location.reload();
        }
    }
}
