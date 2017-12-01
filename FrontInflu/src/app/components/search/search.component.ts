import { Component, OnInit } from '@angular/core';
import { InstagramService } from './../../services/instagram.service';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
declare var swal: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();
  term:string = "";
  loading:boolean = false;

  constructor( private _instaService:InstagramService, private _apiService:ApiService, private router:Router ) {
   }

   ngOnInit(){ }

   searchInflu() {
    this._instaService.searchInfluencers(this.term)
                          .debounceTime(400)
                          .distinctUntilChanged()
                          .subscribe();

   }

   addInfluencer(id: string) {
     this.loading = true;
     Promise.all([
            this._apiService.addInfluencer(id)
           ]).then(value => {
               this.loading = false;
               swal( 'Added!','Influencer Added to Database.','success').then((result) => {
                    if (result.value) {
                        this.router.navigate(['influencer/'+id]);
                    }
                  })

       });
   }
}
