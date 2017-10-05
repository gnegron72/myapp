import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IThing } from '../thing';
import { ThingService } from '../thing.service';
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
    console.log(this.ithing._id);
  }

  deleteThing(thing) : void {
    console.log('deleteThing()');
    this._thingService.deleteThing(thing).subscribe(
      ithing => {
        console.log(ithing);
        this.thingDeleted.emit();
      }
    );
  }
}
