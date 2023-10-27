import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionessServicePageRoutingModule } from './direccioness-service-routing.module';

import { DireccionessServicePage } from './direccioness-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionessServicePageRoutingModule
  ],
  declarations: [DireccionessServicePage]
})
export class DireccionessServicePageModule {}
