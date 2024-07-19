import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameRef : ElementRef;
  @ViewChild('amountInput', {static: false}) amountRef : ElementRef;
  ingredients : Ingredient[] = [];
  
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(event){
    event.preventDefault();
    //this.ingredients.push(new Ingredient(name, amount));
    var name = this.nameRef.nativeElement.value;
    var amount = this.amountRef.nativeElement.value;
    this.shoppingListService.addToIngredients(new Ingredient(name, amount));
  }

  deleteIngredient(event){
    event.preventDefault();
    this.shoppingListService.deleteFromIngredients();
  }

  clearAllIngredients(event){
    event.preventDefault();
    this.shoppingListService.clearIngredients();
  }
}
