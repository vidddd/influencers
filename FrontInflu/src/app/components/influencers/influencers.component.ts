import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './../../services/api.service';
declare var swal: any;

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html'
})
export class InfluencersComponent implements OnInit, OnChanges {

  influencers3:any[] = [];
  title: string = "Influencers";

  constructor(private _apiService:ApiService) { }

    ngOnInit() {
      this.loadInfluencers();
    }

    ngOnChanges() {
      this.loadInfluencers();
    }

    loadInfluencers() {
      this._apiService.getInfluencers()
                      .distinctUntilChanged()
                      .subscribe();
    }

    showDelete(id: string) {
              swal({title: 'Are you sure?',
                       text: "It will be delete de Influencers and his posts and coments associated form database!! You won't be able to revert this!",
                       type: 'warning',
                       showCancelButton: true,
                       confirmButtonClass: 'btn btn-success btn-fill',
                       cancelButtonClass: 'btn btn-danger btn-fill',
                       confirmButtonText: 'Yes, delete it!',
                       buttonsStyling: false
                     }).then((result) => {
                            if (result.value) {
                              Promise.all([
                                    this.deleteInfluencer(id)
                                ]).then(value => {
                                    swal( 'Deleted!','Influencer has been deleted from Database.','success');
                                    this.loadInfluencers();
                              });
                            }
              });
    }

    deleteInfluencer(id: string) {
       return this._apiService.deleteInfluencer(id);
    }
}
