import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionessServicePage } from './direccioness-service.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionessServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionessServicePageRoutingModule {}
