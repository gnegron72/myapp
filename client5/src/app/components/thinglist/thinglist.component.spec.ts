import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinglistComponent } from './thinglist.component';

describe('ThinglistComponent', () => {
  let component: ThinglistComponent;
  let fixture: ComponentFixture<ThinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
