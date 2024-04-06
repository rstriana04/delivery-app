import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.scss']
})
export class DeliveryDateComponent {
  private currentDate: Date =  new Date();
  formDeliveryDate: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formDeliveryDate = this.buildFormDeliveryDate();
  }

  private buildFormDeliveryDate(): FormGroup {
    return this.formBuilder.group({
      date: new FormControl(this.currentDate)
    });
  }
}
