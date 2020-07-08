import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

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
    if(this.editable) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancle();
  }

  onCancle() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let reccipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if(this.editable) {
    const recipes = this.recipeService.getRecipeWithIndex(this.id);

      recipeName = recipes.name;
      recipeImagePath = recipes.imagePath;
      reccipeDescription = recipes.name;
      if(recipes['ingredient']) {
        for (let ingredient of recipes.ingredient) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(reccipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  get controls() { 
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(),
        'amount': new FormControl(),
      })
    )
  }

}
