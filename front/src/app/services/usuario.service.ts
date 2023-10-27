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
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  createUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(this.endpoint, usuario, this.httpOptions);
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.put(url, usuario, this.httpOptions);
  }

  deleteUsuario(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
