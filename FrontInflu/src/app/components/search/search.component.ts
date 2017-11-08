import { Component, OnInit } from '@angular/core';
import { InstagramService } from './../../services/instagram.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();
  term:string = "";

  constructor( private _instaService:InstagramService ) {
   }

   ngOnInit(){ }

   searchInflu() {
     this._instaService.searchInfluencers(this.term)
                          .debounceTime(400)
                          .distinctUntilChanged()
                          .subscribe();

   }
}
