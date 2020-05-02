import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  allItemList = [
    {itemId:1, itemName: "jeans", itemCategory: "Fashion",itemSubcategory:"Computer", price:100.00, picture:"clothes.jpg",discription:"famal",GST:0.1, stockNumbers:10000},
    {itemId:2, itemName: "iPhone", itemCategory: "Electronic",itemSubcategory:"3c", price: 100.00, picture:"iPhone.jpg",discription:"CCCCCC",GST:0.15, stockNumbers:10000},
    {itemId:3, itemName: "xiaomiTV", itemCategory: "Electronic",itemSubcategory:"TV", price: 500.00, picture:"tv.jpg",discription:"GOOOO",GST:0.2, stockNumbers:100000},
  ]

  getItemList(){
      // will request form back
    //   let itemList =
      return this.allItemList;
  }
  getItemListByCate(category : String){
    //
    let items = [];
    this.allItemList.forEach( item => {
        if(item.itemCategory === category){
            items.push(item);
        }
    })
    return items;
  }
  serachItem(name : string){
        //
        let searchList:any = [];
        this.allItemList.forEach(item=>{
            if(item.itemName.toLowerCase().indexOf(name.toLowerCase())>-1 ||
            item.itemSubcategory.toLowerCase().indexOf(name.toLowerCase())>-1 ||
            item.itemCategory.toLowerCase().indexOf(name.toLowerCase())>-1){
                searchList.push(item);
            }
        })
        return searchList;
  }

  getItemById(id:number){
      let itemDetail;
      this.allItemList.forEach( item => {
          if(item.itemId === id){
              itemDetail = item;
              return itemDetail;
          }
      });
      return itemDetail;
  }

  getCategoryList(){
    //select categoryList from table;
    let categoryList = [
      { categoryName: "Electronic"},
      { categoryName: "Fashion"},
      { categoryName: "Others"},
    ];
    return categoryList;
  }

  getSubCategoryList(){
      let subCategory =["3C","Phone","entertainment","Fashion","Fruit","Meat"];
      return subCategory;
  }

}
