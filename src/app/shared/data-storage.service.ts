import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';

import { Recipes } from '../recipes/recipes.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://angular-protfolio-5fb7d.firebaseio.com/recipe.json', recipes)
            .subscribe((response) => {
                console.log(response);
            })
    }

    fetchService() {
        return this.http.get<Recipes[]>('https://angular-protfolio-5fb7d.firebaseio.com/recipe.json')
            .pipe(map(recipe => {
                return recipe.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredient ? recipe.ingredient : [] };
                });
            }),
            tap(recipe => {
                this.recipeService.setRecipes(recipe);
            })
            )
    }
}