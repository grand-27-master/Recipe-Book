import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import {Params} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

 constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(){
    // const index = this.route.snapshot.params['index'];
    // this.recipe = this.recipeService.getRecipe(index);
    this.route.params.subscribe(
      (params:Params) => {
        this.index = +params['index'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    );
  }
 
onAddToShoppingList(){
  // console.log("onAddToShoppingList() called");
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}

onEditRecipe()
{
  // console.log("onEditRecipe() called");
  // this.router.navigate(['edit'],{relativeTo:this.route});
  this.router.navigate(['../',this.index,'edit'],{relativeTo:this.route});
}
}