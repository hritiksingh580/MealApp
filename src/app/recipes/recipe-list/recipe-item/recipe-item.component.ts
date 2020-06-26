import { Component, OnInit, Input } from '@angular/core';

import { Recipes } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
