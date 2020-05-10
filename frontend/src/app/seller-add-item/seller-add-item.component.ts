import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
@Component({
  selector: 'app-seller-add-item',
  templateUrl: './seller-add-item.component.html',
  styleUrls: ['./seller-add-item.component.css']
})

export class SellerAddItemComponent implements OnInit {
  constructor(private itemService:ItemService) { }
  tile="Seller Add Item";
  categoryList:any[];
  subCategoryList:any[];
  ngOnInit(): void {
    this.categoryList = this.itemService.getCategoryList();
  }
  getSubCategoryNameByCategory(categeryName){
    this.subCategoryList = this.itemService.getSubCategoryByCategory(categeryName);
  }

  onSubmit(value: any) {

  }
}
