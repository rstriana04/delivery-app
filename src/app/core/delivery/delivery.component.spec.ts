import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryComponent } from './delivery.component';
import { CitiesService } from '../../shared/services/cities.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;
  let citiesServiceMock: Partial<CitiesService>;
  let formBuilderMock: Partial<FormBuilder>;
  let matSnackBarMock: Partial<MatSnackBar>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule, HttpClientTestingModule],
      providers: [
        {provide: CitiesService, useValue: citiesServiceMock},
        {provide: FormBuilder, useValue: formBuilderMock},
        {provide: MatSnackBar, useValue: matSnackBarMock},
      ],
    });
    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
