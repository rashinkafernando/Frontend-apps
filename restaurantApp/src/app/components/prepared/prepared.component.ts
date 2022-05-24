import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepared',
  templateUrl: './prepared.component.html',
  styleUrls: ['./prepared.component.css']
})
export class PreparedComponent implements OnInit {

  //get data from parent component
  @Input() preparingOrders : any; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
