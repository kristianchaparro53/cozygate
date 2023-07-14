import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUPageRoutingModule } from './registro-u-routing.module';

import { RegistroUPage } from './registro-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUPageRoutingModule
  ],
  declarations: [RegistroUPage]
})
export class RegistroUPageModule {}
