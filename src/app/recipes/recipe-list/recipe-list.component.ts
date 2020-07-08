import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipes } from '../recipes.model'
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  subscription: Subscription;

  recipes: Recipes[] = []

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChange.subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
