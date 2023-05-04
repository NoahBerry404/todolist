import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from "./item.model";

@Injectable({providedIn: 'root'})

export class ItemService {
  private items: Item[] = [];
  private itemUpdate = new Subject<Item[]>();

  constructor(private http: HttpClient){}

  getItems(){
    var token = localStorage.getItem('token');
    console.log(token);
    return this.http.post('http://137.184.152.154/api/get_items',token,{observe: 'response'}).subscribe(response => {
      console.log(response);
      if (response.status==401){
        window.location.href='/login';
      }
    })
    console.log(this.items);
    //return [...this.items];
  }

  getItemUpdateListener(){
    return this.itemUpdate.asObservable();
  }

  addItem(title: string, description: string, date: string){
    var data = {
      "token": localStorage.getItem('token'),
      "item_id": Date.now().toString(),
      "title": title,
      "description": description,
      "date": date,
      "completed": false
    }
    return this.http.post('http://137.184.152.154/api/add_item',data,{observe: 'response'}).subscribe(response => {
      console.log(response);
      if(response.status==200){
        //window.location.href='/view-list';
      } else if (response.status==401){
        //window.location.href='/login';
      }
    })
  }
}
