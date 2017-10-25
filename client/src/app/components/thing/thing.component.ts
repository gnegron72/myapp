import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IThing } from '../../models/thing';
import { ThingService } from '../../services/thing.service';
import * as _ from 'underscore';

@Component({
  selector: 'thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  providers: [ThingService]
})
export class ThingComponent implements OnInit {
  @Input() ithing: IThing;
  @Output() thingDeleted: EventEmitter<any> = new EventEmitter();

  constructor(private _thingService: ThingService) {}

  ngOnInit() {
  }

  deleteThing(thing) : void {
    this._thingService.deleteThing(thing).subscribe(
      ithing => {
        console.log(ithing);
        this.thingDeleted.emit();
      }
    );
  }

  updateThing(thing): void {
    this._thingService.updateThing(thing).subscribe(
      ithing => {
        console.log(ithing);
      }
    );
  }

}
