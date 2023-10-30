import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  // ARREGLO CON LAS PAGINAS QUE SE MOSTRARAN EN EL MENU
  // public appPages = [
  //   // { title: 'Inicio', url: 'estudiante', icon: 'home' },
  //   { title: 'Crear Clase', url: 'crear-clase', icon: 'create' },
  //   { title: 'Cambiar Contraseña', url: 'password-olvidado', icon: 'person-circle' },
  //   { title: 'Salir', url: 'login', icon: 'log-in' },
  // ];
  userType: any;

  router: Router;

  appPages: any = [];

  async ngOnInit(){
    this.userType = await firstValueFrom(this.userType.getEstudiantes())
  }
  // ARREGLO DE LAS ETIQUETAS QUE SE MOSTRARAN EN EL MENU
  constructor() {

    this.roleMenu(this.userType);
  }

  private roleMenu(userType: string){
    this.appPages = [];
  
    if(userType = 'estudiante'){
      this.appPages.push(
        { title: 'Inicio', url: 'estudiante', icon: 'home' },
        // { title: 'Escanear', url: 'inicio', icon: 'create' },
        { title: 'Cambiar Contraseña', url: 'password-olvidado', icon: 'person-circle' },
        { title: 'Salir', url: 'login', icon: 'log-in' }
      );
    }else if (userType == 'profesor'){
        this.appPages.push(
          { title: 'Inicio', url: 'profesor', icon: 'home' },
          { title: 'Crear Clase', url: 'crear-clase', icon: 'create' },
          { title: 'Cambiar Contraseña', url: 'password-olvidado', icon: 'person-circle' },
          { title: 'Salir', url: 'login', icon: 'log-in' }
        )
    };
  }
}
