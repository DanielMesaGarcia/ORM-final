import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  endpoint = 'http://localhost:8080/direcciones'; // Asegúrate de que este sea el endpoint correcto

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getDirecciones(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  createDireccion(direccion: any, ciudad: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("direccion", direccion);
    body.append("ciudad", ciudad);
    console.log(body);
    return this.httpClient.post(this.endpoint, body.toString(), this.httpOptions);
  }
  

  updateDireccion(id: number, direccion: any, ciudad: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("direccion", direccion);
    body.append("ciudad", ciudad);
    console.log(body);
    return this.httpClient.put(`${this.endpoint}/${id}`, body.toString(), this.httpOptions);
  }

  deleteDireccion(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
