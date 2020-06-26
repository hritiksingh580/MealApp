import { Component, OnInit, Input } from '@angular/core';

import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipes;


  constructor() { }

  ngOnInit(): void {
  }

}
