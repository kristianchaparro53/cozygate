import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';

import { QrGeneradoPageRoutingModule } from './qr-generado-routing.module';

import { QrGeneradoPage } from './qr-generado.page';

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QrGeneradoPageRoutingModule
  ],
  declarations: [QrGeneradoPage]
})
export class QrGeneradoPageModule {}
