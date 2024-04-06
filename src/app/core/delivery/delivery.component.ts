import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../../shared/models/department';
import { City } from '../../shared/models/city';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from '../../shared/services/cities.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  departments$: Observable<Department[]> = of([]);
  cities$: Observable<City[]> = of([]);
  formDisplay: FormGroup;

  constructor(
    private citiesService: CitiesService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
  ) {
    this.formDisplay = this.buildFormDisplay();
    this.departments$ = this.citiesService.getDepartments();
  }

  private buildFormDisplay(): FormGroup {
    return this.formBuilder.group({
      department: new FormControl('', Validators.compose([Validators.required])),
      city: new FormControl('', Validators.compose([Validators.required])),
      complement: new FormControl('', Validators.compose([Validators.required])),
      streetNumber: new FormControl('', Validators.compose([Validators.required])),
      streetComplement: new FormControl('', Validators.compose([Validators.required])),
      streetNumberComplement: new FormControl('', Validators.compose([Validators.required])),
      streetNumberComplementFirst: new FormControl('', Validators.compose([Validators.required])),
      streetNumberComplementTwo: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  public sendFormDisplay(formDisplay: FormGroup): void {
    const {
      department,
      city,
      complement,
      streetNumber,
      streetComplement,
      streetNumberComplement,
      streetNumberComplementFirst,
      streetNumberComplementTwo,
    } = formDisplay.value
    const addressValue: string = `
      ${department},
      ${city}-
      ${complement}
      ${streetNumber}
      ${streetComplement}#
      ${streetNumberComplementFirst}-
      ${streetNumberComplementTwo},
      ${streetNumberComplement}
    `
    this.citiesService.setEnteredAddressValue(addressValue.toUpperCase());
    this.formDisplay.reset();
    const duration: number = 6000
    this.matSnackBar.open('¡Dirección almacenada correctamente!', 'Cerrar', {
      duration
    })
  }

  public getCitiesByDepartment(department: Department, $event: MatOptionSelectionChange<string>): void {
    if ($event.isUserInput) {
      this.cities$ = this.citiesService.getCitiesByDepartment(department.id);
    }
  }
}
