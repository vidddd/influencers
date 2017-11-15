import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Influencer } from '../interfaces/influencer.interface';

@Injectable()
export class ApiService {

  influencers:any[] = [];
  influencers2:any[] = [];
  influencer: any;

  urlGet:string = "https://influencers.tbwainnovation.com/api/get/influencers";
  urlGetUno:string = "https://influencers.tbwainnovation.com/api/get/influencer/";
  urlBusqueda:string = "https://influencers.tbwainnovation.com/api/search/influencers/";
  urlAddInfluencer:string  = "https://influencers.tbwainnovation.com/api/add/influencer/";

  constructor(private http:Http) { }

  searchInfluencers( term:string ): any{

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    let url = this.urlBusqueda + term;

    this.http.get(url, { headers })
           .subscribe( res=>{
            this.influencers = res.json().data;
          });
   return this.influencers;
  }

  getInfluencers(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.urlGet, { headers })
                    .map((res:Response) => {
                       //this.influencers2 = Array.of(res.json());
                       this.influencers2 = res.json();
                    })
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error ApiService.getInfluencers'));
    }

  getInfluencer(id:string)  {
      let url = this.urlGetUno + id;
      return this.http.get(url)
                      .map((res:Response) => {
                         this.influencer = res.json();
                      })
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error ApiService.GetInfluencer'));
  }

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
