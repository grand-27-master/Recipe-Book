import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  
  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService:RecipeService) {}
  
  ngOnInit() {

    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['index'];
        this.editMode = params['index'] != null;
        this.initForm();
      }
    );
  }

  onSubmit()
  {
    // console.log(this.recipeForm);
    // const newRecipe = new Recipe(
    // this.recipeForm.value['name'],
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],
    // this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

 private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    // let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      // if(recipe['ingredients']){
      //     for(let ingredient of recipe.ingredients){
      //       recipeIngredients.push(
      //         new FormGroup({
      //           'name': new FormControl(ingredient.name),
      //           'amount': new FormControl(ingredient.amount)
      //         })
      //       );
      //     }
      // }
    }
  }
}
