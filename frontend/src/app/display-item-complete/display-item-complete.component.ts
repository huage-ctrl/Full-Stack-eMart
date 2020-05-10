import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-display-item-complete',
  templateUrl: './display-item-complete.component.html',
  styleUrls: ['./display-item-complete.component.css']
})
export class DisplayItemCompleteComponent implements OnInit {
  tile = "Item Specifications"
  itemDetail: any;
  product: any;
  constructor(private itemService: ItemService,
              private activeRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      let id = param['id'];
      console.log(id);
      this.itemDetail = this.itemService.getItemById(Number(id))
    });
  }

  addToCart(product) {
    // this.itemService.addToCart(product);
  }
}
