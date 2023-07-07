import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroVisitaPageRoutingModule } from './registro-visita-routing.module';

import { RegistroVisitaPage } from './registro-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVisitaPageRoutingModule
  ],
  declarations: [RegistroVisitaPage]
})
export class RegistroVisitaPageModule {}
