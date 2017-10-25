import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { ThingComponent } from './components/thing/thing.component';
import { ThingsComponent } from './components/thinglist/things.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingComponent,
    ThingsComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
