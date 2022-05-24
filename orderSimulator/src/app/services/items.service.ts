import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
//This service is used to load item data to the app. And search a specific item.
export class ItemsService {

  private _url = "https://localhost:5001/api/Item"; //url of the REST API for Item Controller

  //HttpClient module will do the communication with the API
  constructor(private http: HttpClient) { }

  //Method to get all items
  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this._url);
  }
}
