import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';

/*
  Generated class for the ResolveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResolveProvider {


  public heroes: Hero[] = [new Hero('Batman', 'No tiene superpoderes'), new Hero('Spiderman', 'El hombre araña')];
  //public heroes: Hero[] = new Array<Hero>();

  constructor() {
  }

  addHero(name, description) {
    this.heroes.push(new Hero(name, description));
  }

}
