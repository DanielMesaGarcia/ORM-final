import { Component, OnInit } from '@angular/core';
import { DetallesService } from '../services/detalle.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  detalles: any = [];
  cantidad: string = '';
  producto: string = '';
  idpedido: string = '';

  constructor(private detallesService: DetallesService) {}

  ngOnInit() {
    this.getAllDetalles();
  }

  getAllDetalles() {
    this.detallesService.getDetalles().subscribe(
      (detallesResponse) => {
        this.detalles = detallesResponse;
        this.detallesService.getPedidos().subscribe(
          (pedidosResponse) => {
            this.detalles.forEach((detalle: any) => {
              detalle.pedido = pedidosResponse.find((pedido: any) => pedido.id === detalle.idpedido);
            });
          },
          (error) => {
            console.error('Error fetching orders: ', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching details: ', error);
      }
    );
  }

  crearDetalle() {
    const nuevoDetalle = {
      cantidad: this.cantidad,
      producto: this.producto,
    };
    this.detallesService.createDetalle(this.cantidad, this.producto, this.idpedido).subscribe(
      (response) => {
        this.getAllDetalles();
        this.resetForm();
      },
      (error) => {
        console.error('Error creating detail: ', error);
      }
    );
  }

  updateDetalle(id: number) {
    this.detallesService.updateDetalle(id, this.cantidad, this.producto, this.idpedido).subscribe(() => {
      this.getAllDetalles();
    });
  }

  deleteDetalle(id: number) {
    this.detallesService.deleteDetalle(id).subscribe(
      (response) => {
        this.getAllDetalles();
      },
      (error) => {
        console.error('Error deleting detail: ', error);
      }
    );
  }

  resetForm() {
    this.cantidad = '';
    this.producto = '';
  }
}
