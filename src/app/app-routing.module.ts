import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cliente' },
  // { path: 'confirimacion', pathMatch: 'full', redirectTo: 'confirmacionEstudiante' },
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, { useHash: false });
