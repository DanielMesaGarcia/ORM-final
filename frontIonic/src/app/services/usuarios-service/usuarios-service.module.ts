import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosServicePageRoutingModule } from './usuarios-service-routing.module';

import { UsuariosServicePage } from './usuarios-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosServicePageRoutingModule
  ],
  declarations: [UsuariosServicePage]
})
export class UsuariosServicePageModule {}
