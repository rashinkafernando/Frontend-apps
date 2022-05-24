import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url = "https://localhost:5001/api/Order/"; //url of the REST API for Order Controller

  //HttpClient module to communicate with the back end API
  constructor(private http: HttpClient) { }

  //Method to get all items
  getAllOrders(): Observable<any>{
    return this.http.get<any>(this._url);
  }

  //method to update order status - to order ready from in queue
  updateStatus(status: number, id: number):Observable<any>{
    return this.http.put<any>(this._url + id, status)
  }
}
