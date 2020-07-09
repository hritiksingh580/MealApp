import { Injectable, EventEmitter } from '@angular/core';

import { Recipes } from './recipes.model';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChange = new Subject<Recipes[]>();

  private recipes: Recipes[] = [
    new Recipes(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipes('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])

  ];

  constructor() { }

  setRecipes(recipe: Recipes[]) {
    this.recipes = recipe;
    this.recipeChange.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeWithIndex(index: number) {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipes) {
    this.recipes.push(newRecipe);
    this.recipeChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipes) {
    this.recipes[index] = newRecipe;
    this.recipeChange.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice());
  }
}
