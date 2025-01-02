import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  services: Service[] = [
    {
      title: 'Servicios Principales',
      description: 'Especializados en soluciones eléctricas para tu hogar u oficina. Servicio rápido y confiable.',
      icon: '⚡',
      buttonText: 'Saber más'
    },
    {
      title: 'Transformadores Nuevos',
      description: 'Instalación y mantenimiento de transformadores de última generación.',
      icon: '🔌',
      buttonText: 'Ver detalles'
    },
    {
      title: 'Mantenimiento Preventivo',
      description: 'Programas de mantenimiento para prevenir problemas eléctricos futuros.',
      icon: '🔧',
      buttonText: 'Consultar'
    }
  ];
}