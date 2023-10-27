import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosServicePage } from './pedidos-service.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosServicePageRoutingModule {}
