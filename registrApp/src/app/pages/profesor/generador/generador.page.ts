import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { QRCodeModule } from "angularx-qrcode";


@Component({
  selector: 'app-generador',
  templateUrl: './generador.page.html',
  styleUrls: ['./generador.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, QRCodeModule]
})
export class GeneradorPage implements OnInit {


  userInfoReceived: any;
  qrGenerado: any;

  supabaseResponse: any;

  titulo = 'Generador de QR'

  constructor(
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['clase'];
    console.log("userInfoReceived", this.userInfoReceived )
    this.qrGenerado = this.userInfoReceived.id;
    console.log("qrGenerado Id", this.qrGenerado )


    



  
  }

}
