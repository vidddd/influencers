import { Observable } from 'rxjs/Observable';
import { environment as env } from './../../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  constructor() { }

  onLoginWithInstagram() {
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&response_type=code`;
  }

}
