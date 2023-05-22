import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import {NgForm} from '@angular/forms';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs';  

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
})
export class EditItemComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm:NgForm;

  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editemItem:Ingredient;
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppinglistservice.startedEditing.subscribe(
      (index:number)=>{
        // console.log(index);
        this.editMode=true;
        this.editedItemIndex=index;
        this.editemItem=this.shoppinglistservice.getIngredient(index);
        this.slForm.setValue({
          name:this.editemItem.name,
          amount:this.editemItem.amount
        });
      }
    );
  }

  onAdd(form:NgForm) {
    // console.log('add');
    const value = form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    this.shoppinglistservice.addIngredient(newIngredient); 
  }

  onDelete() {
    // console.log('delete');
  }

  onClear() {
    // console.log('clear');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
