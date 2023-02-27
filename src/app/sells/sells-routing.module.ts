import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellsComponent } from './sells/sells.component';

const routes: Routes = [
  {path:'', component:SellsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellsRoutingModule { }
