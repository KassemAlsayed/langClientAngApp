// import the angular basics
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// import the app routing configs
import { AppRoutingModule } from './app-routing.module';

// used for testing, server abstraction - 
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLanguageDataService }  from '../lang-service/in-memory-data.service';

// import app components
import { AppComponent }         from './app.component';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { LanguagesComponent }   from '../languages/languages.component';
import { LangDetailComponent }  from '../lang-detail/lang-detail.component';
import { LangService }          from '../lang-service/lang.service';
import { LangSearchComponent }  from '../lang-search/lang-search.component';
import { AboutComponent }       from '../about/about.component';
import { ErrorComponent }       from '../error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryLanguageDataService),
    InMemoryWebApiModule.forRoot(InMemoryLanguageDataService, {passThruUnknownUrl: true}),    
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LangDetailComponent,
    LanguagesComponent,
    LangSearchComponent,
    AboutComponent,
    ErrorComponent
  ],
  providers: [ LangService ],
  bootstrap: [ AppComponent ]
})
// export athe app module
export class AppModule { }
