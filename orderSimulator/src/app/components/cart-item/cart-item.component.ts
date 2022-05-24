import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  pricePerItem : number = 0; //price of each item
  portionSize : number = 0; //size of the portion will be given as a number S - 1, M - 2, L - 3
  noOfItems : number = 0; //number of food items minimum value

  menuItem = {} as MenuItem; //declare empty menu item object 

  @Input() public Item = {} as Item; //empty object

   //This will be used to used to remove item 
   @Output() public removeItemFromOrder = new EventEmitter(); //use @Output() decorator to pass value to parent component
   
   @Output() public addMenuItems = new EventEmitter(); //pass menu item to the order placement component
   //@Output() public removeMenuItems = new EventEmitter(); //remove menu item from the order placement component

  constructor() { }

  ngOnInit(): void {
  }

  //Remove selected items from the list
  removeItem(){
    this.removeItemFromOrder.emit(this.Item.itemCode); //pass the selected item to the parent component
   // this.removeMenuItems.emit(this.menuItem);
  }

  //select portion size
  changeSize(value: any){
    this.portionSize = value; //set the portion size

    //calculate amount when there's a change
    this.calculateAmount();
  }

  //input number of items
  updateAmount(value : any){
    this.noOfItems = value.target.value;
     this.calculateAmount();
  }

  //create an item menu to place the order
  addItemMenu(){  
    this.menuItem.itemCode = this.Item.itemCode;
    this.menuItem.description = this.Item.itemName;
    this.menuItem.portionSize = this.portionSize;
    this.menuItem.price = this.pricePerItem; 
    this.menuItem.noOfItems = this.noOfItems;   
  }

  calculateAmount(){
   /**
    *  Making few assumptions here.
    *  The given price of any food item is considered as full potion.
    *   Small portion's amount will 1/3 of that value.
    *   Medium size will be 2/3 of the full price.
    */

    if(this.portionSize == 3)
    {
       this.pricePerItem = this.Item.itemPrice * this.noOfItems; //calculate the total amount per row
    }
    else if(this.portionSize == 2)
    {
      this.pricePerItem = Math.round((this.Item.itemPrice / 3) * 2) * this.noOfItems; //rounding up the value
    }
    else if(this.portionSize == 1)
    {
      this.pricePerItem = Math.round(this.Item.itemPrice / 3) * this.noOfItems;
    }
  }

  addMenuItemsToOrder(){
    this.addItemMenu();
    this.addMenuItems.emit(this.menuItem);
  }
}
