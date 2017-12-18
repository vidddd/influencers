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
    if(this.id) {
      this._apiService.getMedia(this.id).subscribe(data => {
          this.post = data.result[0];
        });
    }
  }

}
