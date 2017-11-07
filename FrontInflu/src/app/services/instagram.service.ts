import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class InstagramService {

  private auth_token:string = environment.ACCESS_TOKEN;
  private apiLink:string = environment.API_ENDPOINT; // "http://localhost:3000";
  private searchUrl:string = 'https://api.instagram.com/v1/users/search?q=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {

    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
   }

   searchEntries(term) {
       let url = this.searchUrl + term + '&access_token=' + this.auth_token;

       return this.http
              .get( url )
              .map(res => {
                
                res.json()
                })
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }
}
