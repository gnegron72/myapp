import { Component, OnInit } from '@angular/core';
import { Thing } from '../../models/thing';
import { ThingService } from '../../services/thing.service';
import * as _ from 'underscore';

@Component({
  selector: 'things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
  providers: [ThingService]
})

export class ThingsComponent implements OnInit {

  things: Thing[];
  constructor(private _thingService: ThingService) {}

  ngOnInit() : void {
     this._thingService.getThings().subscribe(
       things => this.things = things
     );
  }

  onThingDeleted(thing) : void {
    this.things.splice(_.indexOf(this.things, _.findWhere(this.things, { _id : thing._id})), 1);
  }

}
