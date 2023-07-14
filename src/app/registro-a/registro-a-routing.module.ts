import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAPage } from './registro-a.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAPageRoutingModule {}
