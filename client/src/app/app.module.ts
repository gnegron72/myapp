import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ThingComponent } from './things/thing.component';
import { ThingsComponent } from './things/things.component';
import { InlineEditComponent } from './form/inline-edit/inline-edit.component';

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
