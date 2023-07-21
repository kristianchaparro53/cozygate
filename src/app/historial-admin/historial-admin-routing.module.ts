import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialAdminPage } from './historial-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialAdminPageRoutingModule {}
