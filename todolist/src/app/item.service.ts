import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from "./item.model";
interface ResponseBody {
  user_name: String;
  items: Item[];
}

@Injectable({providedIn: 'root'})
export class ItemService {
  private items: Item[] = [];

  constructor(private http: HttpClient){}

  getItems() {
    const token = localStorage.getItem("token");

    const data = { token: token };
    return this.http
      .post("http://137.184.152.154/api/get_items", data, { observe: "response" });
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
        window.location.href='/view-list';
      } else if (response.status==401){
        window.location.href='/login';
      }
    })
  }
}
