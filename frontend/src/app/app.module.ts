import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from "@angular/common";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DisplayItemCompleteComponent } from './display-item-complete/display-item-complete.component';
import { DisplayItemSummaryComponent } from './display-item-summary/display-item-summary.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';
import { PurchaseService } from './services/purchase.service';
import { UserService } from './services/user.service';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SearchResultsComponent,
    PurchaseHistoryComponent,
    ShoppingCartComponent,
    DisplayItemCompleteComponent,
    DisplayItemSummaryComponent,
    HeaderComponent,
    ItemListComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ItemService,CartService,UserService,DatePipe,PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
