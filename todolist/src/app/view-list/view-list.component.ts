import { Item } from './../item.model';
import { ItemService } from './../item.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
interface ResponseBody {
  user_name: String;
  items: Item[];
}

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})

export class ViewListComponent implements OnInit {
  items: Item[] = [];
  count = 0;
  private itemsSub!: Subscription;

  constructor(public ItemService: ItemService) {}

  ngOnInit(){
    console.log("OUTSIDE SERVICE")
    console.log(this.ItemService.getItems().subscribe((response) => {
        console.log(response);
        if (response.status == 200) {
          if (response.body) {
            // Cast the response.body to the ResponseBody type
            const responseBody = response.body as ResponseBody;
            const items: Item[] = responseBody.items;

            // Log the items array
            console.log(items);

            // Log each item
            items.forEach((item, index) => {
              console.log(`Item ${index}:`, item);
            });

            // Assign the items array to this.items
            this.items = items;
            this.count = items.length;
          }
        }
        if (response.status == 401) {
          window.location.href = "/login";
        }
      }));

  }
}
