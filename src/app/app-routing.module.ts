import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.compontent';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent, title: "List of existing products"},
  {path: 'cart', component: CartComponent, title: "Product orders"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
