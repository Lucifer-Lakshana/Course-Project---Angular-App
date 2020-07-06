import { Ingredient } from './../Shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slservice:ShoppingListService) { }

  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Recipe[]= [
    new Recipe(
    'Tasty Schnizel',
    'A Super-tasty Schnitzel - just awesome!',
    'https://st.depositphotos.com/1031681/4536/i/450/depositphotos_45368821-stock-photo-breaded-chicken-schnitzel-fries.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://cdn.pixabay.com/photo/2017/04/23/09/03/hamburger-2253349_960_720.jpg',
    [
      new Ingredient('Buns',1),
      new Ingredient('Meat',20)
    ])
    
  ];

  getRecipe()
  {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){

    this.slservice.addIngredients(ingredients);

  }

}
