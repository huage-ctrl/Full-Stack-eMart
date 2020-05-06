import { Injectable} from '@angular/core';
import {DatePipe} from "@angular/common";

export interface Item{
  id:number,
  images1:string,
  item_name:string,
  category:string,
  sub_category:string,
  price:string,
  description:string,
  stock_num:number,
  seller:string,
  remark:string
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(public datePipe:DatePipe) { }
  //sample data this data will get from backend.
  cartItemList = [
    {cartId:1, itemId: 2, itemNumbers: 5,buyerId:"buyer001", updateDate:"2020-04-21", checked:false},
    {cartId:2, itemId: 1, itemNumbers: 1,buyerId:"buyer001", updateDate:"2020-04-21", checked:false}
  ]

  getCartItembyUserId(userId){
    let itemList:any[] = [];
    this.cartItemList.forEach(item=>{
      if (item.buyerId === userId){
        itemList.push(item);
      }
    })
    return itemList;
  }

  addItemtoCart(itemId:number, itemNumbers:number, buyer:string){
    let iteminCart:any = {};
    iteminCart.itemId = itemId;
    iteminCart.itemNumbers = itemNumbers;
    iteminCart.buyerId = buyer;
    let date = new Date();
    iteminCart.updateDate = this.datePipe.transform(date, "yyyy-MM-dd");
    this.cartItemList.push();
  }

//sample data itemlist
 itemList = [
  {
    id:1,
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling',
    images1:'3c.jpg'
  },
  {
    id:2,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:3,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:4,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:5,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:6,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:7,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:8,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:9,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:10,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  },
  {
    id:11,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  }
  ,
  {
    id:12,
    images1:'3c.jpg',
    item_name:'HUAWEI P40',
    category:'Electronic',
    sub_category:'Mobile',
    price:'$1000',
    description:'111111111111111111',
    stock_num:10000,
    seller:'Huawei Tech',
    remark:'selling'
  }
];
  // getItemList(){
  //   return this.itemList;
  // }
  // getItemByOwner(seller:string){
  //   let itemListByOwner:any[] = [];
  //   this.itemList.forEach(item=>{
  //     if(item.seller === seller){
  //       itemListByOwner.push(item);
  //     }
  //   });
  //   return itemListByOwner;
  // }
  getItemById(id:number){
    let itemDetail;
    this.itemList.forEach( item => {
      if(item.id === id){
        itemDetail = item;
        return itemDetail;
      }
    });
    return itemDetail;
  }

}
