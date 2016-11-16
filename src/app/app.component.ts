import { MapService } from './shared/services/map.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  reverseGeocoding$: Observable<any>
  reverseGeocodingObject: any

  constructor(private mS: MapService) {}

  ngOnInit() {
    this.reverseGeocoding$ = this.mS.getDataFromReverseGeocoding() 

    this.reverseGeocoding$
        .subscribe(
            rGObject => {
              this.reverseGeocodingObject = rGObject
              console.log(rGObject.results[0].formatted_address)
            },
            error => {
              console.error(error)
            }
        )
  }
}
