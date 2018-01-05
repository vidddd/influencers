import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { InstagramService } from './../../services/instagram.service';
import  '../../../assets/js/influencer';
declare var $: any; declare var Chartist: any;
import { BsModalModule, BsModalService } from '../../../../node_modules/ng2-bs3-modal';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-influencer',templateUrl: './influencer.component.html'
})

export class InfluencerComponent implements OnInit, AfterViewInit {

  id: string;
  page: number = 0;
  media: any;
  mediaid: string;
  metadata: any; cloudwords:any= [];


  constructor(private _apiService:ApiService, private _instaService:InstagramService, private activatedRoute: ActivatedRoute, private router:Router, private _service:AuthenticationService) {

      this.metadata = [];
  }

  ngOnInit() {
    this._service.checkCredentials();
  }

  ngAfterViewInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
        let page = 0;
        // VER INFLUENCER
        if(params['id']) {
          this.id = params['id'];
          if(params['page']) page = params['page'];
          this._apiService.getInfluencer(params['id'],page).subscribe();
          this._apiService.getInfluencerData(params['id']).subscribe(data => {
              this.metadata = data.result[0];
                  this.showCharts();
            });
          this._apiService.getInfluencerCloudWords(params['id']).subscribe(data => {
                for (var key in data) {
                      this.cloudwords.push(key);
                  }
              });
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

  showCharts() {

    let labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    let comments = this.metadata.comments.slice(0,50);
    let likes = this.metadata.likes.slice(0,50);


    var data1 = {
      labels: labels,
      series: [likes]
    };
    var data2 = {
      labels: labels,
      series: [comments]
    };
    var options = {
        seriesBarDistance: 1,
        axisX: {
            showGrid: false
        },
        height: "245px",
        showArea: true,
        fullWidth: true
    };

    var responsiveOptions = [ ];
     if ( typeof Chartist === 'undefined' ) return;
     Chartist.Line('#chart1', data1, options, responsiveOptions);
     Chartist.Line('#chart2', data2, options, responsiveOptions);
  }
}
