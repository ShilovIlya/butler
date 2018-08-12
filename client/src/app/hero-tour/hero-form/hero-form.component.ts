import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Hero } from "../shared/hero";
import { HeroService } from "../shared/hero.service";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() hero: Hero;
  @Output() submitHeroRequest = new EventEmitter<Hero>();
  @Input() btnSubmitText: string;
  powers: string[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getPowers();
  }

  getPowers(): void {
    this.heroService.getPowers().then(powers => this.powers = powers);
  }

  onSubmit(): void {
    this.submitHeroRequest.emit(this.hero);
  }
}
