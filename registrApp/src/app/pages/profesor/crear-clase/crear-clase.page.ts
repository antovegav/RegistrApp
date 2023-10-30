import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClasesService } from 'src/app/services/clases.service';
import { firstValueFrom } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { IClase } from 'src/app/models/IClase';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.page.html',
  styleUrls: ['./crear-clase.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CrearClasePage implements OnInit {

  titulo = "Crear Clase"

  listaClases: any;

  qrResponse: any;



  constructor(
    private clasesService: ClasesService,
    private router: Router
  ) {


   }

  async ngOnInit() {
    this.listaClases = await firstValueFrom(this.clasesService.getClases());
    console.log("lista clases", this.listaClases);


  }

  async enviarDatosClase(clase: IClase){
    this.qrResponse = await firstValueFrom(this.clasesService.putQrClases(clase.id));
    let userInfoSend: NavigationExtras = {

      // Se envía el objeto userLoginModal como parámetro a la página de inicio
      state: {
        clase: clase
      }
    }
    this.router.navigate(['generador'], userInfoSend);
    console.log('claseInfo:', userInfoSend);

  }




}
