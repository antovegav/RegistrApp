import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ObtenerUsuarioService } from '../services/obtener-usuario.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  code: any;

  titulo = 'Escanear QR';

  userInfoReceived: any;



  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    
  }



  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', barcodeData);
      }).catch(err => {
          console.log('Error', err);
      });
  }

}
