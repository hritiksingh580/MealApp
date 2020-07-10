import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResoverService } from './recipes/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe', component: RecipesComponent, children: [
      { path: '', component: RecipesStartComponent, },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResoverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResoverService] },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
