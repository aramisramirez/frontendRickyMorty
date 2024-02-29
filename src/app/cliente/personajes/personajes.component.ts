import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {
  page: number = 1;
  totalPages!: number;
  cargardatos: any = [];
  mensajeerrorcreafavorito: string = '';
  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.cargarinformacion(this.page);
  }

  cargarinformacion(page: number) {
    console.log(page);

    if (page === 0 || page > this.totalPages) {
      return alert('Indica una pagina valida');
    } else {
      this.clienteService.cargardatosapi(page).subscribe(
        (response) => {
          this.cargardatos = [];
          this.cargardatos = response;
          this.totalPages = this.cargardatos.info.pages;
          this.page = page;
          console.log(this.page);
        },
        (error) => {
          alert('No se pudo encontrar la pagína indicada');
        }
        );
    }
  }

  crearfavorito(data: any) {

    const datosobtenidos = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      type: data.species,
      gender: data.gender,
      image: data.image,
      url: data.url,
      created: data.created
    }
    console.log(datosobtenidos);

    this.clienteService.crearPersonajesfavoritos(datosobtenidos).subscribe(
      (response) => {
        alert("Creado correctamente");
      },
      (error) => {
        // alert('No se pudo encontrar la pagína indicada');
        this.mensajeerrorcreafavorito = error.error.message;
        console.log(this.mensajeerrorcreafavorito);

      }
      );

  }
}
