import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ObtenerUsuarioService } from '../services/obtener-usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  titulo = 'Escanear QR';

  userInfoReceived: any;

  constructor(private obtenerUsuarioService: ObtenerUsuarioService) { }

  ngOnInit() {
  }

}
