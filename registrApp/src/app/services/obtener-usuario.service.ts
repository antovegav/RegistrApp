import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ObtenerUsuarioService {
  private apiUrl = environment.supabaseUrl ;


  constructor(private http: HttpClient, private router: Router) {
    
  }

  getEstudiantes(): Observable<any> {
    const url = "https://oroiqrkclheidjblybhg.supabase.co/rest/v1/estudiantes";
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
      'Range': '0-9'
    });

    const params = {     
      select: '*'
    };

    return this.http.get<any>(url, { headers, params });
  }

  getProfesores(): Observable<any> {
    const url = "https://oroiqrkclheidjblybhg.supabase.co/rest/v1/profesor";
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
      'Range': '0-9'
    });

    const params = {     
      select: '*'
    };

    return this.http.get<any>(url, { headers, params });
  }


}
