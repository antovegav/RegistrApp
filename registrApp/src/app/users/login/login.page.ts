import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { UserModel } from 'src/app/models/UserModel';
import { ObtenerUsuarioService } from 'src/app/services/obtener-usuario.service';
import { firstValueFrom } from 'rxjs';
// import { Storage } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage';
import { Plugin } from '@capacitor/core';
// import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [Storage],
})


export class LoginPage implements OnInit {

  // Objeto que almacena los datos del usuario
  userLoginModal = {
    correo: '',
    password: '',
  };

  // public alumno: UserModel;
  
  // private KEY_ALUMNO = 'alumno';

    alumnosLista: any;
    profesoresLista: any;
    listUser: any;

  // Función que agrega un usuario al arreglo
  constructor(
    private router: Router,
    private obtenerUsuarioService: ObtenerUsuarioService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private storage: Storage) { this.initStorage();}

  async ngOnInit() {
    this.alumnosLista = await firstValueFrom(this.obtenerUsuarioService.getEstudiantes());
    console.log("lista alumnos", this.alumnosLista);
    
    this.profesoresLista = await firstValueFrom(this.obtenerUsuarioService.getProfesores());
    console.log("lista profesores", this.profesoresLista );

    this.listUser = [...this.alumnosLista, ...this.profesoresLista];
    console.log("lista alumnos", this.listUser);
  }

  async initStorage() {
    await this.storage.create();
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
  async userLogin(userLoginInfo: IUserLogin): Promise<boolean>{
    let userFound = false;
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].correo == userLoginInfo.correo) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.correo, this.userLoginModal.correo);
        // Se guarda el usuario en el storage
        await this.storage.set('userData', this.listUser[i]);
        // Redireccionar a la página de inicio
        const userInfoSend: NavigationExtras = {
          // Se envía el objeto userLoginModal como parámetro a la página de inicio
          state: {
            user: this.listUser[i]
          }
        }

        // Redireccionar a la página de inicio
        if(this.listUser[i].userType == 'estudiante'){
          console.log("Ingresando...");
          // this.guardarAlumno();
          // Redireccionar a la página de estudiante
          this.router.navigate(['/estudiante'], userInfoSend);
          return true;
        // Redireccionar a la página de profesor
        }else{
          console.log("redireccionando a profesor");
          this.router.navigate(['/profesor'], userInfoSend);
          return true;
        }
      }}if (!userFound) {
      // Credenciales no válidas, mostrar mensaje de error
      const alertMessage = 'Credenciales no válidas. Por favor, verifica tus datos.';
      const alert = await this.alertController.create({
        header: 'Error',
        message: alertMessage,
        buttons: ['Aceptar'],
      });
      await alert.present();
  
      // Si no se encuentra el usuario se reinician los campos
      this.userLoginModalRestart();
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

  ionViewWillEnter() {
    this.storage.get('userData').then(userData => {
      if (userData) {
        console.log('Usuario recuperado:', userData);
      }
    });
  }

  async getUserData(key: string) {
    const { value } = await this.storage.get(key);
    return JSON.parse(value!);
  }

  // async ionViewWillEnter() {
  //   const alumno =  await Preferences.get({ key: this.KEY_ALUMNO });

  //   if (!alumno.value) {
  //     await Preferences.set({ key: this.KEY_ALUMNO, value: JSON.stringify(this.alumno) });
  //   }else{
  //     this.alumno = JSON.parse(alumno.value);
  //   }
  // };

  // async guardarAlumno(){
  //   await Preferences.set({ key: this.KEY_ALUMNO, value: JSON.stringify(this.alumno) });
  // };
}