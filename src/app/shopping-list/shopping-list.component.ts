import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 15),
    new Ingredient('Grapse', 10),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
