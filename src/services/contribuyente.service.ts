import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Contribuyente } from '../app/models/contribuyente';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  constructor(private http: HttpClient) { }

  obtenerListadoContribuyentes(): Observable<Contribuyente[]> {
    return this.http.get<Contribuyente[]>(`${baserUrl}/contribuyente`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener la lista de contribuyentes', error);
          return throwError(error);
        })
      );
  }

  registrarContribuyente(contribuyente: Contribuyente): Observable<object> {
    return this.http.post<Contribuyente>(`${baserUrl}/contribuyente`, contribuyente)
      .pipe(
        catchError(error => {
          console.error('Error al crear contribuyente', error);
          return throwError(error);
        })
      );
  }

  actualizarContribuyente(id: number,contribuyente: Contribuyente): Observable<Object>{
    return this.http.put(`${baserUrl}/contribuyente/${id}`, contribuyente)
  }

  obtenerContribuyentePorId(id:number):Observable<Contribuyente>{
    return this.http.get<Contribuyente>(`${baserUrl}/contribuyente/${id}`)
  }

  eliminarContribuyente(id:number):Observable<Object>{
    return this.http.delete(`${baserUrl}/contribuyente/${id}`)
  }

}
