import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styles: []
})
export class InfluencersComponent implements OnInit, OnChanges {

  influencers3:any[] = [];
  title: string = "Influencers";

  constructor(private _apiService:ApiService) { }

  ngOnInit() {
    this.loadInfluencers();
    
  }
  ngOnChanges() {
    this.loadInfluencers();
  }
  loadInfluencers() {
    this._apiService.getInfluencers()
                 .subscribe();

  }
}
