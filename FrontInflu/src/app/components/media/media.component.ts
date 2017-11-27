import { Component, OnInit , OnChanges, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit, OnChanges  {

  // ID del post de instagram
  @Input('id') id: string;
  post: any;

  constructor(private _apiService: ApiService) {  }

  ngOnInit() {

  }

  ngOnChanges() {
    //console.log("OnChanges");
    //console.log(this.id);
    if(this.id) {
      this._apiService.getMedia(this.id).subscribe(data => {
          this.post = data.result[0];
        });
    }
  }


  /*
  private _id = '';

  @Input()
  set id(id: string) {
    this._id = (id && id.trim()) || '<no name set>';
  }

  get id(): string { return this._id; }
*/
}
