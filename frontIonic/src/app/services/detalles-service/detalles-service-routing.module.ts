import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesServicePage } from './detalles-service.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesServicePageRoutingModule {}
