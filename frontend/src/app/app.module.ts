import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from "@angular/common";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DisplayItemCompleteComponent } from './display-item-complete/display-item-complete.component';
import { DisplayItemSummaryComponent } from './display-item-summary/display-item-summary.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { SellerAddItemComponent } from './seller-add-item/seller-add-item.component';
import { SellerUpdateStockComponent } from './seller-update-stock/seller-update-stock.component';
import { SellerSellingListComponent } from './seller-selling-list/seller-selling-list.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PurchaseHistoryComponent,
    ShoppingCartComponent,
    DisplayItemCompleteComponent,
    DisplayItemSummaryComponent,
    HeaderComponent,
    SellerAddItemComponent,
    SellerUpdateStockComponent,
    SellerSellingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ItemService,UserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
