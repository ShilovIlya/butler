import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../../hero';
import {HeroService} from '../../service/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  newHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
    this.setEmptyNewHero();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  createHero(inputHero: Hero): void {
    this.heroService.create(inputHero)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h != hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      })
  }

  setEmptyNewHero(): void {
    this.newHero = new Hero(0, "", "", "");
  }
}
