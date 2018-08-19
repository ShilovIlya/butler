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
import { GraphComponent } from './d3-tour/graph/graph.component';
import { D3Service } from "./d3-tour/d3.service";
import { NodeVisualComponent } from './d3-tour/node-visual/node-visual.component';
import { LinkVisualComponent } from './d3-tour/link-visual/link-visual.component';
import { BasicGraphComponent } from './d3-tour/basic-graph/basic-graph.component';
import { DraggableDirective } from "./d3-tour/graph-interaction/draggable.directive";
import { ZoomableDirective } from "./d3-tour/graph-interaction/zoomable.directive";
import { SelectableDirective } from "./d3-tour/graph-interaction/selectable.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    BasicGraphComponent,
    DraggableDirective,
    ZoomableDirective,
    SelectableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService, HeroSearchService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
