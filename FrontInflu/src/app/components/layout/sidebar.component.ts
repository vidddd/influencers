import { Component } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent  {

  constructor(private _service:AuthenticationService) { }

  logout() {
    this._service.logout();

  }
}
