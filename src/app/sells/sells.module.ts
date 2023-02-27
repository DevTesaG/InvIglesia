import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellsRoutingModule } from './sells-routing.module';
import { SellsComponent } from './sells/sells.component';


@NgModule({
  declarations: [
    SellsComponent
  ],
  imports: [
    CommonModule,
    SellsRoutingModule
  ]
})
export class SellsModule { }
