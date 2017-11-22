import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from './../../services/api.service';
import { InstagramService } from './../../services/instagram.service';
import  '../../../assets/js/influencer';
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styles: []
})
export class InfluencerComponent implements OnInit, AfterViewInit {


  constructor(private _apiService:ApiService, private _instaService:InstagramService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        // VER INFLUENCER
        if(params['id']) {
          this._apiService.getInfluencer(params['id']).subscribe();

        // ADD INFLUENCER
        } else if (params['idins']) {

            let disposable = this._apiService.addInfluencer(params['idins']).subscribe(data => {
                     // VIENE ERROR DE INSTAGRAM
                     if(data.meta) {
                           $.notify({
                               icon: 'ti-instagram',
                               message: '<b>Instragran Api says:</b>  &nbsp; '+ data.meta.error_message
                             },{
                                 type: 'danger',
                                 timer: 4000, placement: { from: 'top', align: 'center' }
                             });
                            this.router.navigate(['influencers']);
                     // TODO OK GUARDANDO
                     } else {
                        // Redirigue a la
                        setTimeout((router: Router) => {
                            $.notify({
                                icon: 'ti-instagram',
                                message: 'Influencer added to the sysytem !!!'
                              },{
                                  type: 'success',
                                  timer: 4000, placement: {from: 'top', align: 'center'}
                              });
                              this.router.navigate(['influencer/'+params['idins']]);
                        }, 1500);
                     }
             });
             /*
             setTimeout(()=>{
               disposable.unsubscribe();
             },10000);*/
       }
      });
  }

  ngAfterViewInit() {

  }

  showMedia(id:string) {
    console.log(id);
    $('#myModal').modal({
        show: true
      })


  }

  back() {
    this.router.navigate(['/influencers']);
  }

}
