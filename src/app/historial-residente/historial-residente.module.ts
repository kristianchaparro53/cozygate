import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialResidentePageRoutingModule } from './historial-residente-routing.module';

import { HistorialResidentePage } from './historial-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialResidentePageRoutingModule
  ],
  declarations: [HistorialResidentePage]
})
export class HistorialResidentePageModule {}
