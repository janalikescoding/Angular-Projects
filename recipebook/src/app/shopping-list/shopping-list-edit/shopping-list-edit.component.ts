import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameRef : ElementRef;
  @ViewChild('amountInput', {static: false}) amountRef : ElementRef;

  @Output() addIngredientNow = new EventEmitter<Ingredient>();
  @Output() deleteIngredientNow = new EventEmitter<void>();
  @Output() clearIngredientsNow = new EventEmitter<void>();

  ingredients : Ingredient[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(event){
    event.preventDefault();
    //this.ingredients.push(new Ingredient(name, amount));
    var name = this.nameRef.nativeElement.value;
    var amount = this.amountRef.nativeElement.value;
    this.addIngredientNow.emit(new Ingredient(name, amount));
  }

  deleteIngredient(event){
    event.preventDefault();
    this.deleteIngredientNow.emit();
  }

  clearAllIngredients(event){
    event.preventDefault();
    this.clearIngredientsNow.emit();
  }
}
