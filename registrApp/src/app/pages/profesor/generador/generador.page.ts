import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.page.html',
  styleUrls: ['./generador.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GeneradorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
