import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CitiesService } from '../../shared/services/cities.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  address$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(
    private citiesService: CitiesService
  ) {
    this.address$ = this.citiesService.getEnteredAddress();
  }
}
