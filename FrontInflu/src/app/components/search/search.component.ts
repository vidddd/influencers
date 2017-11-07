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
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(res => {
        console.log(res);
        this.results = res.data;
      });

   }
}
