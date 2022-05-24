import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-in-queue',
  templateUrl: './in-queue.component.html',
  styleUrls: ['./in-queue.component.css']
})
export class InQueueComponent implements OnInit {

  //get data from parent component
  @Input() queueOrders : any; 
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
