import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeGuard } from './shared/guards/route.guard';

const routes: Routes = [
  {path: 'address', loadChildren: () => import('./core/delivery/delivery.module').then(m => m.DeliveryModule)},
  {
    path: 'delivery-date',
    loadChildren: () => import('./core/delivery-date/delivery-date.module').then(m => m.DeliveryDateModule),
    canActivate: [routeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
