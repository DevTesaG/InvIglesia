import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    InventoryListComponent,
    ProductDetailComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule
  ]
})
export class InventoryModule { }
