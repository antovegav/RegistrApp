import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AsistenciaPage implements OnInit {

  titulo = 'Confirmar Asistencia';

  constructor() { }

  ngOnInit() {
  }

}

// import { Component, Injectable, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
// import { environment } from 'src/environments/environment';
// import { AuthService } from '../services/auth.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// const ASISTENCIA_URL_SNIPPET = '/rest/v1/asistencia';
// const ASISTENCIA_ALUMNO_URL_SNIPPET = '/rest/v1/asistencia_estudiantes';

// // @Component({
// //   selector: 'app-asistencia',
// //   templateUrl: './asistencia.page.html',
// //   styleUrls: ['./asistencia.page.scss'],
// //   standalone: true,
// //   imports: [IonicModule, CommonModule, FormsModule]
// // })
// @Injectable({
//   provideIn: 'root'
// })
// export class AsistenciaPage implements OnInit {
//   private apiUrlAsistencia = environment.supabaseUrl + ASISTENCIA_URL_SNIPPET;
//   private apiUrlAsistenciaAlumno = environment.supabaseUrl + ASISTENCIA_ALUMNO_URL_SNIPPET;
//   private supabase: SupabaseClient;

//   titulo = 'Confirmar Asistencia';

//   constructor(private http: HttpClient, private router: Router, private authService: AuthService) { 
//     this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
//   }

//   ngOnInit() {
//   }

//   getUserAsistenciaDetails(asistenciaId): Observable<any> {
//     const headers = new HttpHeaders({
//       'apikey': environment.supabaseKey,
//       'Authorization': `Bearer ${environment.supabaseKey}`,
//       'Range': '0-9'
//     });

//     const params = {
//       id: `eq.${asistenciaId}`,
//       select: '*'
//     };

//     return this.http.get<any>(this.apiUrlAsistencia, { headers, params });
//   }
// }
