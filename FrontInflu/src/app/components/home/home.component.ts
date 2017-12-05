import { Observable } from 'rxjs/Observable';
import { environment as env } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
      private _service:AuthenticationService){}


  ngOnInit() {
       this._service.checkCredentials();
  }

  onLoginWithInstagram() {
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&response_type=code`;
  }

}
