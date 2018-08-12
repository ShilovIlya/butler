import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroesComponent} from './component/heroes/heroes.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {HeroService} from "./service/hero/hero.service";
import {DashboardComponent} from './component/dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./service/data/in-memory-data.service";
import { HeroSearchComponent } from './component/hero-search/hero-search.component';
import {HeroSearchService} from "./service/search/hero-search.service";
import { HeroFormComponent } from './component/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
