import { Ingredient } from './ingredient.model';

export class ShoppingListService{

   private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Potatoes', 15)
    ];

    getIngredients(){
        return this.ingredients;
    }

    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
    }
}