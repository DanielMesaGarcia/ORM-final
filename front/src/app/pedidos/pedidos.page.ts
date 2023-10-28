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
  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.getAllPedidos();
  }

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
  }

  updatePedido(id: number) {
    this.pedidoService.updatePedido(id, this.cantidad, this.producto, this.idusuario).subscribe(() => {
      this.getAllPedidos();
    });
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
  }
}
