import { Component, OnInit } from '@angular/core';
import { Thing } from '../../models/thing';
import { ThingService } from '../../services/thing.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-thinglist',
  templateUrl: './thinglist.component.html',
  styleUrls: ['./thinglist.component.css'],
  providers: [ThingService]
})
export class ThinglistComponent implements OnInit {

  things: Thing[];
  constructor(private _thingService: ThingService) {}

  ngOnInit() {
    this._thingService.getThings().subscribe(
      things => this.things = things
    );
  }


  onThingDeleted(thing) : void {
    this.things.splice(_.indexOf(this.things, _.findWhere(this.things, { _id : thing._id})), 1);
  }

}
