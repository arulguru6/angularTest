import { Component, OnInit } from '@angular/core';
import { Hero } from '../AppClasses/hero';
//import { HEROES } from '../AppClasses/mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];


  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.hetHeroes();
  // }
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hetHeroes();
  }
  
  hetHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
