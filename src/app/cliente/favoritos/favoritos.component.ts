import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { response } from 'express';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.sass']
})
export class FavoritosComponent {

  mensajeerrorgetall!: string;

  datosPersonajes: any;

  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.cargarpesonajesfavoritos();
  }

  cargarpesonajesfavoritos() {
    this.clienteService.cargarPersonajesfavoritos().subscribe(
      (response) => {
        const respuesta: any = response;
        this.datosPersonajes = respuesta.favorite;
        console.log(this.datosPersonajes);
      },
      (error) => {
        const errores: any = error;
        this.mensajeerrorgetall = errores.error.message;
        console.log(this.mensajeerrorgetall);

      }
    );
  }

  eliminarRegistro(id: string) {
    this.clienteService.eliminarPersonajesfavoritos(id).subscribe(
      (response) => {
        this.cargarpesonajesfavoritos();
        alert("Eliminado correctamente");
      },
      (error) => {
        alert('No se pudo encontrar la pagína indicada');
      }
      );
  }
}
