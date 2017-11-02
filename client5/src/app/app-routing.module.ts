import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThinglistComponent } from './components/thinglist/thinglist.component';
import { ThingComponent } from  './components/thing/thing.component';

const appRoutes: Routes = [
  { path: 'things', component: ThinglistComponent },
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
