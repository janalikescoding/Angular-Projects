import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  chosenRecipe : Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) => {this.chosenRecipe = recipe;}
    );
   }

  ngOnInit(): void {
  }

}
