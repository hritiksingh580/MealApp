import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/recipe', pathMatch: 'full'
  }, {
    path: 'recipe', component: RecipesComponent, children: [
      {
        path: '' , component: RecipesStartComponent,
      }, {
        path: ':id', component: RecipeDetailsComponent,
      }
    ]
  }, {
    path: 'shopping-list', component: ShoppingListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
