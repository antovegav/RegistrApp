import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClasesService } from 'src/app/services/clases.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.page.html',
  styleUrls: ['./crear-clase.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CrearClasePage implements OnInit {

  listaClases: any;

  constructor(
    private clasesService: ClasesService,
    private router: Router
  ) {

   }

  async ngOnInit() {
    this.listaClases = await firstValueFrom(this.clasesService.getClases());
    console.log("lista clases", this.listaClases);
  }

  routGenerator(){
    this.router.navigate(['generador']);
  }

}
