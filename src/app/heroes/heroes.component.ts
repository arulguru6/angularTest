import { Component, OnInit } from '@angular/core';
import { Hero } from '../AppClasses/hero';
import { HEROES } from '../AppClasses/mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
 

  selectedHero:Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() { }

  ngOnInit() {

  }

}
