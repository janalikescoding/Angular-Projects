import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe : Recipe;
  //recipeDetails : Record<string, string[]> = {};
  //ingredients : Ingredient[] = [new Ingredient('water', 1), new Ingredient('salt',2)];

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  
  // displayDetails(recipeItem : Recipe){
  //   this.recipe = recipeItem
  //   this.populateIngredients(this.recipe.name);
  // }

  // populateIngredients(recipeName : string){
  //   this.recipeDetails[recipeName] = ['water', 'salt'];
  // }

  toShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
