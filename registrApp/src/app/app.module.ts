import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BarcodeScanner
  ]
})
export class AppModule { }
