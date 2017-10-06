import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IThing } from './thing';

@Injectable()
export class ThingService {

  private _baseResourceUrl = '/api/thing';

  constructor(private _http: Http){
  }

  getThings(): Observable<IThing[]> {
    return this._http.get(this._baseResourceUrl)
      .map((response: Response) => <IThing[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
  }

  deleteThing(thing: IThing): Observable<IThing> {
    let url = this._baseResourceUrl + '/' + thing._id;
    console.log(url);

    return this._http.delete(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
