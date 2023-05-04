import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from "./item.model";

@Injectable({providedIn: 'root'})

export class PostService {
  private items: Item[] = [];
  private itemUpdate = new Subject<Item[]>();

  constructor(private http: HttpClient){}

  getItems(){
    this.http.get<{message: string, items: Item[]}>('http://localhost:3000/api/posts').subscribe((itemData)=>{
      this.item = itemData.items;
      this.itemUpdate.next([...this.items]);
    })
    console.log("getPosts() function");
    console.log(this.items);
    return [...this.items];
  }

  getPostUpdateListener(){
    return this.itemUpdate.asObservable();
  }

  addPost(title: string, description: string, priority: number){
    console.log("addPost() function");
    const item: Item = {title: title, description: description, priority: priority};
    console.log(this.items);
    this.items.push(item);
    this.itemUpdate.next([...this.items]);
  }
}
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
}
