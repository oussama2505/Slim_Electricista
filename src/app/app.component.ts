import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from "./hero/hero.component";
import { CalidadComponent } from './calidad/calidad.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, NavBarComponent, HeroComponent, CalidadComponent],
  template: `
  <app-nav-bar></app-nav-bar>
  <app-hero></app-hero>
  <app-calidad></app-calidad>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'slim';
}
