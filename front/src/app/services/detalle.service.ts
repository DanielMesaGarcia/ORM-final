import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {
  endpoint = 'http://localhost:8080/detalles'; // Asegúrate de que este sea el endpoint correcto

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getDetalles(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }
  getPedidos(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/pedidos');
  }
  createDetalle(cantidad: any, producto: any, idpedido: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("cantidad", cantidad);
    body.append("producto", producto);
    body.append("pedido.id", idpedido);
    console.log(body);
    return this.httpClient.post(this.endpoint, body.toString(), this.httpOptions);
  }

  updateDetalle(id: number, cantidad: any, producto: any, idpedido: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("cantidad", cantidad);
    body.append("producto", producto);
    body.append("pedido.id", idpedido);
    console.log(body);
    return this.httpClient.put(`${this.endpoint}/${id}`, body.toString(), this.httpOptions);
  }

  deleteDetalle(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.httpClient.delete(url, this.httpOptions);
  }
}
