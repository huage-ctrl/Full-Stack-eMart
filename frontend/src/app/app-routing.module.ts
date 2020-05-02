import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { HeaderComponent } from './header/header.component';
import { DisplayItemSummaryComponent } from './display-item-summary/display-item-summary.component';
import { DisplayItemCompleteComponent } from './display-item-complete/display-item-complete.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

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
    path: 'display-item-complete', component: DisplayItemCompleteComponent
  },
  {
    path: 'item-list', component: ItemListComponent
  },
  {
    path: 'item-details', component: ItemDetailsComponent
  },
  {
    path: '**', redirectTo:'header'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
