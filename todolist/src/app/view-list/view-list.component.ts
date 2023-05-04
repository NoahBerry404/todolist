import { Item } from './../item.model';
import { ItemService } from './../item.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})

export class ViewListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  count = 0;
  private itemsSub!: Subscription;

  constructor(public ItemService: ItemService) {}

  ngOnInit(){
    this.ItemService.getItems();
    this.itemsSub = this.ItemService.getItemUpdateListener().subscribe((items: Item[])=>{
      this.items = items
      this.count = items.length;
    })
  }

  ngOnDestroy(){
    this.itemsSub.unsubscribe();
  }
}
