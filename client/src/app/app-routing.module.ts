import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./hero-tour/dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-tour/hero-detail/hero-detail.component";
import { HeroesComponent } from "./hero-tour/heroes/heroes.component";
import { BasicGraphComponent } from "./d3-tour/basic-graph/basic-graph.component";

const routes: Routes = [
  {path: '', redirectTo: '/graph', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'graph', component: BasicGraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
