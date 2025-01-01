import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-calidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.css']
})
export class CalidadComponent {
  timelineItems: TimelineItem[] = [
    { title: '¡No te quedes a oscuras, elige bien!', icon: '👍' },
    { title: 'Ofrecemos un servicio excepcional que ilumina tu vida.', icon: '✨' },
    { title: 'Atención al cliente 24/7, porque los problemas eléctricos no tienen horario.', icon: '🌟' },
    { title: 'Técnicos certificados que saben lo que hacen, no son magos, pero casi.', icon: '🏆' },
    { title: 'Garantía de satisfacción, si no estás feliz, ¡te devolvemos la luz!', icon: '💪' }
  ];
}