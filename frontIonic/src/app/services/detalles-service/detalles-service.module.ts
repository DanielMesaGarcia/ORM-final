import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesServicePageRoutingModule } from './detalles-service-routing.module';

import { DetallesServicePage } from './detalles-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesServicePageRoutingModule
  ],
  declarations: [DetallesServicePage]
})
export class DetallesServicePageModule {}
