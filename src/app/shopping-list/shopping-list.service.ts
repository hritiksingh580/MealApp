import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changeIngredient = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 15),
    new Ingredient('Grapse', 10),
  ];

  constructor() { }

  getIngredints() {
    return this.ingredients.slice();
  }

  getIngredint(index: number) {
    return this.ingredients[index];
  }

  addIngredint(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changeIngredient.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.changeIngredient.next(this.ingredients.slice());
  }

  updateIngredients(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.changeIngredient.next(this.ingredients.slice());
  }

  deleteIngredients(index: number) {
    this.ingredients.splice(index, 1);
    this.changeIngredient.next(this.ingredients.slice());
  }

}
