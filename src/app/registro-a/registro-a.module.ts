import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAPageRoutingModule } from './registro-a-routing.module';

import { RegistroAPage } from './registro-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAPageRoutingModule
  ],
  declarations: [RegistroAPage]
})
export class RegistroAPageModule {}
