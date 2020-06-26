import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.recipeSelected.emit();
  }

}
