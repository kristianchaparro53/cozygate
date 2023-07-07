import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaContraPageRoutingModule } from './nueva-contra-routing.module';

import { NuevaContraPage } from './nueva-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaContraPageRoutingModule
  ],
  declarations: [NuevaContraPage]
})
export class NuevaContraPageModule {}
