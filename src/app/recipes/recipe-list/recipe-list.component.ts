import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
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

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }

}
