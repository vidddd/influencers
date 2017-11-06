import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styles: []
})
export class InfluencerComponent implements OnInit {

  constructor(private _apiService:ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
               if(params['id']) {
                 this._apiService.addInfluencer(params['id']);
               }
      });

  }

}
