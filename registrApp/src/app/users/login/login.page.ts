import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { UserModel } from 'src/app/models/UserModel';

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
    username: '',
    password: '',
  };

    // Arreglo que almacena los usuarios
    listUser: UserModel[] = [
      {
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        userType: 'estudiante',
        username: 'juanperez',
        password: 'password1',
        nacimiento: '1999-01-01',
        correo: 'juperez@duocuc.cl',
      },
      {
        id: 2,
        nombre: 'María',
        apellido: 'González',
        userType: 'estudiante',
        username: 'mariagonzalez',
        password: 'password2',
        nacimiento: '1995-06-12',
        correo: "agonzalez@duocuc.cl",
      },
      {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Sánchez',
        userType: 'profesor',
        username: 'pedrosanchez',
        password: 'password3',
        nacimiento: undefined,
        correo: "pesanchez@profesor.duoc.cl",
      },
      {
        id: 4,
        nombre: 'Ana',
        apellido: 'Martínez',
        userType: 'profesor',
        username: 'anamartinez',
        password: 'password4',
        nacimiento: undefined,
      correo: "amartinez@profesor.duoc.cl",
      },
    ];

  // Función que agrega un usuario al arreglo
  constructor(private router: Router) { }

  ngOnInit() {
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
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);

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
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }
}
