import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  endpoint = 'http://localhost:8080/pedidos'; // Asegúrate de que este sea el endpoint correcto

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPedidos(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  createPedido(cantidad: any, producto: any, idusuario: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("cantidad", cantidad);
    body.append("producto", producto);
    body.append("usuario.id", idusuario);
    console.log(body);
    return this.httpClient.post(this.endpoint, body.toString(), this.httpOptions);
  }

  updatePedido(id: number, cantidad: any, producto: any, idusuario: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("cantidad", cantidad);
    body.append("producto", producto);
    body.append("usuario.id", idusuario);
    console.log(body);
    return this.httpClient.put(`${this.endpoint}/${id}`, body.toString(), this.httpOptions);
  }

  deletePedido(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
