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

  constructor(private _apiService:ApiService, private _instaService:InstagramService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        if(params['id']) {
            this._apiService.getInfluencer(params['id']).subscribe();
            this._instaService.getUserMediaRecent(params['id']).subscribe();

        // ADD INFLUENCER
        } else if (params['idins']) {
            this._apiService.addInfluencer(params['idins']);
            setTimeout((router: Router) => {
                  this.router.navigate(['influencer/'+params['idins']]);
            }, 1000);
       }
      });

  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['idins']) {
            $.notify({
                icon: 'ti-instagram',
                message: "Influencer Added to the system !!!!"

              },{
                  type: 'success',
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
