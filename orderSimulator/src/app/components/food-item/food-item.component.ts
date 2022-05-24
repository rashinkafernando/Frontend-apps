import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() public Item = {} as Item; //empty object

  //This will be used to used to add item to the order
  @Output() public addItemToOrder = new EventEmitter(); //use @Output() decorator to pass value to parent component

  constructor() { }

  ngOnInit(): void {
  }

  addItems(){
    this.addItemToOrder.emit(this.Item); //pass the selected item to the parent component
  }
}
