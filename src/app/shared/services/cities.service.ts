import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from '../models/department';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private readonly apiUrl: string = 'https://api-colombia.com/api/v1'
  private address$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(
    private httpClient: HttpClient
  ) { }


  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiUrl}/Department`);
  }

  getCitiesByDepartment(departmentId: number): Observable<City[]> {
    return this.httpClient.get<City[]>(`${this.apiUrl}/Department/${departmentId}/cities`);
  }

  setEnteredAddressValue(address: string): void {
    this.address$.next(address);
    localStorage.setItem('address', address);
  }

  public getEnteredAddress(): BehaviorSubject<string> {
    return this.address$;
  }
}
