import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipes;
  id: number;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( 
      (parms: Params) => {
        this.id = +parms['id'];
        this.recipe = this.recipeService.getRecipeWithIndex(this.id);
      }
    )
  }

}
