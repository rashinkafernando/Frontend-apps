import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {

  title = "Your Order";
  message = "Order is placed successfully!";
  @Input() public Items : Item[] = []; //empty array of item objects
  @Input() public menuItems : MenuItem[] = []; //empty array of menu item objects

  public order = {} as Order //order object
  orderSubmitted = false;

  totalAmount = 0; //Total amount for the order
  interval : any;
  constructor(private _orderService : OrderService) { }

  ngOnInit(): void {    
    this.interval = setInterval(() => {
      this.totalAmount = this.menuItems.reduce((totalAmount,item) => totalAmount + item.price, 0) //calculate total amount   
    }, 3000);
  }

  //place order
  placeOrder(){
    //populate the order object with data

    if(this.menuItems.length > 0){
    
      //create order id - alphanumeric value
      var currentTimeInMilSec = new Date().getTime().toString();
      var value = currentTimeInMilSec.substring(currentTimeInMilSec.length - 4); //last part is extracted      
      this.order.orderId = "Order_" + value; //order id concatanated with order word

      this.order.dateTime = new Date();
      this.order.orderedThrough = 1; //by default online. Since this is mobile app simulator
      this.order.orderType = 2; //take away type
      this.order.orderStatus = 1; //when the order is placing, status is In Queue. 
      this.order.menuItems = this.menuItems; //assign the selected menu items in the cart.
      
      this._orderService.createOrder(this.order).subscribe(
        () => {
          this.orderSubmitted = true;          
        }
      )
    }
  }
}
