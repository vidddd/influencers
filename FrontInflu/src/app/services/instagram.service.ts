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

  influencers:any [] = [];
  private auth_token:string = environment.ACCESS_TOKEN;
  private apiLink:string = environment.API_ENDPOINT; // "http://localhost:3000";
  private searchUrl:string = 'https://api.instagram.com/v1/users/search?q=';

  constructor(private http: Http) { }


  searchInfluencers(term:string){
      let url = this.searchUrl + term + '&access_token=' + this.auth_token;

      return this.http.get(url)
                        .map( res => { this.influencers = res.json().data })
  }
}
