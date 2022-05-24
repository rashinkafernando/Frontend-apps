import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url = "https://localhost:5001/api/Order"; //url of the REST API for Order Controller

  //HttpClient module to communicate with the back end API
  constructor(private http: HttpClient) { }

  //create a new order
  createOrder(orderObj : Order): Observable<any>{
    return this.http.post(this._url, orderObj);
  }
}
