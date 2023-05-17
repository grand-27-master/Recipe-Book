import { Component,ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
})
export class EditItemComponent {

  ingredients:Ingredient[];

  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  onAdd() {
    // console.log('add');
    const ingredientName=this.nameInputRef.nativeElement.value;
    const ingredientAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingredientName,ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  onDelete() {
    // console.log('delete');
  }

  onClear() {
    // console.log('clear');
  }
}
