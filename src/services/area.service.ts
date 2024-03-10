import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Area } from '../app/models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  getAllAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${baserUrl}/areas`);
  }
}
