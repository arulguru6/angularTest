import { Injectable } from '@angular/core';
import {Hero} from './AppClasses/hero';
import {HEROES} from './AppClasses/mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }
 getHeroes():Observable<Hero[]>{
   return of (HEROES);
 }
}
