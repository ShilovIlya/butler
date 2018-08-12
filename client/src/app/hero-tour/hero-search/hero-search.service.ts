import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../shared/hero';
import { environment } from "../../../environments/environment";

@Injectable()
export class HeroSearchService {
  private heroesUrl = `${environment.apiUrl}/api/hero`;

  constructor(private http: Http) {
  }

  search(term: String): Observable<Hero[]> {
    return this.http
      .get(`${this.heroesUrl}/name/${term}`)
      .map(response => response.json() as Hero[]);
  }
}
