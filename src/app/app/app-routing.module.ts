import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { LanguagesComponent }      from '../languages/languages.component';
import { LangDetailComponent }  from '../lang-detail/lang-detail.component';
import { AboutComponent }       from '../about/about.component';
import { ErrorComponent }       from '../error/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: LangDetailComponent },
  { path: 'languages',     component: LanguagesComponent },
  { path: 'about',  component: AboutComponent },
  { path: '**',  component: ErrorComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
