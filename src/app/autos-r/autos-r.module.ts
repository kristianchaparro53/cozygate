import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosRPageRoutingModule } from './autos-r-routing.module';

import { AutosRPage } from './autos-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosRPageRoutingModule
  ],
  declarations: [AutosRPage]
})
export class AutosRPageModule {}
