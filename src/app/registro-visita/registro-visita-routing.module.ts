import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroVisitaPage } from './registro-visita.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroVisitaPageRoutingModule {}
