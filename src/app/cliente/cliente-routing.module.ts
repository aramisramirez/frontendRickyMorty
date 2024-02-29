import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const clientepages: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      { path: 'home', component: PersonajesComponent, pathMatch: 'full' },
      { path: 'favorites', component: FavoritosComponent, pathMatch: 'full' },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

export const ClientRoutes = RouterModule.forChild(clientepages);
