import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  pedidos: any = [];
  cantidad: string = '';
  producto: string = '';
  idusuario: string = '';
  productoError: boolean = false;
  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.getAllPedidos();
  }
  errorMessage: string = '';
  getAllPedidos() {
    this.pedidoService.getPedidos().subscribe(
      (pedidosResponse) => {
        this.pedidos = pedidosResponse;
        this.pedidoService.getUsuarios().subscribe(
          (usuariosResponse) => {
            this.pedidos.forEach((pedido: any) => {
              pedido.usuario = usuariosResponse.find((usuario: any) => usuario.id === pedido.idusuario);
            });
          },
          (error) => {
            console.error('Error fetching users: ', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching orders: ', error);
      }
    );
  }

  crearPedido() {
    if (this.producto.trim() === '' || this.cantidad.trim() === '' || this.idusuario.trim() === '') {
      this.errorMessage = 'Error: Los campos no pueden estar vacíos';
      return;
    }
    if (this.validateDateFormat(this.producto)) {
      this.productoError = false;
      const nuevoPedido = {
        cantidad: this.cantidad,
        producto: this.producto,
      };
      this.pedidoService.createPedido(this.cantidad, this.producto, this.idusuario).subscribe(
        (response) => {
          this.getAllPedidos();
          this.resetForm();
        },
        (error) => {
          console.error('Error creating order: ', error);
        }
      );
    } else {
      this.productoError = true;
      console.error('La fecha debe estar en formato yyyy-mm-dd');
    }
  }

  updatePedido(id: number) {
    if (this.producto.trim() === '' || this.cantidad.trim() === '' || this.idusuario.trim() === '') {
      this.errorMessage = 'Error: Los campos no pueden estar vacíos';
      return;
    }
    if (this.validateDateFormat(this.producto)) {
      this.productoError = false; // Resetting the error state
      this.pedidoService.updatePedido(id, this.cantidad, this.producto, this.idusuario).subscribe(() => {
        this.getAllPedidos();
      });
    } else {
      this.productoError = true;
      console.error('La fecha debe estar en formato yyyy-mm-dd');
    }
  }

  validateDateFormat(date: string) {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(date);
  }

  deletePedido(id: number) {
    this.pedidoService.deletePedido(id).subscribe(
      (response) => {
        this.getAllPedidos();
      },
      (error) => {
        console.error('Error deleting order: ', error);
      }
    );
  }

  resetForm() {
    this.cantidad = '';
    this.producto = '';
    this.productoError = false;
  }
}
