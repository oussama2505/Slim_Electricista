import { Component } from '@angular/core';

@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html'
})
export class LlamadaComponent {
  // Método para manejar la solicitud de ayuda
  solicitarAyuda() {
    // Aquí puedes agregar la lógica para manejar el clic del botón
    console.log('Solicitud de ayuda enviada');
  }
}