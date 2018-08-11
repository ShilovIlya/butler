import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import "rxjs/add/observable/of";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";

import {Hero} from "../../hero";
import {HeroSearchService} from "../../service/search/hero-search.service";


@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(private heroSearcService: HeroSearchService,
              private router: Router) {
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.heroes = this.searchTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearcService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
          console.log(error);
          return Observable.of<Hero[]>([]);
        }
      );
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
