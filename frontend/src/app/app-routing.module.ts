import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { HeaderComponent } from './header/header.component';
import { DisplayItemSummaryComponent } from './display-item-summary/display-item-summary.component';
import { DisplayItemCompleteComponent } from './display-item-complete/display-item-complete.component';
import { SellerSellingListComponent } from './seller-selling-list/seller-selling-list.component';
import { SellerAddItemComponent } from './seller-add-item/seller-add-item.component';
import { SellerUpdateStockComponent } from './seller-update-stock/seller-update-stock.component';

const routes: Routes = [
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'purchase-history', component: PurchaseHistoryComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  {
    path: 'display-item-summary', component: DisplayItemSummaryComponent
  },
  {
    path: 'display-item-complete/:id', component: DisplayItemCompleteComponent
  },
  {
    path: 'seller-selling-list',component: SellerSellingListComponent
  },
  {
    path: 'seller-add-item', component: SellerAddItemComponent
  },
  {
    path: 'seller-update-stock/:id', component: SellerUpdateStockComponent
  },
  {
    path: '**', redirectTo:'display-item-summary',pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
