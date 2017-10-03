import { Component } from '@angular/core';
import { IThing } from './thing';
import { ThingService } from './thing.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThingService]
})
export class AppComponent {
  ithings: IThing[];
  constructor(private _thing: ThingService) {
  }

  ngOnInit() : void {
     this._thing.getThings()
     .subscribe(ithings => this.ithings = ithings);
  }
}
