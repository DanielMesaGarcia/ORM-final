import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosServicePageRoutingModule } from './pedidos-service-routing.module';

import { PedidosServicePage } from './pedidos-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosServicePageRoutingModule
  ],
  declarations: [PedidosServicePage]
})
export class PedidosServicePageModule {}
