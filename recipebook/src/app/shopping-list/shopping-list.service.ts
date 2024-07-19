import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn:'root'})
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5), new Ingredient('Tomatoes', 10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addToIngredients(newIngredient : Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients);
    }

    addToShoppingList(newIngredients : Ingredient[]){
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.emit(this.ingredients);
    }

    deleteFromIngredients(){
    this.ingredients.pop();
    this.ingredientsChanged.emit(this.ingredients);
    }

    clearIngredients(){
    this.ingredients = [];
    this.ingredientsChanged.emit(this.ingredients);
    }

}