import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
@Component({
  selector: 'app-seller-selling-list',
  templateUrl: './seller-selling-list.component.html',
  styleUrls: ['./seller-selling-list.component.css']
})
export class SellerSellingListComponent implements OnInit {
  constructor(private itemService:ItemService) { }
  tile = "Seller Add Item";
  soldList:any[];
  ngOnInit(): void {
    this.soldList = this.itemService.getSoldList(localStorage.getItem("username"))
  }
}
