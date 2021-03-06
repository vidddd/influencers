import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class InstagramService {

  influencers:any [] = [];
  mediarecent:any [] = [];
  private auth_token:string = environment.ACCESS_TOKEN;
  private apiLink:string = environment.API_ENDPOINT; // "http://localhost:3000";
  private searchUrl:string = 'https://api.instagram.com/v1/users/search?q=';
  private urlMediaRecent:string = 'https://api.instagram.com/v1/users/';

  constructor(private http: Http) { }


  searchInfluencers(term:string){

    let headers = new Headers();
      //headers.append('Accept', 'application/json');
    //  headers.append('Access-Control-Allow-Headers', 'Content-Type');
      //headers.append("Access-Control-Allow-Origin", "http://localhost:4200");

      let url = this.searchUrl + term + '&access_token=' + this.auth_token;

      return this.http.get(url, { headers })
                        .map( res => { this.influencers = res.json().data })
  }

  getUserMediaRecent(uid:string){

      let url = this.urlMediaRecent + uid + '/media/recent/?access_token=' + this.auth_token;
      return this.http.get(url)
                        .map( res => {

                          this.mediarecent = res.json().data })
  }
}
