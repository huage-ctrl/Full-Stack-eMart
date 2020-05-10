import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-seller-update-stock',
  templateUrl: './seller-update-stock.component.html',
  styleUrls: ['./seller-update-stock.component.css']
})
export class SellerUpdateStockComponent implements OnInit {
  itemDetail: any;
  tile = "Seller Update Stock";
  constructor(private itemService:ItemService,private activeRoute:ActivatedRoute ) { }


  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      let id = param['id'];
      console.log(id);
      this.itemDetail = this.itemService.getItemById(Number(id))
    });
  }

}
