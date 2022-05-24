import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  btnText = "";

  @Input() order = {} as Order; //order object to receive value from above
  @Input() orderIndex = false; //to change button text 
  @Input() orderId : number = 0;
  @Input() picked = false;
  date : any;
  color = "" ; //button color change
  statusOrderReady = 3; //order ready
  statusPickedUp = 4; //picked up
  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.date = new Date(this.order.dateTime).toISOString().slice(11,19);
 
    //to get button text
    this.checkButton();
    
  }

  checkButton(){
    //change button text to show the order progress    
    if(this.orderIndex){
      return this.btnText = "Mark Prepared";
    }else if(this.picked){
      return this.btnText = "Picked Up";
    }
    else{
      return this.btnText = "Start Preparing";
    }
  }

  changeColor(){
    if(this.orderIndex){
      this.color = 'teal';
    }else{
      this.color = 'blue';
    }
  }

  //update order status
  UpdateStatus(id: number){
   
    if(this.picked){
      console.log(this.picked);
      //update orders in prepared tab
      this._orderService.updateStatus(this.statusPickedUp,id).subscribe(() => {
        console.log("updated picked up!");
      }) 
    }else{

      //updated orders in in queue tab
      this._orderService.updateStatus(this.statusOrderReady,id).subscribe(() => {
        console.log("updated!");
      })
    }

    
  }
  
}
