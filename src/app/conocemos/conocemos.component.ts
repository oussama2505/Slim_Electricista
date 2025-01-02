import { Component } from '@angular/core';

interface Expert {
  role: string;
  name: string;
  experience: string;
  imageUrl: string;
  specialties: string[];
}

@Component({
  selector: 'app-conocemos',
  templateUrl: './conocemos.component.html',
  styleUrls: ['./conocemos.component.css']
})
export class ConocemosComponent {
  expert: Expert = {
    role: 'Jefe de Electricidad',
    name: 'SLIM MHMIDI',
    experience: 'Experto en reparaciones eléctricas desde hace 15 años.',
    imageUrl: '/assets/slim.png',
    specialties: ['Instalaciones', 'Mantenimiento', 'Emergencias 24/7']
  };

  isHovered = false;

  onCardHover(hovering: boolean) {
    this.isHovered = hovering;
  }
}