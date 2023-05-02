import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("Sphagetti", "Sphagetti squash with mozzarella", "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg")
,new Recipe("Mac and Cheese", "Creamy baked mac and cheese (Indian Vegetarian)", "https://www.tasteofhome.com/wp-content/uploads/2018/05/Baked-Mac-and-Cheese_EXPS_SDDJ17_25257_D08_04_4b.jpg")]
  @Output() selectRecipe = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(selectedRecipe : Recipe){
    this.selectRecipe.emit(selectedRecipe);
  }

}
