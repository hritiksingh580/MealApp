import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changeIngredient = new EventEmitter<Ingredient[]>();

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
    this.changeIngredient.emit(this.ingredients);
  }

}
