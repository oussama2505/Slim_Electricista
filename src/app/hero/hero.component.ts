import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Método para calcular posiciones de imágenes
  getImagePosition(index: number) {
    const gridSize = 3; // Número de columnas de la cuadrícula
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    return {
      top: `${row * 33}%`,  // Ajusta el valor para distribuir en filas
      left: `${col * 33}%`  // Ajusta el valor para distribuir en columnas
    };
  }
  

  // Rutas de imágenes del catálogo
  imageCatalog: string[] = [
    '/assets/electricista_herramienta.jpeg',
    '/assets/electricista_trabajando.jpeg',
    '/assets/image3.jpeg',
    '/assets/images1.jpeg',
    '/assets/images2.jpeg',
    '/assets/images4.jpeg'
  ];
}
