import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  // ARREGLO CON LAS PAGINAS QUE SE MOSTRARAN EN EL MENU
  public appPages = [
    // { title: 'Inicio', url: 'estudiante', icon: 'home' },
    { title: 'Crear Clase', url: 'crear-clase', icon: 'create' },
    { title: 'Cambiar Contraseña', url: 'password-olvidado', icon: 'person-circle' },
    { title: 'Salir', url: 'login', icon: 'log-in' },
  ];

  // ARREGLO DE LAS ETIQUETAS QUE SE MOSTRARAN EN EL MENU
  constructor() {}
}
