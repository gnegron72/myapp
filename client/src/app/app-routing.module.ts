import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThingsComponent } from './components/thinglist/things.component';
import { ThingComponent } from  './components/thing/thing.component';

const appRoutes: Routes = [
  { path: 'things', component: ThingsComponent },
  { path: 'thing/:id', component: ThingComponent },
  { path: '**', redirectTo: 'things', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
