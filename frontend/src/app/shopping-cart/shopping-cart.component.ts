import { Component, OnInit } from '@angular/core';
import { ItemService} from '../services/item.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


// constructor() { }
  //
  // ngOnInit(): void {
  // }
  constructor(private cartService: CartService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartItembyUserId("Tester");
    console.log("cart list: " + JSON.stringify(this.cartList));
    if (this.cartList) {
      let items: any
      this.cartList.forEach(item => {
        items = this.itemService.getItemById(item.itemId);
        item.itemName = items.itemName;
        item.price = items.price;
        item.GST = items.GST;
      });
      console.log("cart List after:" + JSON.stringify(this.cartList));
    }
  }

  public cartList: any[] = [];
  public itemList: any[] = [];
  public master: boolean = false;

  selectAll() {
    this.master = !this.master;
    this.cartList.forEach(item => {
      item.checked = this.master;
    });
    this.totalCal();
  }

  // display in the bottom of cart page
  public total: any = {tax: 0, price: 0, discount: 0, cost: 0};

  totalCal(): void {
    //   let total:any = {};
    let totalTax: number = 0;
    let totalPrice: number = 0;
    let totalCost: number = 0;
    // let discount: number = 0;
    this.cartList.forEach(item => {
      if (item.checked) {
        totalTax = (totalTax + (item.price * item.GST)) * item.itemNumbers;
        totalPrice = (totalPrice + item.price) * item.itemNumbers;
      }
    })
    // totalCost = (totalPrice + totalTax) * (1 - discount);
    this.total.tax = totalTax;
    this.total.price = totalPrice;
    // this.total.discount = discount;
    this.total.cost = totalCost;
  }
}
