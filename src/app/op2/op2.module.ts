import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Op2PageRoutingModule } from './op2-routing.module';

import { Op2Page } from './op2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Op2PageRoutingModule
  ],
  declarations: [Op2Page]
})
export class Op2PageModule {}
