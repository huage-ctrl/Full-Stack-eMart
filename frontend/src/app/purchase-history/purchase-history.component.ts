import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  constructor(private itemService:ItemService) { }
  purchaseList:any[];
  ngOnInit(): void {
    this.purchaseList = this.itemService.getPurchaseHistoryByBuyerId("buyer001");
  }

}
