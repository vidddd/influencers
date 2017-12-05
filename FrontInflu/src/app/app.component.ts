import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  login:boolean = false;
  title = 'TBWAInfluencers';
  constructor(
      private _service:AuthenticationService) {}

  ngOnInit() {
    this.login = this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}
