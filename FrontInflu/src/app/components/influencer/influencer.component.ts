import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { InstagramService } from './../../services/instagram.service';
import  '../../../assets/js/influencer';
declare var $: any;
import { BsModalModule, BsModalService } from '../../../../node_modules/ng2-bs3-modal';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styles: []
})

export class InfluencerComponent implements OnInit {

  id: string;
  page: number = 0;
  media: any;
  mediaid: string;


  constructor(private _apiService:ApiService, private _instaService:InstagramService, private activatedRoute: ActivatedRoute, private router:Router, private _service:AuthenticationService) { }

  ngOnInit() {
    this._service.checkCredentials();
    this.activatedRoute.params.subscribe((params: Params) => {
        // VER INFLUENCER
        if(params['id']) {

          this.id = params['id'];
          this._apiService.getInfluencer(params['id'],params['page']).subscribe();

          this._apiService.getInfluencerData(params['id']).subscribe();


        }
      });
  }

  showMedia(id:string) {
      this.mediaid = id;
      $('#modalMedia').modal()
  }

  nextPosts(){
    this.activatedRoute.params.subscribe((params: Params) => {
        this.page = this.page +1;
        this._apiService.getInfluencer(params['id'],this.page).subscribe();
    });

  }

  previousPosts(){

    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = this.page -1;

        this._apiService.getInfluencer(params['id'],this.page).subscribe();
    });

  }
  back() {
    this.router.navigate(['/influencers']);
  }

}
