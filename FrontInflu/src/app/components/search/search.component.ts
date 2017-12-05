import { Component, OnInit } from '@angular/core';
import { InstagramService } from './../../services/instagram.service';
import { AuthenticationService } from './../../services/authentication.service';
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

  constructor( private _instaService:InstagramService, private _apiService:ApiService, private router:Router, private _service:AuthenticationService ) {
   }

   ngOnInit(){ this._service.checkCredentials(); }

   searchInflu() {
    this._instaService.searchInfluencers(this.term)
                          .debounceTime(400)
                          .distinctUntilChanged()
                          .subscribe();
   }

   addInfluencer(id: string) {
     let res;
     this.loading = true;
     Promise.all([
            res = this._apiService.addInfluencer(id)
           ]).then(value => {
               this.loading = false;
               //console.log(value);

               if(value[0].meta){
               // ERROR DE INSTAGRAM
                   if(value[0].meta.code == '400') {
                     swal( 'Error!','<b>Instragran Api says:</b> '+ value[0].meta.error_message,'error')
                   } else if (value[0].meta.code == '455'){
                      swal( 'Error!','<b>Database Error:</b> '+ value[0].meta.error_message,'error')
                   // TODO OK
                   }

              } else {
                   swal( 'Added!','Influencer Added to Database.','success').then((result) => {
                        if (result.value) {
                            this.router.navigate(['influencer/'+id]);
                        }
                      });
              }
       });
   }
}
