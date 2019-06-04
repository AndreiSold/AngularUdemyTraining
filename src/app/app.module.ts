import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipeItemComponent} from './features/recipe-book/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './features/recipe-book/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './features/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './features/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeListComponent} from './features/recipe-book/recipe-list/recipe-list.component';
import {RecipesComponent} from './features/recipe-book/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
