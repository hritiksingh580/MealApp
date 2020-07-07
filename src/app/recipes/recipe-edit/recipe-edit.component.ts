import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editable = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (parms: Params) => {
          this.id = parms['id'],
          this.editable = parms['id'] != null;
          this.initForm();
        }
      )
  } 

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let reccipeDescription = "";

    if(this.editable) {
    const recipes = this.recipeService.getRecipeWithIndex(this.id);

      recipeName = recipes.name;
      recipeImagePath = recipes.imagePath;
      reccipeDescription = recipes.name
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(reccipeDescription),
    })
  }

}
