import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from './shared/models/routes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delivery-app';
  constructor(
    private router: Router
  ) {
  }

  protected readonly Routes = Routes;

  public goRoute(route: Routes): void
  {
    this.router.navigate([`/${route}`])
  }
}
