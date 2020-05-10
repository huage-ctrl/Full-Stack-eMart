import { Injectable} from '@angular/core';

// export interface Item{
//   id:number,
//   item_name:string,
//   category_id:string,
//   subcategory_id:string,
//   price:string,
//   description:string,
//   stock_num:number,
//   seller_id:string,
//   photo:string,
//   remark:string
// }

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  //sample data this data will get from backend.
  cartItemList = [
    {cartId:1,item_id:'1',  item_name: "HUAWEI P11", itemNumbers: 5,buyerId:"buyer001", price:"1000", checked:false},
    {cartId:2,item_id:'2',  item_name: "HUAWEI P12", itemNumbers: 3,buyerId:"buyer001", price:"2000", checked:false},
    {cartId:3,item_id:'3',  item_name: "HUAWEI P13", itemNumbers: 3,buyerId:"buyer002", price:"3000", checked:false},
    {cartId:4,item_id:'4',  item_name: "HUAWEI P14", itemNumbers: 1,buyerId:"buyer001", price:"4000", checked:false}

  ]

  //search cart
  getCartItembyUserId(userId){
    let cartList:any[] = [];
    this.cartItemList.forEach(item=>{
      if (item.buyerId === userId){
        cartList.push(item);
      }
    })
    return cartList;
  }
  //addCart
  addToCart(item) {
    this.itemList.push(item);
  }
  //delete cart
  deleteItem(itemId) {
    this.cartItemList.splice(itemId, 1);
  }


  // addItemtoCart(itemId:number, itemNumbers:number, buyer:string){
  //   let iteminCart:any = {};
  //   iteminCart.itemId = itemId;
  //   iteminCart.itemNumbers = itemNumbers;
  //   iteminCart.buyerId = buyer;
  //   let date = new Date();
  //   iteminCart.updateDate = this.datePipe.transform(date, "yyyy-MM-dd");
  //   this.cartItemList.push();
  // }
//purchaseSampleData
  purchaseHistoryData = [
    {id:1, buyerId:"buyer001", sellerId:"seller001", transferId:1, itemId:1, itemname:"Huawei P40", numberOfItem:4, Price: 4300, DataTime:"2019-05-06"},
    {id:2, buyerId:"buyer001", sellerId:"seller001", transferId:1, itemId:3, itemname:"Huawei P40 PRO", numberOfItem:1, Price: 6300, DataTime:"2019-04-08"},
    {id:3, buyerId:"buyer002", sellerId:"seller002", transferId:1, itemId:3, itemname:"Huawei P30 PRO", numberOfItem:3, Price: 6000, DataTime:"2019-06-10"},
    {id:4, buyerId:"buyer001", sellerId:"seller002", transferId:1, itemId:2, itemname:"Huawei P30", numberOfItem:1, Price: 3400, DataTime:"2019-06-18"}
  ]
  getPurchaseHistoryByBuyerId(id:string){
    let pruchaseList:any[]= [];
    this.purchaseHistoryData.forEach(item=>{
      if(item.buyerId === id){
        pruchaseList.push(item);
      }
    })
    return pruchaseList;
  }

  getReportBySellerId(sellerid:string){
    let purchaseList:any[] = [];
    this.purchaseHistoryData.forEach(pur=>{
      if(pur.sellerId === sellerid){
        purchaseList.push(pur)
      }
    });
    return purchaseList;
  }
//sample data itemlist
itemList = [
  {
    item_id:1,
    item_name:'HUAWEI P11',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1342',
    description:'<div>Certificate no. : 2020011606272301 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br></div>',
    stock_num:11111,
    seller_id:'Huawei Tech',
    remark:'selling',
    photo:'../assets/images/huawei1.jpg'
  },
  {
    item_id:2,
    photo:'../assets/images/huawei2.jpg',
    item_name:'HUAWEI P22',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$366',
    description:'Certificate no. : 2020011606272302 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:2222,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:3,
    photo:'../assets/images/huawei3.jpg',
    item_name:'HUAWEI P33',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272303 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:333,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:4,
    photo:'../assets/images/huawei4.jpg',
    item_name:'HUAWEI P44',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272304 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:444,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:5,
    photo:'../assets/images/huawei5.jpg',
    item_name:'HUAWEI P55',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272305 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:555,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:6,
    photo:'../assets/images/huawei6.jpg',
    item_name:'HUAWEI P66',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272306 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:666,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:7,
    photo:'../assets/images/huawei7.jpg',
    item_name:'HUAWEI P77',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272307 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:777,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:8,
    photo:'../assets/images/huawei8.jpg',
    item_name:'HUAWEI P88',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$999',
    description:'Certificate no. : 2020011606272308 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:888,
    seller_id:'Huawei Tech',
    remark:'selling'
  },
  {
    item_id:9,
    photo:'../assets/images/huawei9.jpg',
    item_name:'HUAWEI P99',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$3000',
    description:'Certificate no. : 2020011606272309 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:999,
    seller_id:'seller001',
    remark:'selling'
  },
  {
    item_id:10,
    photo:'../assets/images/huawei10.jpg',
    item_name:'HUAWEI P10',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272310 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:1000,
    seller_id:'seller001',
    remark:'selling'
  },
  {
    item_id:11,
    photo:'../assets/images/huawei11.jpg',
    item_name:'HUAWEI P11',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272311 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:10000,
    seller_id:'seller001',
    remark:'selling'
  }
  ,
  {
    item_id:12,
    photo:'../assets/images/huawei12.jpg',
    item_name:'HUAWEI P12',
    category_id:'Electronic',
    subcategory_id:'Mobile',
    price:'$1000',
    description:'Certificate no. : 2020011606272312 <br>\n' +
      'certificate status: valid product <br>\n' +
      'name: 5G digital mobile phone <br>\n' +
      '(only checked for 2G,3G and 4G functions) <br>\n' +
      '3C specification model: els-an00 (switching <br>',
    stock_num:1200,
    seller_id:'seller001',
    remark:'selling'
  }
];
  getItemList(){
    return this.itemList;
  }
  // getItemByOwner(seller_id:string){
  //   let itemListByOwner:any[] = [];
  //   this.itemList.forEach(item=>{
  //     if(item.seller === seller){
  //       itemListByOwner.push(item);
  //     }
  //   });
  //   return itemListByOwner;
  // }
  getSoldList(id:string){
    let soldList:any[] = [];
    this.itemList.forEach(item=>{
      if (item.seller_id === id){
        soldList.push(item);
      }
    })
    return soldList;
  }
  getItemById(id:number){
    let itemDetail;
    this.itemList.forEach( item => {
      if(item.item_id === id){
        itemDetail = item;
        return itemDetail;
        // itemDetail.push(item);
      }
    });
    return itemDetail
  }

  getCategoryList(){
    let categoryList = [
      { category_id: 1, category_name: "Electronic"},
      { category_id: 2, category_name: "Fashion"},
      { category_id: 3, category_name: "Everyday use"},
    ];
    return categoryList;
  }

  getSubCategoryNameList(){
    let subCategory =["mobile","Computer","TV","man’s wear","women’s wear","kids’s wear"];
    return subCategory;
  }

  getSubCategoryByCategory(categoryName){
    let subCategoryByCategory:any[] = [];
    let subCategoryList =[
      {subCategory_name:"Mobile", category_name:"Electronic"},
      {subCategory_name:"Camara", category_name:"Electronic"},
      {subCategory_name:"TV", category_name:"Electronic"},
      {subCategory_name:"Computer", category_name:"Electronic"},
      {subCategory_name:"Women’s Wear", category_name:"Fashion"},
      {subCategory_name:"Man’s Wear", category_name:"Fashion"},
      {subCategory_name:"kids’s Wear", category_name:"Fashion"},
      {subCategory_name:"Toothpaste", category_name:"Everyday use"},
      {subCategory_name:"Toilet Articles", category_name:"Everyday use"},
      {subCategory_name:"Bath Preparations", category_name:"Everyday use"},
    ];
    subCategoryList.forEach(sub=>{
      if(sub.category_name===categoryName){
        subCategoryByCategory.push(sub);
      }
    })
    return subCategoryByCategory;
  }
}
