import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { ThinglistComponent } from './components/thinglist/thinglist.component';
import { ThingComponent } from './components/thing/thing.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ThinglistComponent,
    ThingComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
