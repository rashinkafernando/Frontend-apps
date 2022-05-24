import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Chinese Dragon';
  interval : any;

  queueOrders : Order[] = []; //empty array of order objects to store inqueue orders
  preparingOrders : Order[] = []; //empty array of order objects to store preparing orders

  constructor(private _orderService : OrderService) { }

  ngOnInit(): void {
    this.loadAllOrders(); //calling the function when the component is initialized
    //update data real time
    this.interval = setInterval(() => {
      this.loadAllOrders();
    }, 5000);
  }

  //To load all orders
  loadAllOrders() {
    this._orderService.getAllOrders().subscribe(data => {
      this.queueOrders = data.queueList;
      this.preparingOrders = data.preparingList;
    })   
  }

}
