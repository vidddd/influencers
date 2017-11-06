import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Influencer } from '../interfaces/influencer.interface';

@Injectable()
export class ApiService {

  influencers:any[] = [];
  influencers2:any[] = [];
  results: Object;
  urlGet:string = "https://influencers.tbwainnovation.com/api/get/influencers";
  urlBusqueda:string = "https://influencers.tbwainnovation.com/api/search/influencers/";
  urlAddInfluencer:string  = "https://influencers.tbwainnovation.com/api/add/influencer/";

  constructor(private http:Http) { }


  searchInfluencers( term:string ): any{

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    let url = this.urlBusqueda + term;

    this.http.get(url, { headers })
           .subscribe( res=>{
            this.influencers = res.json().data;
          });
   return this.influencers;
  }

  getInfluencers()  {
    return this.http.get(this.urlGet)
                    .map((res:Response) => {
                       //this.influencers2 = Array.of(res.json());
                       this.influencers2 = res.json();
                       console.log("3333");
                       console.log(this.influencers2);
                    })
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

  /*
        _id
      $id	"59f897ff30fd0461248b4567"
      id	"31344485"
      username	"elsantto"
      profile_picture	"https://scontent.cdninstagram.com/t51.2885-19/s150x150/18645315_1696646680631061_6357435764342521856_a.jpg"
      full_name	"David San Blas"
      bio	"Un cerdo que no vuela, solo es un cerdo...\nFuji XT10 / Xiaomi YI 4K / Samsung Galaxy Note 4"
      website	"https://youtu.be/lKod3HkFcXU"
      is_business	false
      counts
      media	635
      follows	150
      followed_by	229
      */
    /*
    full_name: "David Poncelas"
    id: "1954639"
    profile_picture: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12407198_1663702457204371_2136763155_a.jpg"
    username: "poncelas"
    */

  addInfluencer(id: string): void {

    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let url = this.urlAddInfluencer + id;
      console.log(url);
    this.http.get(url, { headers })
           .subscribe( res=>{
              console.log( res.json());
          });
  }

}
