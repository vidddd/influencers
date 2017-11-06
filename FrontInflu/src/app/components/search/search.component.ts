import { Component, OnInit } from '@angular/core';
import { InstagramService } from './../../services/instagram.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor( private _instaService:InstagramService ) {

    this._instaService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.data;
      });

   }
}
