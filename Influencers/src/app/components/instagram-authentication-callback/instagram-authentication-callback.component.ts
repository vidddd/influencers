import { Observable } from 'rxjs/Observable';
import { environment as env } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-instagram-authentication-callback',
  templateUrl: './instagram-authentication-callback.component.html',
  styleUrls: ['./instagram-authentication-callback.component.css']
})
export class InstagramAuthenticationCallbackComponent implements OnInit {
  codeStatus: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const queryParams = this.router.routerState.snapshot.root.queryParams;
    const code = queryParams['code'];
    const error = queryParams['error'];
    const error_description = queryParams['error_description'];

    if (code) {
      this.codeStatus = true;
    /*  this.http.post(`localhost:3000/exchange_code_with_token`, {code: code})
        .map(data => data.json())
        .subscribe((data) => console.log(data));*/
    }
    else {
      console.log(error, ": ", error_description);
    }
  }

}
