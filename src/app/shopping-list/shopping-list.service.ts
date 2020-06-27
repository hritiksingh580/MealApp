import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changeIngredient = new Subject<Ingredient[]>();

  private ingredients = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 15),
    new Ingredient('Grapse', 10),
  ];

  constructor() {}

  getIngredints() {
    return this.ingredients.slice();
  }

  addIngredint(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changeIngredient.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.changeIngredient.next(this.ingredients.slice());

  }

}
