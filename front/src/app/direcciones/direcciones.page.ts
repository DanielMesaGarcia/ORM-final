import { Component, OnInit } from '@angular/core';
import { DireccionService } from '../services/direccion.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {
  direcciones: any = [];
  direccion: string = '';
  ciudad: string = '';
  idusuario: string = '';
  errorMessage: string = '';
  constructor(private direccionService: DireccionService) {}

  ngOnInit() {
    this.getAllDirecciones();
  }

  getAllDirecciones() {
    this.direccionService.getDirecciones().subscribe(
      (direccionesResponse) => {
        this.direcciones = direccionesResponse;
        this.direccionService.getUsuarios().subscribe(
          (usuariosResponse) => {
            this.direcciones.forEach((direccion: any) => {
              direccion.usuario = usuariosResponse.find((usuario: any) => usuario.id === direccion.idusuario);
            });
          },
          (error) => {
            console.error('Error fetching users: ', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching addresses: ', error);
      }
    );
  }
  
  

  crearDireccion() {
    if (this.direccion.trim() === '' || this.ciudad.trim() === '' || this.idusuario.trim() === '') {
      this.errorMessage = 'Error: Los campos no pueden estar vacíos';
      return;
    }
    const nuevaDireccion = {
      direccion: this.direccion,
      ciudad: this.ciudad,
    };
    this.direccionService.createDireccion(this.direccion, this.ciudad, this.idusuario).subscribe(
      (response) => {
        this.getAllDirecciones();
        this.resetForm();
      },
      (error) => {
        console.error('Error creating address: ', error);
      }
    );
  }

  updateDireccion(id: number) {
    if (this.direccion.trim() === '' || this.ciudad.trim() === '' || this.idusuario.trim() === '') {
      this.errorMessage = 'Error: Los campos no pueden estar vacíos';
      return;
    }
    this.direccionService.updateDireccion(id, this.direccion, this.ciudad, this.idusuario).subscribe(() => {
      this.getAllDirecciones();
      });
  }

  deleteDireccion(id: number) {
    this.direccionService.deleteDireccion(id).subscribe(
      (response) => {
        this.getAllDirecciones();
      },
      (error) => {
        console.error('Error deleting address: ', error);
      }
    );
  }

  resetForm() {
    this.direccion = '';
    this.ciudad = '';
  }
}
