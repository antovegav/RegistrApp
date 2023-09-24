import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IUserLogin } from '../models/IUserLogin';

@Component({
  selector: 'app-password-olvidado',
  templateUrl: './password-olvidado.page.html',
  styleUrls: ['./password-olvidado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PasswordOlvidadoPage implements OnInit {

  titulo = 'Cambiar Contraseña';

  // Objeto que almacena los datos del usuario
  userolvidopasswordModal = {
  username: '',
  };
  constructor() { }

  ngOnInit() {
  }


  // Función que se ejecuta cuando se presiona el botón de cambiar contraseña
  userolvidopasswordModalRestart(): void {
    this.userolvidopasswordModal.username = '';
  }

}
