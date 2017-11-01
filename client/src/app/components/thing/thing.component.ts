import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Thing } from '../../models/thing';
import { ThingService } from '../../services/thing.service';
import * as _ from 'underscore';

@Component({
  selector: 'thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  providers: [ThingService]
})
export class ThingComponent implements OnInit {
  @Input() thing: Thing;
  @Output() thingDeleted: EventEmitter<any> = new EventEmitter();

  constructor(private _thingService: ThingService) {}

  ngOnInit() {
  }

  deleteThing() : void {
    this._thingService.deleteThing(this.thing).subscribe(
      thing => {
        console.log(thing);
        this.thingDeleted.emit();
      }
    );
  }

  updateThing(thing): void {
    this._thingService.updateThing(thing).subscribe(
      thing => {
        console.log(thing);
      }
    );
  }

}
