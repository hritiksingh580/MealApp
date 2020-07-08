import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipes.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[] = []

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChange.subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
      }
    )
  }

}
