import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component: InventoryListComponent},
  {path:'details', component: ProductDetailComponent},
  {path:'add', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
