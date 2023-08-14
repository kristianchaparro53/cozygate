import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Op3PageRoutingModule } from './op3-routing.module';

import { Op3Page } from './op3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Op3PageRoutingModule
  ],
  declarations: [Op3Page]
})
export class Op3PageModule {}
