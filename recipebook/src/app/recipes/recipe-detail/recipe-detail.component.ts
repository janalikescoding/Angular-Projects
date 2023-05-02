import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe : Recipe;
  //recipeDetails : Record<string, string[]> = {};
  //ingredients : Ingredient[] = [new Ingredient('water', 1), new Ingredient('salt',2)];

  constructor() { }

  ngOnInit(): void {
  }

  
  // displayDetails(recipeItem : Recipe){
  //   this.recipe = recipeItem
  //   this.populateIngredients(this.recipe.name);
  // }

  // populateIngredients(recipeName : string){
  //   this.recipeDetails[recipeName] = ['water', 'salt'];
  // }

}
