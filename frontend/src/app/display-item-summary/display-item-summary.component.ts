import { Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-display-item-summary',
  templateUrl: './display-item-summary.component.html',
  styleUrls: ['./display-item-summary.component.css'],
  providers:[]
})
export class DisplayItemSummaryComponent implements OnInit {
  constructor(private itemService: ItemService,
              public router: Router) {
  }

  itemList: any[];

  ngOnInit(): void {
    this.itemList = this.itemService.getItemList();
   };
  title = 'Item Search Result';
  searchText;
}
