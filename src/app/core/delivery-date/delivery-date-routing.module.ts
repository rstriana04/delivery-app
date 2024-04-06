import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryDateComponent } from './delivery-date.component';

const routes: Routes = [
  {path: '', component: DeliveryDateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDateRoutingModule {
}
