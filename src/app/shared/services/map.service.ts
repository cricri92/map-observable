import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable }   from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class MapService  {
  private _mapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBUaWdiEXr9S4yFTuRSFuGNABgveVWYRB0'
  
  constructor(private http: Http) {} 
  
  getDataFromReverseGeocoding() {
    return this.http
               .get(this._mapsUrl)
               .map(this.extractData)
               .catch(this.handleError)
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  
      

}