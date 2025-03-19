import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  template: `
  <app-navbar></app-navbar>
  <main><router-outlet></router-outlet></main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login-app';
}
