import { Injectable, EventEmitter } from '@angular/core';

import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes(
      'A Text1 Recipe',
      'This is a simple text',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
    ),
    new Recipes(
      'A Text2 Recipe',
      'Another simple text',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
    ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
