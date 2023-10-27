import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosServicePage } from './usuarios-service.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosServicePageRoutingModule {}
