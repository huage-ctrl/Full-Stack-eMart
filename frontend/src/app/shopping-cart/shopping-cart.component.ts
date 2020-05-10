import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

tile="Shopping Cart-CheckOut"
// constructor() { }
  //
  // ngOnInit(): void {
  // }
  constructor( private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.cartList = this.itemService.getCartItembyUserId(localStorage.getItem("username"));
  }

  cartList: any[] = [];
  master: boolean = false;
  total: any = { price: 0,itemNumbers:1};
  itemId: any;

  selectAll() {
    this.master = !this.master;
    this.cartList.forEach(item => {
      item.checked = this.master;
    });
    this.totalCal();
  }


  totalCal(): void {
      let totalPrice:number = 0;
    this.cartList.forEach(item => {
      if (item.checked) {
        totalPrice = item.price * item.itemNumbers;
      }
    })
    this.total.price = totalPrice;
  }
  deleteItem(itemId) {
    this.itemService.deleteItem(itemId);
  }
}
