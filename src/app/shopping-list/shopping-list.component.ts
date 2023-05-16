import { Component } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  providers:[ShoppingListService]
})
export class ShoppingListComponent {
  ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 15)
  ];

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }
}
