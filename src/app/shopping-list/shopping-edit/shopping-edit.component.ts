import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editableIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing
    .subscribe(
      (index: number) => {
        this.editableIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredint(index);
        this.slForm.setValue(
          {
            name: this.editItem.name,
            amount: this.editItem.amount,
          }
        )
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredients(this.editableIndex, newIngredient);
      this.editMode = !this.editMode;
    } else {
      this.shoppingListService.addIngredint(newIngredient);
    }
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
