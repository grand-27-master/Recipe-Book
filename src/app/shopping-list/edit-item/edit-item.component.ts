import { Component,ViewChild, ElementRef,EventEmitter, Output, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  providers:[ShoppingListService]
})
export class EditItemComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  onAdd() {
    // console.log('add');
    const ingredientName=this.nameInputRef.nativeElement.value;
    const ingredientAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingredientName,ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  ngOnInit() {
  }

  onDelete() {
    // console.log('delete');
  }

  onClear() {
    // console.log('clear');
  }
}
