import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IThing } from '../models/thing';

@Injectable()
export class ThingService {

  private _baseResourceUrl = '/api/thing';

  constructor(private _http: Http){
  }

  getThings(): Observable<IThing[]> {
    return this._http.get(this._baseResourceUrl)
      .map((response: Response) => <IThing[]> response.json().docs)
      .do(data => console.log(JSON.stringify(data)));
  }

  deleteThing(thing: IThing): Observable<IThing> {
    let url = this._baseResourceUrl + '/' + thing._id;

    return this._http.delete(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateThing(thing: IThing): Observable<IThing> {
    let url = this._baseResourceUrl + '/' + thing._id;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(thing);

    return this._http.put(url, body, options)
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
