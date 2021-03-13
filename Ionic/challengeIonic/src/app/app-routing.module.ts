import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'listado-alquiler',
    loadChildren: () => import('./pages/listado-alquiler/listado-alquiler.module').then( m => m.ListadoAlquilerPageModule)
  },
  {
    path: 'detalle-propiedad',
    loadChildren: () => import('./pages/detalle-propiedad/detalle-propiedad.module').then( m => m.DetallePropiedadPageModule)
  },
  {
    path: 'check-availability',
    loadChildren: () => import('./pages/check-availability/check-availability.module').then( m => m.CheckAvailabilityPageModule)
  },  
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
