import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryDateRoutingModule } from './delivery-date-routing.module';
import { DeliveryDateComponent } from './delivery-date.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DeliveryDateComponent
  ],
  imports: [
    CommonModule,
    DeliveryDateRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class DeliveryDateModule { }
