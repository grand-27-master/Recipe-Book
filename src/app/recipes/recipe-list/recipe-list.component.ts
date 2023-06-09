import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected= new EventEmitter<Recipe>();
    recipes:Recipe[];
    constructor(private recipeService:RecipeService, private router:Router, private route:ActivatedRoute) {
    }

    ngOnInit() {
      this.recipeService.recipesChanged.subscribe(
        (recipes:Recipe[])=>{
          this.recipes=recipes;
        }
      );
      this.recipes=this.recipeService.getRecipes();
    }

    onRecipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe);
    }

    onNewRecipe()
    {
      // console.log("onNewRecipe() called");
      this.router.navigate(['new'],{relativeTo:this.route});
    }
}
