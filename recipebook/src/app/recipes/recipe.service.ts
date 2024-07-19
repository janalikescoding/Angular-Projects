import { Injectable,EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
    new Recipe("Sphagetti", "Sphagetti squash with mozzarella", "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg",
    [new Ingredient("Sphagetti",1),
    new Ingredient("Squash",1),
    new Ingredient("Tomato",3),
    new Ingredient("Mozzarella",2)]),
    new Recipe("Mac and Cheese", "Creamy baked mac and cheese (Indian Vegetarian)", "https://www.tasteofhome.com/wp-content/uploads/2018/05/Baked-Mac-and-Cheese_EXPS_SDDJ17_25257_D08_04_4b.jpg",
    [new Ingredient("Macaroni",1),
    new Ingredient("Cheddar Cheese",2)])];

getRecipes(){
    return this.recipes.slice();
}

constructor(private slService : ShoppingListService){

}

addToShoppingList(ingredients: Ingredient[]){
    this.slService.addToShoppingList(ingredients);
}

}