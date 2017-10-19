import { Component, OnInit } from '@angular/core';
import { IThing } from '../thing';
import { ThingService } from '../thing.service';
import * as _ from 'underscore';

@Component({
  selector: 'things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
  providers: [ThingService]
})
export class ThingsComponent implements OnInit {

  ithings: IThing[];
  constructor(private _thingService: ThingService) {}

  ngOnInit() : void {
     this._thingService.getThings().subscribe(
       ithings => this.ithings = ithings
     );
  }

  onThingDeleted(ithing) : void {
    this.ithings.splice(_.indexOf(this.ithings, _.findWhere(this.ithings, { _id : ithing._id})), 1);
  }

}
