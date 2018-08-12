/* tslint:disable:no-unused-variable */

import { inject, TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
