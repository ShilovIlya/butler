import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./hero-tour/dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-tour/hero-detail/hero-detail.component";
import { HeroFormComponent } from "./hero-tour/hero-form/hero-form.component";
import { HeroSearchComponent } from "./hero-tour/hero-search/hero-search.component";
import { HeroSearchService } from "./hero-tour/hero-search/hero-search.service";
import { HeroesComponent } from "./hero-tour/heroes/heroes.component";
import { HeroService } from "./hero-tour/shared/hero.service";

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
