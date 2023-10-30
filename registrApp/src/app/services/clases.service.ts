
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

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

  // https://oroiqrkclheidjblybhg.supabase.co/rest/v1/clase?select=*
}
