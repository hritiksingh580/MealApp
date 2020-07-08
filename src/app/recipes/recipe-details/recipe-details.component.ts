import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipes;
  id: number;


  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute, 
      private slService: ShoppingListService,
      private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( 
      (parms: Params) => {
        this.id = +parms['id'];
        this.recipe = this.recipeService.getRecipeWithIndex(this.id);
      }
    )
  }

  addIngredientToShoppingLIst() {
    this.slService.addIngredients(this.recipe.ingredient)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

}