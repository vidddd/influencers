import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from './../../services/api.service';
import { InstagramService } from './../../services/instagram.service';
import  '../../../assets/js/influencer';
declare var $: any;

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styles: []
})
export class InfluencerComponent implements OnInit, AfterViewInit {

   res:any;
   typeres: number;
   mensajeres: string;

  constructor(private _apiService:ApiService, private _instaService:InstagramService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        if(params['id']) {
            this._apiService.getInfluencer(params['id']).subscribe();
          //  this._instaService.getUserMediaRecent(params['id']).subscribe();

        // ADD INFLUENCER
        } else if (params['idins']) {
            this.res = this._apiService.addInfluencer(params['idins']);
            // Vienen datos
            if(this.res.data) {
              this.typeres = 1; // TODO OK
              this.mensajeres = 'Influencer added to the sysytem !!!';
            // ERROR DE instagram
            } else {
              this.typeres = 2; // error
              this.mensajeres = '<b>Instragran Api says:</b> '+ this.res.meta.error_message;
            }
            setTimeout((router: Router) => {
                  this.router.navigate(['influencer/'+params['idins']]);
            }, 1500);
       }
      });

  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (this.typeres == 1) {
            $.notify({
                icon: 'ti-instagram',
                message: this.mensajeres

              },{
                  type: 'success',
                  timer: 4000,
                  placement: {
                      from: 'top',
                      align: 'center'
                  }
              });
       }

       if (this.typeres == 2) {
             $.notify({
                 icon: 'ti-instagram',
                 message: this.mensajeres

               },{
                   type: 'error',
                   timer: 4000,
                   placement: {
                       from: 'top',
                       align: 'center'
                   }
               });
        }


      });

  }

  back() {
    this.router.navigate(['/influencers']);
  }

}
