import { Component,ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {

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

  onDelete() {
    // console.log('delete');
  }

  onClear() {
    // console.log('clear');
  }
}
