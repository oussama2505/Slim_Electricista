import { Component } from '@angular/core';

@Component({
  selector: 'app-conocemos',
  templateUrl: './conocemos.component.html',
  styleUrls: ['./conocemos.component.css'] // Opcional para CSS adicional
})
export class ConocemosComponent {
  expert = {
    role: 'Jefe de Electricidad',
    name: 'SLIM MHIMDI',
    experience: 'Experto en reparaciones eléctricas desde hace 15 años.',
    imageUrl: '/assets/slim.png',
    specialties: ['Instalaciones', 'Mantenimiento', 'Emergencias 24/7']
  };

  isHovered = false;

  onCardHover(hovering: boolean) {
    this.isHovered = hovering;
  }
}
