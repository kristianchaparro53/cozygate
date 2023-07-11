import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroResidentesPageRoutingModule } from './registro-residentes-routing.module';

import { RegistroResidentesPage } from './registro-residentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroResidentesPageRoutingModule
  ],
  declarations: [RegistroResidentesPage]
})
export class RegistroResidentesPageModule {}
