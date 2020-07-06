import { Ingredient } from './../Shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[]=[

    new Ingredient('Apples',5),
    new Ingredient('Tommatos',10)

  ];

  getIngredient(){

    return this.ingredients.slice();

  }


  addIngredient(ingredient: Ingredient){

    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
}


addIngredients(ingredients: Ingredient[]){

//hard way to add ingredient
// for(let ingredient of ingredients){

//   this.addIngredient(ingredient);
// }

//using ES type Scrpit easy way
this.ingredients.push(...ingredients);
this.ingredientsChanged.emit(this.ingredients.slice());

}

}
