import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialResidentePage } from './historial-residente.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialResidentePageRoutingModule {}
