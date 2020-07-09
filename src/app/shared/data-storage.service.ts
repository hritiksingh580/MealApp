import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

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
}