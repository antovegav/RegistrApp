import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { UserModel } from 'src/app/models/UserModel';
import { ObtenerUsuarioService } from 'src/app/services/obtener-usuario.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  // Objeto que almacena los datos del usuario
  userLoginModal = {
    correo: '',
    password: '',
  };


    alumnosLista: any;
    profesoresLista: any;
    listUser: any;

  // Función que agrega un usuario al arreglo
  constructor(private router: Router, private obtenerUsuarioService: ObtenerUsuarioService) { }

  async ngOnInit() {
    this.alumnosLista = await firstValueFrom(this.obtenerUsuarioService.getEstudiantes());
    console.log("lista alumnos", this.alumnosLista);
    
    this.profesoresLista = await firstValueFrom(this.obtenerUsuarioService.getProfesores());
    console.log("lista profesores", this.profesoresLista );

    this.listUser = [...this.alumnosLista, ...this.profesoresLista];
    console.log("lista alumnos", this.listUser);


  }

  // Función que se ejecuta cuando se presiona el botón de iniciar sesión
  goToInicio (){
    this.router.navigate(['/inicio']);
  }

  // Función que se ejecuta cuando se presiona el botón de iniciar sesión
  goToPassworOlvidado (){
    this.router.navigate(['/password-olvidado']);
  }

  // Función que se ejecuta cuando se presiona el botón de iniciar sesión
  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].correo == userLoginInfo.correo) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.correo, this.userLoginModal.correo);

        // Redireccionar a la página de inicio
        let userInfoSend: NavigationExtras = {

          // Se envía el objeto userLoginModal como parámetro a la página de inicio
          state: {
            user: this.listUser[i]
          }
        }

        // Redireccionar a la página de inicio
        if(this.listUser[i].userType == 'estudiante'){
          console.log("Ingresando...");
          // Redireccionar a la página de inicio
          let sendInfo = this.router.navigate(['/estudiante'], userInfoSend);
          return true;
        // Redireccionar a la página de inicio
        }else{
          console.log("redireccionando a profesor");
          let sendInfo = this.router.navigate(['/profesor'], userInfoSend);
          return true;
        }
      }
    }

    // Si no se encuentra el usuario se reinician los campos
    this.userLoginModalRestart();
    return false;
  }

  // Función que se ejecuta cuando se presiona el botón de iniciar sesión
  userLoginModalRestart(): void {
    this.userLoginModal.correo = '';
    this.userLoginModal.password = '';
  }
}
