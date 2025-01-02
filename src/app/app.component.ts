import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from "./hero/hero.component";
import { CalidadComponent } from './calidad/calidad.component';
import { ServiciosComponent } from "./servicios/servicios.component";
import { ConocemosComponent } from "./conocemos/conocemos.component";
import { LlamadaComponent } from "./llamada/llamada.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, NavBarComponent, HeroComponent, CalidadComponent, ServiciosComponent, ConocemosComponent, LlamadaComponent],
  template: `
  <app-nav-bar></app-nav-bar>
  <app-hero></app-hero>
  <app-calidad></app-calidad>
  <app-servicios></app-servicios>
  <app-conocemos></app-conocemos>
  <app-llamada></app-llamada>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'slim';
}
