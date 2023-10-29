import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarios: any = [];
  nombre: string = '';
  correo: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      (response) => {
        this.usuarios = response;
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    );
  }
  errorMessage: string = '';

  // ...
  
  crearUsuario() {
    if (this.nombre.trim() === '' || this.correo.trim() === '') {
      this.errorMessage = 'Error: Los campos no pueden estar vacíos';
      return;
    }
    const nuevoUsuario = {
      nombre: this.nombre,
      correo: this.correo,
    };
    this.usuarioService.createUsuario(this.nombre, this.correo).subscribe(
      (response) => {
        this.getAllUsuarios();
        this.resetForm();
      },
      (error) => {
        console.error('Error creating user: ', error);
      }
    );
  }

  updateUsuario(id: number) {
    if (this.nombre.trim() === '' || this.correo.trim() === '') {
      this.errorMessage = 'Error: Los campos no pueden estar vacíos';
      return;
    }
    this.usuarioService.updateUsuario(id, this.nombre, this.correo).subscribe(() => {
      this.getAllUsuarios();
      });
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(
      (response) => {
        this.getAllUsuarios();
      },
      (error) => {
        console.error('Error deleting user: ', error);
      }
    );
  }

  resetForm() {
    this.nombre = '';
    this.correo = '';
  }
}
