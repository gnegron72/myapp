import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IThing } from './thing';

@Injectable()
export class ThingService {
   private _thingurl='http://192.168.99.100:8080/api/thing';


   constructor(private _http: Http){}

   getThings(): Observable<IThing[]> {
      return this._http.get(this._thingurl)
      .map((response: Response) => <IThing[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
