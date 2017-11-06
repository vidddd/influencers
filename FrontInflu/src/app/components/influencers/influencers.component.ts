import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styles: []
})
export class InfluencersComponent implements OnInit {

  influencers3:any[] = [];

  constructor(private _apiService:ApiService) { }

  ngOnInit() {
    this.loadInfluencers();
  }

  loadInfluencers() {
  let influ;

  this._apiService.getInfluencers()
                 .subscribe();

  }
}
