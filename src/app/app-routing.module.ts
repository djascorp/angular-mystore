import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.compontent';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent, title: "List of existing products"},
  {path: 'cart', component: CartComponent, title: "Product orders"},
  {path: 'product-detail/:product_id', component: ProductItemDetailComponent, title: "Product Informations"},
  {path: 'confirmation', component: ConfirmationComponent, title: "Products ordered succesfully"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
