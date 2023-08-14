import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Op1PageRoutingModule } from './op1-routing.module';

import { Op1Page } from './op1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Op1PageRoutingModule
  ],
  declarations: [Op1Page]
})
export class Op1PageModule {}
