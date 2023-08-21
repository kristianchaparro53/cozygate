import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuejasRPageRoutingModule } from './quejas-r-routing.module';

import { QuejasRPage } from './quejas-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuejasRPageRoutingModule
  ],
  declarations: [QuejasRPage]
})
export class QuejasRPageModule {}
