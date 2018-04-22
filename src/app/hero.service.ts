import { Injectable } from '@angular/core';
import {Hero} from './AppClasses/hero';
import {HEROES} from './AppClasses/mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import{MessageService}  from './message.service';

@Injectable()
export class HeroService {

  constructor(private msgService : MessageService) { }
  
 getHeroe(id:number):Observable<Hero>{
   this.msgService.add('HeroService: fetched hero id =${id}');
   return of (HEROES.find(hero  => hero.id ===id));
 }
 
 getHeroes(): Observable<Hero[]> {
  // TODO: send the message _after_ fetching the heroes
  this.msgService.add('HeroService: fetched heroes');
  return of(HEROES);
}
}
