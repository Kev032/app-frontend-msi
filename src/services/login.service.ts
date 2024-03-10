import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  iniciarSesion(username: string, password: string): Observable<any> {
    const url = `${baserUrl}/usuarios/login`;
    const body = { username, password };
    return this.http.post(url, body);
  }

}
