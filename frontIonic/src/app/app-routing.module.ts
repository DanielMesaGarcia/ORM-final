import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'usuario-service',
    loadChildren: () => import('./services/usuario-service/usuario-service.module').then( m => m.UsuarioServicePageModule)
  },
  {
    path: 'pedidos-service',
    loadChildren: () => import('./services/pedidos-service/pedidos-service.module').then( m => m.PedidosServicePageModule)
  },
  {
    path: 'usuarios-service',
    loadChildren: () => import('./services/usuarios-service/usuarios-service.module').then( m => m.UsuariosServicePageModule)
  },
  {
    path: 'direccioness-service',
    loadChildren: () => import('./services/direccioness-service/direccioness-service.module').then( m => m.DireccionessServicePageModule)
  },
  {
    path: 'detalles-service',
    loadChildren: () => import('./services/detalles-service/detalles-service.module').then( m => m.DetallesServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
