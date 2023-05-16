import { Recipe } from './recipe.model';

export class RecipeService {
   private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','./assets/recipe.jpg'),
        new Recipe('A Test Recipe','This is simply a test','./assets/recipe2.jpg'),
        new Recipe('A Test Recipe','This is simply a test','./assets/recipe3.jpg')
    ];
  
    getRecipes(){
        return this.recipes.slice();
    }
}