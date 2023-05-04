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
    this.http.get<{message: string, items: Item[]}>('http://137.184.152.154/api/get_items').subscribe((itemData)=>{
      this.items = itemData.items;
      this.itemUpdate.next([...this.items]);
    })
    console.log("getPosts() function");
    console.log(this.items);
    return [...this.items];
  }

  getItemUpdateListener(){
    return this.itemUpdate.asObservable();
  }

  addItem(title: string, description: string){
    console.log("addPost() function");
    const item: Item = {title: title, description: description};
    console.log(this.items);
    this.items.push(item);
    this.itemUpdate.next([...this.items]);
  }
}
