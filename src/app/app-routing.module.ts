import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadlinesComponent } from './headlines/headlines.component'
import { AllnewsComponent } from './allnews/allnews.component'
import { OtherComponent } from './other/other.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'headlines', component: HeadlinesComponent },
  { path: 'allnews', component: AllnewsComponent },
  { path: 'other', component: OtherComponent },
  { path: '', redirectTo: '/other', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [ HeadlinesComponent ]
})

export class AppRoutingModule { }
