import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaContraPage } from './nueva-contra.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaContraPageRoutingModule {}
