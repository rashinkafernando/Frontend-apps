import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.css']
})
export class FoodContainerComponent implements OnInit {

  foodItems : Item[] = []; //initialize an empty array to populate item data
  selectedItems : Item[] = [] //initialize an empty array to store selected items temporarily when placing an order

  //get item service
  constructor(private _itemService: ItemsService) { }

  ngOnInit(): void {
    this.loadAllFoodItems();
  }

  //To load all items
  loadAllFoodItems() {
    this._itemService.getAllItems().subscribe(data => {
      this.foodItems = data; //assign data to foodItems
    })
  }

}
