import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroResidentesPage } from './registro-residentes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroResidentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroResidentesPageRoutingModule {}
