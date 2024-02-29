import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes/personajes.component';
import { ClienteComponent } from './cliente.component';
import { ClientRoutes } from './cliente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { FavoritosComponent } from './favoritos/favoritos.component';


@NgModule({
  declarations: [
    ClienteComponent,
    PersonajesComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutes,
    NgxPaginationModule,
    FormsModule,
    SharedModule
  ]
})
export class ClienteModule { }
