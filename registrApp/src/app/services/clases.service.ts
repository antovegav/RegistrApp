
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ClasesService {
  private apiUrl = environment.supabaseUrl ;


  constructor(private http: HttpClient, private router: Router) {
    
  }




  getClases(): Observable<any> {
    const url = "https://oroiqrkclheidjblybhg.supabase.co/rest/v1/clase";
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
      
    });

    const params = {     
      select: '*'
    };

    return this.http.get<any>(url, { headers, params });
  }

  putQrClases(claseId: string): Observable<any> {
    const url = `https://oroiqrkclheidjblybhg.supabase.co/rest/v1/clase?id=eq.${claseId}`; // Especifica la condición de filtro en la URL
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
    });
  
    const fechaHora = new Date();
  
    const body = {
      qr_creado: fechaHora, // Asegúrate de usar el nombre correcto del campo en la tabla
    };
  
    return this.http.patch<any>(url, body, { headers });
  }
}
// ------------------------

// Consulta base de datos 


//   getClasesAndSeccionbyFecha(fechaDeHoy: string): Observable<Clase[]> {
//     const headers = new HttpHeaders({
//       'apikey': environment.supabaseKey,
//       'Authorization': `Bearer ${environment.supabaseKey}`,
//     });

//     const params = {
//       fecha: `eq.${fechaDeHoy}`,
//       select: '*,seccion_id(*)'
//     };

//     return this.http.get<any[]>(this.apiUrlClases, { headers, params }).pipe(
//       tap(response => console.log('API Response:', response)),
//       map(response => {
//         return response.map(clase => {
//           const seccion = clase.seccion_id;
//           return {
//             id: clase.id,
//             fecha: clase.fecha,
//             hora_inicio: clase.hora_inicio,
//             hora_termino: clase.hora_termino,
//             seccion_id: seccion.id, // Accessing seccion_id properties
//             nombre_seccion: seccion.nombre_seccion, // Accessing seccion_id properties
//             profesor_id: seccion.profesor_id, // Accessing seccion_id properties
//             asignatura_id: seccion.asignatura_id // Accessing seccion_id properties
//           };
//         });
//       })
//     );
//   }
  

// }
