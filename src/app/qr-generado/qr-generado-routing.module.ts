import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrGeneradoPage } from './qr-generado.page';

const routes: Routes = [
  {
    path: '',
    component: QrGeneradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrGeneradoPageRoutingModule {}
