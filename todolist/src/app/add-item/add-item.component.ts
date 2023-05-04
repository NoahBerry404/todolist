import { ItemService } from './../item.service';
import { Component, EventEmitter} from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  pawprint = "Drew Clutes, AACK2F";
  constructor(public ItemService: ItemService){}
  onAddItem(form: NgForm){
    if(form.invalid){
      return;
    }
    this.ItemService.addItem(form.value.title,form.value.description,form.value.date);
    form.resetForm();
  }
}
