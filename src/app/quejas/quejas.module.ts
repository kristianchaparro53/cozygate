import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuejasPageRoutingModule } from './quejas-routing.module';

import { QuejasPage } from './quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuejasPageRoutingModule
  ],
  declarations: [QuejasPage]
})
export class QuejasPageModule {}
