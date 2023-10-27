import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  endpoint = 'http://localhost:8080/usuarios';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  createUsuario(nombre: any, correo: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("nombre", nombre);
    body.append("correo", correo);
    console.log(body);
    return this.httpClient.post(this.endpoint, body, this.httpOptions);
  }
  

  updateUsuario(id: number, nombre: any, correo: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("nombre", nombre);
    body.append("correo", correo);
    console.log(body);
    return this.httpClient.put(`${this.endpoint}/${id}`, body, this.httpOptions);
  }

  deleteUsuario(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
