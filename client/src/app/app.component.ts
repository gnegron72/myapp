import { Component } from '@angular/core';
import { IThing } from './thing';
import { ThingService } from './thing.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThingService]
})

export class AppComponent {

  constructor(private _thingService: ThingService) {}


}
