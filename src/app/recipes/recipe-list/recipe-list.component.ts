import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipes } from '../recipes.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = []

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }

}
