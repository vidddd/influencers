import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from './../../services/api.service';
import { InstagramService } from './../../services/instagram.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styles: []
})
export class InfluencerComponent implements OnInit {

  constructor(private _apiService:ApiService, private _instaService:InstagramService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        if(params['id']) {
            this._apiService.getInfluencer(params['id']).subscribe();
            this._instaService.getUserMediaRecent(params['id']).subscribe();
        } else if (params['idins']) {
            this._apiService.addInfluencer(params['idins']);
            this.router.navigate(['influencers']);
       }
      });

  }


  back() {
    this.router.navigate(['/influencers']);
  }

}
