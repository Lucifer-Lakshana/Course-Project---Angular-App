import { Ingredient } from './../../Shared/ingredients.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:true}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:true}) amountInputRef:ElementRef;

  
  constructor(private slService: ShoppingListService) { }

  onAddItem(){

    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    
    this.slService.addIngredient(newIngredient);

  }
  
  

  ngOnInit() {
  }

}
