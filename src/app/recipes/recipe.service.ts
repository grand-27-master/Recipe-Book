import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

   recipesChanged = new Subject<Recipe[]>();
   private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','./assets/recipe.jpg',[new Ingredient('Cheese',1),new Ingredient('French Fries',20)]),
        new Recipe('A Test Recipe','This is simply a test','./assets/recipe2.jpg',[new Ingredient('Buns',2),new Ingredient('Paneer',1)]),
        new Recipe('A Test Recipe','This is simply a test','./assets/recipe3.jpg',[new Ingredient('Butter',2),new Ingredient('Bread',1)])
    ];

    constructor(private slService:ShoppingListService){}
  
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}