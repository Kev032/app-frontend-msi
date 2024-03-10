import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Expediente } from '../app/models/expediente';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  constructor(private http: HttpClient) { }

  getAllExpedientes(): Observable<Expediente[]> {
    return this.http.get<Expediente[]>(`${baserUrl}/expedientes`);
  }

  getExpedienteById(id: number): Observable<Expediente> {
    return this.http.get<Expediente>(`${baserUrl}/expedientes/${id}`);
  }

  createExpediente(expediente: Expediente): Observable<Expediente> {
    return this.http.post<Expediente>(`${baserUrl}/expedientes`, expediente);
  }

  updateExpediente(id: number,expediente: Expediente): Observable<Object>{
    return this.http.put(`${baserUrl}/expedientes/${id}`, expediente)
  }

  deleteExpediente(id:number):Observable<Object>{
    return this.http.delete(`${baserUrl}/expedientes/${id}`)
  }
}
